# Automação de Mensagens

Este repositório armazena os códigos front-end da aplicação. Para visualizar o back-end, [clique aqui](https://github.com/Felipecdc/api-cancun).

<h2> 🛠 &nbsp;Tech Stack</h2>
<h3>💻 &nbsp;Front-end:</h3>

![TypeScript](https://img.shields.io/badge/-TypeScript-333333?style=flat&logo=typescript&logoColor=2D79C7)
![React](https://img.shields.io/badge/-React-333333?style=flat&logo=react)

<h3>⚙️ &nbsp;Back-end e banco de dados:</h3>

![Node.js](https://img.shields.io/badge/-Node.js-333333?style=flat&logo=node.js)
![MongoDB](https://img.shields.io/badge/-MongoDB-333333?style=flat&logo=mongodb)

## Deploy vercel
[Clique aqui](https://prod-cancun.vercel.app/)

## Informações

- **Backend Sólido:** Com Node.js, Express e MongoDB, desenvolvi uma estrutura que garante a integridade e eficiência dos dados dos usuários e clientes. A aplicação envia lembretes automáticos para os clientes, garantindo que eles nunca percam uma oportunidade de agendar seus serviços.

- **Frontend Intuitivo:** Utilizando React, TypeScript, Vite e SASS, construí uma interface amigável e responsiva. A tela principal apresenta cards com informações detalhadas dos clientes, com modais que permitem atualizações dinâmicas e validação de dados em tempo real.

- **Componentização e Reutilização:** Criei componentes reutilizáveis que garantem a eficiência e a manutenibilidade do código. Estruturei o projeto de forma modular, com pastas organizadas para actions e funções compartilhadas.

- **Validação e Segurança:** Cada usuário possui uma chave única que é validada ao atualizar informações. O sistema fornece feedback visual imediato e notificações elegantes com React Toastify.

## Telas do Projeto

### Tela Home
![Tela Home](https://github.com/Felipecdc/prod-cancun/blob/main/assets/home.png)

### Tela Home com Modal
A modal tem o objetivo de informar qual cliente está sendo selecionado para atualização de serviço agendado para o dia atual, com confirmação.

- Cada usuário (owner) possui uma chave única que deve ser inserida no input. Se o campo estiver vazio ou a chave for inválida, uma animação de alerta será exibida junto com a alteração de cor. Caso contrário, a ação será confirmada e um toast de confirmação será exibido.

![Tela Home com Modal](https://github.com/Felipecdc/prod-cancun/blob/main/assets/modal.png)

### Tela de Criação de Cliente
![Tela de Criação de Cliente](https://github.com/Felipecdc/prod-cancun/blob/main/assets/create.png)
