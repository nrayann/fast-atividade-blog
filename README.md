# FAST Aceleração - Projeto de Conclusão do Módulo React

Neste projeto, você terá a oportunidade de aplicar seus conhecimentos em React, utilizando o Create React App com Material UI, para criar um site de blog. O projeto consiste em três partes principais: uma lista de publicações, uma página de visualização de publicação e um formulário de contato. Além disso, você encontrará desafios específicos para cada uma dessas partes.

## Descrição do Projeto

### Configuração de rotas e tema (App.jsx)

Nesta parte do projeto, você irá criar uma rota para o endereço "/contato" que renderizará o componente `Contact`, a rota deve ser adicionada logo após a rota que renderiza o componente `Post`

### Lista de Publicações (pages/Posts/index.jsx)

Nesta parte do projeto, você irá criar uma página que exibirá uma lista de publicações. Aqui estão os desafios que você deve cumprir:

- Renderizar condicionalmente o componente "Loading" com base no estado `isLoading`.

- Criar um estado chamado `posts` e inicializá-lo com um array vazio `[]`.

- Utilizar o hook `useEffect` para, assim que a página carregar, executar o método `getPosts`.

- Renderizar uma lista de posts utilizando o método `map`, exibindo o título, a data de criação e um link para visualizar o post completo.

### Visualização de Publicação (pages/Post/index.jsx)

Nesta parte do projeto, você irá criar uma página que permitirá a visualização de uma única publicação. Aqui estão os desafios que você deve cumprir:

- Renderizar condicionalmente o componente "Loading" com base no estado `isLoading`.

- Criar um estado chamado `post` e um estado chamado `postCreator`, ambos inicializados com `null`.

- Utilizar o hook `useEffect` para, assim que o ID do post estiver disponível, executar o método `getPost`.

- Utilizar outro hook `useEffect` para, assim que o post estiver disponível, executar o método `getPostCreator`.

- Renderizar os valores `title`, `photo_url` e `content_html` nos locais apropriados da página.

- Renderizar os créditos do post chamando o método `getCredits` no local apropriado.

### Formulário de Contato (pages/Contact/index.jsx)

Nesta parte do projeto, você irá criar um formulário de contato. Aqui estão os desafios que você deve cumprir:

- Renderizar condicionalmente o componente "Loading" com base no estado `isLoading`.

- Adicionar o atributo `name` e o evento `onChange` aos componentes `TextField` para que funcionem com o método `handleChange`.

- Desabilitar o componente `Button` condicionalmente com a prop `disabled` quando `isLoading` for verdadeiro ou o formulário não estiver válido.

- Corrigir o método `getAlert` com renderização condicional baseada no valor de `errorMessage`.

- Executar o método `sendData` quando o botão "Enviar" for clicado.

## Como Iniciar o Projeto

1. Baixe este projeto para sua máquina local.

2. Navegue até a pasta do projeto usando o terminal.

3. Instale as dependências do projeto com o comando `npm install`.

4. Execute o projeto com o comando `npm start`.

5. Acesse o projeto no seu navegador em `http://localhost:3000`.

## Links úteis

- [Documentação - Create React App](https://create-react-app.dev/docs/getting-started)

- [Documentação - useEffect hook](https://react.dev/reference/react/useEffect)

- [Documentação - useState hook](https://react.dev/reference/react/useState#setstate)

- [Documentação - Renderizando listas com map()](https://react.dev/learn/rendering-lists)

- [Documentação - Material UI](https://mui.com/material-ui/getting-started/)

- [Versão final do BLOG](https://fast-atividade-blog.vercel.app/)
