# Automação de mensagens

Esse repositorio esta armazenando apenas os codigos front end da aplicação, se deseja visualizar o back end [clique aqui](https://github.com/Felipecdc/api-cancun)

## Informações

🔧 Backend Sólido: Com Node.js, Express e MongoDB, desenvolvi uma estrutura que garante a integridade e eficiência dos dados dos usuários e clientes. A aplicação envia lembretes automáticos para os clientes, garantindo que eles nunca percam uma oportunidade de agendar seus serviços.

🎨 Frontend Intuitivo: Utilizando React, TypeScript, Vite e SASS, construí uma interface amigável e responsiva. A tela principal apresenta cards com informações detalhadas dos clientes, com modais que permitem atualizações dinâmicas e validação de dados em tempo real.

✨ Componentização e Reutilização: Criei componentes reutilizáveis que garantem a eficiência e a manutenibilidade do código. Estruturei o projeto de forma modular, com pastas organizadas para actions e funções compartilhadas.

🔒 Validação e Segurança: Cada usuário possui uma chave única que é validada ao atualizar informações. O sistema fornece feedback visual imediato e notificações elegantes com React Toastify.

## Tela home
<img src="https://github.com/Felipecdc/prod-cancun/blob/main/assets/home.png" alt="deploy" width="100%" height="auto">

## Tela home com modal
O modal tem o intuito de iformar qual cliente esta sendo selecionado para atualização de serviço agendando para o dia atual ca confirmação.

- Para confirmação, cada user (owner) tem uma key, essa key devera ser inserido no input, caso o campo esteja vazio ou com a key invalida, exibira uma animação de e alteração de cor, mas caso esteja correto a ação sera confirmada e exibira um toast de confirmação
- 
<img src="https://github.com/Felipecdc/prod-cancun/blob/main/assets/modal.png" alt="deploy" width="100%" height="auto">

## Tela create client
<img src="https://github.com/Felipecdc/prod-cancun/blob/main/assets/create.png" alt="deploy" width="100%" height="auto">
