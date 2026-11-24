import asyncio
import json
import unittest

from starlette.requests import Request
from backend.rate_limit import real_client_ip
from backend.main import app, global_exception_handler

class Guvenlik(unittest.TestCase):
    def test_ip_baslik_sahteciliği(self):
        request = Request({'type': 'http', 'headers': [(b'x-forwarded-for', b'203.0.113.8')], 'client': ('127.0.0.1', 1234)})
        self.assertEqual(real_client_ip(request), '127.0.0.1')

    def test_exception_ayrinti_yok(self):
        response = asyncio.run(global_exception_handler(None, ValueError('SENTETIK_GIZLI')))
        body = json.loads(response.body)
        self.assertNotIn('SENTETIK_GIZLI', json.dumps(body))
        self.assertNotIn('ValueError', json.dumps(body))

    def test_cors_preflight_yerel_ve_dis_kaynak(self):
        async def preflight(origin):
            messages = []
            received = False
            async def receive():
                nonlocal received
                if not received:
                    received = True
                    return {'type': 'http.request', 'body': b'', 'more_body': False}
                await asyncio.sleep(3600)
            async def send(message):
                messages.append(message)
            await app({'type': 'http', 'asgi': {'version': '3.0'}, 'http_version': '1.1',
                       'method': 'OPTIONS', 'scheme': 'http', 'path': '/api/me', 'raw_path': b'/api/me',
                       'query_string': b'', 'root_path': '', 'client': ('127.0.0.1', 1234),
                       'server': ('127.0.0.1', 9100),
                       'headers': [(b'origin', origin.encode()), (b'access-control-request-method', b'GET')]}, receive, send)
            start = next(m for m in messages if m['type'] == 'http.response.start')
            return start['status'], dict(start['headers'])
        good = asyncio.run(preflight('http://localhost:8000'))
        bad = asyncio.run(preflight('https://wiki.oluk.org'))
        self.assertEqual(good[0], 200)
        self.assertEqual(good[1].get(b'access-control-allow-origin'), b'http://localhost:8000')
        self.assertEqual(bad[0], 400)
        self.assertNotIn(b'access-control-allow-origin', bad[1])

    def test_cors_yalniz_yerel(self):
        middleware = next(m for m in app.user_middleware if m.cls.__name__ == 'CORSMiddleware')
        self.assertEqual(middleware.kwargs['allow_origins'], ['http://localhost:8000'])

if __name__ == '__main__':
    unittest.main()
