# Naive Melody

A aplicação permite criar mensagens, sejam elas uma poesia, um conselho ou letras de música. A ideia é expressar e consumir literatura. É possível avançar e voltar as mensagens clicando nos botões no canto do pergaminho. Foi adicionada a funcionalidade de avaliação com estrelas para cada carta!

Este projeto foi criado com o intuito de mostrar o meu aprendizado referente ao bootcamp focado em Frontend realizado pela iTalents. 

## Inserindo novas cartas:

Vá para a página de adição, adicione um título e coloque quantas frases quiser!

### Exemplo de entrada:

Título: "Saindo de casa"

campo 1: "Eu vou sair daqui" 

campo 2: "ainda hoje de manhã"

### Exibição:

"SAINDO DE CASA

Eu vou sair daqui

Ainda hoje de manhã"

## Como executar o projeto

Após clonar o repositório e abri-lo no editor de sua preferência, abra o terminal e execute a linha de comando para instalar as dependências no diretório do projeto:

- `cd naive-melody`
- `npm install`

E então execute a aplicação:

- `npm start`

Abra outro terminal para iniciar o Json-Server usando o comando:

- `npm run server`

Pronto! Agora basta esperar uma janela abrir com a aplicação sendo executada!

## Principais funcionalidades da aplicação:
- Usuário pode listar as cartas
- Usuário pode adicionar cartas
- Usuário pode avaliar as cartas
- Usuário pode alterar seu nome

## Rotas utilizadas

| Método HTTP | URL           |
|-------------|---------------|
| GET         | /letters      |
| POST        | /letters      |
| PATCH       | /letters/:id  |
