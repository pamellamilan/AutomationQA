# 🚀 Performance Tests | BlazeDemo

## 🎯 Objetivo
Validar o desempenho da aplicação BlazeDemo simulando:
- Compra de passagem aérea
- Carga de 250 requisições por segundo

## 🧰 Ferramenta
- k6

## ▶️ Execução
k6 run performance/blaze-test.js

## 📊 Cenários
- Teste de carga (250 req/s)
- Teste de pico (até 400 req/s)

## 📈 Critérios
- p90 < 2 segundos
- Taxa de erro < 1%

## 📊 Resultado
O sistema atendeu ao critério de aceitação para carga nominal.
