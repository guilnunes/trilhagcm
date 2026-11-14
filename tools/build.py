#!/usr/bin/env python3
"""Atualiza index.html e sw.js com todos os lotes de questoes/ (99-* sempre por ultimo) e incrementa a versao do cache."""
import os, re
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
files = sorted(f for f in os.listdir(os.path.join(R, 'questoes')) if f.endswith('.js'))
idx = open(os.path.join(R, 'index.html')).read()
tags = ''.join(f'<script src="questoes/{f}"></script>\n' for f in files) + '<script src="app.js"></script>'
idx = re.sub(r'(<script src="questoes/[^"]+"></script>\n)+<script src="app.js"></script>', tags, idx)
open(os.path.join(R, 'index.html'), 'w').write(idx)
sw = open(os.path.join(R, 'sw.js')).read()
core = ', '.join(f'"questoes/{f}"' for f in files)
sw = re.sub(r'const CORE = \[.*?\];', 'const CORE = ["./", "index.html", "app.js", "manifest.webmanifest", ' + core + ', "icons/icon-192.png", "icons/icon-512.png"];', sw, flags=re.S)
sw = re.sub(r'trilhagcm-v(\d+)', lambda m: f'trilhagcm-v{int(m.group(1))+1}', sw)
open(os.path.join(R, 'sw.js'), 'w').write(sw)
print(len(files), 'lotes;', re.search(r'trilhagcm-v\d+', sw).group(0))
