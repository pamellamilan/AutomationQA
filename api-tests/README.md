\# Dog API Automation Tests | Pâmella Milan



!\[Node](https://img.shields.io/badge/Node.js-JavaScript-green)

!\[Jest](https://img.shields.io/badge/Test-Jest-red)

!\[Axios](https://img.shields.io/badge/HTTP-Axios-blue)



\---



\## 🎯 Objetivo



Automatizar testes para validação dos endpoints da \*\*Dog API\*\*, garantindo:



\* ✔ Status da API

\* ✔ Estrutura da resposta

\* ✔ Dados retornados

\* ✔ Tratamento de cenários negativos



\---



\## 🔗 API utilizada



https://dog.ceo/dog-api/



\---



\## 🧰 Tecnologias Utilizadas



\* Node.js

\* Jest

\* Axios



\---



\## 📁 Estrutura do Projeto



```bash id="xj3wz5"

DOG-API-AUTOMATION/

&#x20;├── tests/

&#x20;│   └── dogApi.test.js

&#x20;├── package.json

&#x20;├── package-lock.json

&#x20;└── README.md

```



\---



\## 🧪 Cenários Automatizados



\* 📋 Listar todas as raças

\* 🐕 Buscar imagens por raça válida

\* 🎲 Buscar imagem aleatória

\* ❌ Validar erro para raça inválida



\---



\## 📊 Validações Realizadas



\* Status Code

\* Campo `status` da resposta

\* Estrutura do JSON

\* Conteúdo retornado

\* Validação de URLs

\* Cenário negativo (erro 404)



\---



\## ⚙️ Pré-requisitos



\* Node.js instalado

\* npm instalado



\---



\## ▶️ Como Executar



\### 1. Instalar dependências



```bash id="6b1ogc"

npm install

```



\---



\### 2. Executar os testes



```bash id="n8pl6s"

npm test

```



\---



\## 📈 Resultado da Execução



Exemplo de saída:



```bash id="l9l01l"

PASS  tests/dogApi.test.js

✓ Deve listar todas as raças

✓ Deve retornar imagens de uma raça válida

✓ Deve retornar uma imagem aleatória

✓ Não deve retornar imagens para raça inválida

```



\---



\## 🚀 Boas Práticas Aplicadas



\* Estrutura organizada de testes

\* Separação de responsabilidades

\* Validação de cenários positivos e negativos

\* Testes independentes

\* Código limpo e legível



\---



\## 📬 Autor



\*\*Pâmella Milan\*\*



\---



\## 🏁 Considerações Finais



Este projeto demonstra a automação de testes de API com foco em qualidade, confiabilidade e boas práticas de desenvolvimento, atendendo aos requisitos do desafio técnico.



\---



