"""Sentetik testleri ve geçici dizine strict site derlemesini çalıştır."""
import os
import subprocess
import sys
import tempfile

commands = [
    [sys.executable, '-B', '-m', 'unittest', 'discover', '-s', 'tests', '-p', 'test_*.py', '-v'],
    ['node', '--test', 'tests/istemci.test.js'],
]
for command in commands:
    subprocess.run(command, check=True)
with tempfile.TemporaryDirectory(prefix='ajanmuhendis-build-', dir=os.getcwd()) as output:
    subprocess.run([sys.executable, '-B', '-m', 'mkdocs', 'build', '--strict', '--site-dir', output], check=True)
print('TEST VE STRICT BUILD: OK', flush=True)
