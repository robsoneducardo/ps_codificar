# Budget Viewer for Mechanical sales and services

## Project created with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## For local development and tests:

You must have installed (the versions cited were used for development):
  - *npm* (v8.1.1)
  - *npx* (v8.1.1)
  - *node* (v16.13.13)

### get the project (running at localhost:3000 by default)
git clone https://github.com/robsoneducardo/ps_codificar_oficina.git
cd ps_codificar_oficina
npm install
npm start

# Organização do código (Extra)
O projeto foi feito com o create-react-app, e a estrutura criada pelo gerador de código foi respeitada.

Um modelo HTML de página foi criado e colocado na pasta model pra dar norte à criação do projeto.

Não utilizei a abordagem orientada a objetos para os componentes, seguindo o padrão do tutorial da Mozilla.
https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started

O acesso à API foi feita pelo componente base do projeto: App. Ele envia os elementos recebidos da API aos componentes responsáveis pela sua exibição ou (em caso de erro) renderiza uma mensagem para o usuário informando que os dados estão inacessíveis.

O componente Budget representa a visão básica de um orçamento a ser listado. Ele contém informações básicas e um botão para o cliente acessar a visão detalhada do orçamento. Em uma aplicação _nativa_ para mobile, seria necessário esconder a barra de rolagem e adicionar o comportamento que implementei no botão para o toque no elemento que é o orçamento.

O componente Filtro não foi implementado, apesar de ser visto nas primeiras versões de código e no modelo HTML. Ele tem como objetivo listar os clientes e os vendedores para que o gerente possa filtrar os orçamentos.
