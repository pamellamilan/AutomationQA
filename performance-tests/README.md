# 🚀 Performance Tests | BlazeDemo

## 🎯 Objetivo
Validar o desempenho da aplicação BlazeDemo simulando carga de 250 requisições por segundo.

## 🧰 Ferramenta
- k6

## ▶️ Execução
k6 run performance/blaze-test.js

## 📊 Critérios
- p90 < 2 segundos
- taxa de erro < 1%

## 📈 Resultado
Sistema atendeu aos critérios com p90 abaixo de 2s e baixa taxa de erro.

## 📬 Autor
Pâmella Milan
