<p align="center">
  <img src="http://img.shields.io/static/v1?label=STATUS&message=Concluded&color=blue&style=flat"/>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Rafa-KozAnd/Ignite_Node.js_Challenge_03">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/top/Rafa-KozAnd/Ignite_Node.js_Challenge_03">
  <img alt="GitHub repo file count" src="https://img.shields.io/github/directory-file-count/Rafa-KozAnd/Ignite_Node.js_Challenge_03">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/Rafa-KozAnd/Ignite_Node.js_Challenge_03">
  <img alt="GitHub language count" src="https://img.shields.io/github/license/Rafa-KozAnd/Ignite_Node.js_Challenge_03">
</p>

# Ignite_Node.js_Challenge_03

Node JS challenge done with 'Rocketseat' Ignite course. ("Desafio 03 - Corrigindo o código")

# 💻 Sobre o desafio

Nesse desafio, temos uma aplicação Node.js que está em processo de desenvolvimento mas que já possui os testes necessários para fazer toda a validação dos requisitos (você não deve mexer nos testes).
Após algumas alterações no código da aplicação, parte dos testes deixaram de passar e agora só você pode resolver esse problema. Bora lá? 🚀

Essa aplicação realiza o CRUD (**C**reate, **R**ead, **U**pdate, **D**elete) de repositórios de projetos. Além disso, é possível dar likes em repositórios cadastrados, aumentando a quantidade de likes em 1 a cada vez que a rota é chamada.

A estrutura de um repositório ao ser criado é a seguinte:

{
  id: uuid(),
  title,
  url,
  techs,
  likes: 0
}

Descrição de cada propriedade:

- **id** deve ser um uuid válido;
- **title** é o título do repositório (por exemplo "unform");
- **url** é a URL que aponta para o repositório (por exemplo "[https://github.com/unform/unform](https://github.com/unform/unform)");
- **techs** é um array onde cada elemento deve ser uma string com o nome de uma tecnologia relacionada ao repositório (por exemplo: ["react", "react-native", "form"]);
- **likes** é a quantidade de likes que o repositório recebeu (e que vai ser incrementada de 1 em 1 a cada chamada na rota de likes).

Note que a quantidade de likes deve sempre ser zero no momento de criação.
