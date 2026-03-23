# 🚀 Web Automation Project | Pâmella Milan

![Cypress](https://img.shields.io/badge/Cypress-Automation-green)
![JavaScript](https://img.shields.io/badge/JavaScript-Tests-yellow)
![CI](https://img.shields.io/badge/CI-GitHub%20Actions-black)

---

## 🎯 Visão Geral

Projeto de automação de testes Web utilizando **Cypress**, com foco na validação de funcionalidades do usuário final.

Os testes simulam o comportamento real do usuário no navegador, garantindo que a aplicação funcione corretamente em cenários positivos e negativos.

---

## 🧰 Tecnologias Utilizadas

* Cypress
* JavaScript
* Node.js
* GitHub Actions (CI/CD)

---

## 📁 Estrutura do Projeto

```bash
cypress/
 ├── e2e/
 │   └── api-search.cy.js
 ├── fixtures/
 ├── support/
cypress.config.js
package.json
```

---

## ⚙️ Pré-requisitos

* Node.js instalado
* npm ou yarn

---

## ▶️ Como Executar

### 🔹 Instalar dependências

```bash
npm install
```

---

### 🔹 Abrir Cypress (modo interativo)

```bash
npx cypress open
```

---

### 🔹 Executar testes (modo headless)

```bash
npx cypress run
```

---

## 🧪 Cenários Automatizados

* 🔍 Busca por termo válido
* ❌ Busca sem resultados
* 📄 Validação de exibição de artigos
* 🌐 Navegação básica no site

---

## 🚀 Pipeline CI/CD

A pipeline executa automaticamente:

* ✔ Instalação de dependências
* ✔ Execução dos testes Cypress
* ✔ Validação dos resultados

Arquivo:

```bash
.github/workflows/pipeline.yml
```

---

## 💎 Boas Práticas Aplicadas

* Estrutura organizada de testes
* Separação de responsabilidades
* Testes independentes
* Cenários positivos e negativos
* Execução automatizada via pipeline

---

## 📬 Contato

**Pâmella Milan**

---

## 🏁 Conclusão

Este projeto demonstra a automação de testes Web com Cypress, garantindo qualidade e confiabilidade na experiência do usuário.

---
