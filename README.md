<p id="voltar">
<a href="#sobre">Sobre</a> |
<a href="#tecnologias">Tecnologias</a> |
<a href="#documentação">Documentação</a> |
<a href="#requisitosFuncionais">Requisitos Funcionais</a> |
<a href="#requisitosTecnicos">Requisitos Técnicos</a> |
<a href="#local">Rodando o projeto local</a> |
<a href="#desenvolvedor">Desenvolvedor</a>
</p>

<img width="300xp" src=""/>

<h1 id="sobre"> Projeto Motrix 📝</h1>

Uma aplicação **full-stack** desenvolvida para o processo seletivo da [Motrix](https://www.motrix.global/). O **front-end** é um app **first mobile** desenvolvido em [React.JS](https://pt-br.reactjs.org/) com [JavaScript](https://www.javascript.com/) como linguagem principal. Também fiz a manipulação de alguns componentes do [Materia.Ui](https://mui.com/pt/). Já o **back-end** é uma API REST desenvolvida em [Node.JS](https://nodejs.org/en/) com [TypeScript](https://www.typescriptlang.org/) como linguagem principal, [MySql](https://www.mysql.com/) como banco de dados e [Jest](https://jestjs.io/pt-BR/) para os testes unitários da aplicação. O site tem como função mostrar uma lista de posts que estão cadastrados no banco de dados, o usuário pode selecionar o que tiver interesse, ao selecionar algum ele será direcionado para a página de detalhe desse post específico, lá é possível editar, ver o histórico ou até mesmo deleta-lo. O site  também conta com a opção de criar um novo post.

<h2 id="tecnologias">🛠 Tecnologias ⬇️</h2>
<b> Front-End: </b>

- [JavaScript](https://www.javascript.com/)
- [ReactJS](https://pt-br.reactjs.org/)
- [Material.Ui](https://mui.com/pt/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://axios-http.com/ptbr/docs/intro)

<b> Back-End: </b>

- [TypeScript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/en/docs/)
- [MySql](https://dev.mysql.com/doc/)
- [TypeORM](https://typeorm.io/)
- [Jest](https://jestjs.io/pt-BR/docs/api)


<h2 id="documentação">📃 Documentação da API no Postman</h2>

- [Postman](https://documenter.getpostman.com/view/20351432/2s8YKCJPUj)

<h2 id="requisitosFuncionais">Requisito Funcionais ✔</h2>

- ✅ Criar, editar, listar, visualizar e apagar conteúdos;
- ✅ Visualizar o histórico de modificações de cada conteúdo;
- ✅ Cada modificação salva no conteúdo deve ser registrada como uma nova revisão, nunca sobrescrevendo ou apagando as versões anteriores anterior;
- ✅ O histórico de modificações deve exibir, em ordem cronológica pela data de atualização, todas as versões de um conteúdo específico, viabilizando a navegação entre as diferentes versões;
- ✅ Na visualização ou listagem dos conteúdos, o usuário deve ter acesso à versão mais atualizada de cada conteúdo.

<h2 id="requisitosTecnicos">Requisitos Técnicos 🛠️ </h2>

- ✅ O front-end deverá ser desenvolvido em React, com ou sem framework;
- ✅ O back-end deverá ser desenvolvido em Node.js, com ou sem framework;
- ✅ A comunicação entre a aplicação e a camada de dados deverá ser através de uma API REST;
- ✅ Todos os campos de formulário devem estar com validações adequadas;

<h2 id="local"> 💻 Rodando o projeto na sua máquina</h2>

### Pré-Requisitos

- Um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
- Para fazer a instalação você vai precisar do [Node.JS](https://nodejs.org/en/download/)
- Uma instância de um banco de dados [MySQL](https://www.mysql.com/)


### Como instalar e rodar
* Para baixar o projeto
```
1. git clone https://github.com/efss7/seletivo-motrix.git
```
* Para instalar e rodar o server (obrigatório)
```
2. cd seletivo-motrix/server
3. npm install
```
4. Renomeie o arquivo ```.env.example```  para ```.env``` e preencha as variáveis com seus dados do banco de dados MySQL. É muito importante para a execução do servidor.
```
5. npx typeorm-ts-node-commonjs migration:run -d ./src/services/DataSource.ts
6. npm run dev
```

* Para rodar os testes unitários (opcional)
```
7. npm run test
```
* Para rodar a web (obrigatório)

 ⚠️ Para rodar o web, é necessário deixar o servidor online (como é feito nos passos anteriores),
 logo depois é **necessário abrir um novo terminal e rodar os comandos abaixo** ⬇️ 
```
8. cd seletivo-motrix/web
9. npm install
10. npm run dev
```
Após rodar o último comando no seu terminal, ele irá retornar um link, é necessário que coloque ele no seu navegador ou clique aqui ➡️ http://localhost:3000/

<h2 id="screenshot">📸 Screenshot</h2>

<h4>A aplicação conta com 3 telas: ⬇️<h4>

- 1️⃣ HomePage
- 2️⃣ AddPostPage
- 3️⃣ DetailPostPage

<div display="flex">
<img width="100xp" src=""/>
<img width="100xp" src=""/>
<img width="100xp" src=""/>

</div>


<h2 id="desenvolvedor">👨‍💻 Desenvolvedor</h2>


<table>
<td><a href="https://github.com/efss7"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/99001809?v=4" width="100px;" alt="Imagem profile Eric Silva desenvolvedor"/><br /><sub><b>Eric Silva </b></sub></a><br />
</table>

<a href="#voltar">Voltar para o topo ⬆️</a>
