#!/usr/bin/env python3
"""Teste de fumaça do app num navegador real (Playwright + Chromium).
Uso: python3 tools/test.py   (sai com código 1 se algo falhar)
Sobe um servidor local, faz login, fecha o aviso de novidades, responde questões
de todas as matérias e abre um simulado de 30 questões. Qualquer erro de página reprova."""
import os, socket, subprocess, sys, time
from playwright.sync_api import sync_playwright

R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
with socket.socket() as s:
    s.bind(("127.0.0.1", 0)); PORT = s.getsockname()[1]
srv = subprocess.Popen([sys.executable, "-m", "http.server", str(PORT), "-d", R, "--bind", "127.0.0.1"],
                       stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
time.sleep(1)
errs, fails = [], []
def check(cond, msg):
    if not cond: fails.append(msg)
try:
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page()
        pg.on("pageerror", lambda e: errs.append(str(e)))
        pg.goto(f"http://127.0.0.1:{PORT}/index.html"); pg.wait_for_timeout(800)
        pg.fill("#u", "guarda"); pg.fill("#pw", "sjdr2026"); pg.evaluate("doLogin()"); pg.wait_for_timeout(500)
        check(pg.evaluate("!!user"), "login não funcionou")
        check(pg.evaluate("!!document.getElementById('news')"), "aviso de novidades não apareceu no primeiro acesso")
        pg.evaluate("typeof closeNews==='function'&&closeNews()")
        n = pg.evaluate("QS.length")
        for s in ["esp", "leg", "por", "rl", "inf", "cg"]:
            pg.evaluate(f'startQuiz(QS.filter(x=>x.s==="{s}"),"teste {s}")'); pg.wait_for_timeout(150)
            for _ in range(3):
                pg.evaluate("pick(0)"); pg.wait_for_timeout(60); pg.evaluate("nav(1)")
            pg.evaluate("endQuiz()"); pg.wait_for_timeout(100)
        pg.evaluate("startSim()"); pg.wait_for_timeout(300)
        sim = pg.evaluate("cur.list.length")
        check(sim == 30, f"simulado com {sim} questões em vez de 30")
        news = pg.evaluate("NEWS[0].titulo")
        b.close()
finally:
    srv.terminate()
if errs: fails.append("erros de página: " + " | ".join(errs[:5]))
print(f"Questões no app: {n} | simulado: {sim} | novidade mais recente: {news}")
if fails:
    for f in fails: print("FALHOU: " + f)
    sys.exit(1)
print("OK")
