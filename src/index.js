const express = require("express");

const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());

const repositories = [];

function findRepositoryByIndex(request, response, next){
  const { id } = request.params;

  if(!id) 
    return response.status(400).json({ error: 'id is required' });

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if(repositoryIndex === -1)
    return response.status(404).json({ error:'repository not found' });
    
  request.repositoryIndex = repositoryIndex;

  return next();
}

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  };

  repositories.push(repository);
  
  return response.status(201).json(repository);
});

app.put("/repositories/:id", findRepositoryByIndex, (request, response) => {
  const { repositoryIndex } = request;
  const { title, url, techs } = request.body;

  const updatedRepository = {
    title,
    url,
    techs
  };

  const repository = { ...repositories[repositoryIndex], ...updatedRepository };

  repositories[repositoryIndex] = repository;

  return response.json(repository);
});

app.delete("/repositories/:id", findRepositoryByIndex, (request, response) => {
  const { repositoryIndex } = request;

  repositories.splice(repositoryIndex, 1);

  return response.status(204).send();
});

app.post("/repositories/:id/like", findRepositoryByIndex, (request, response) => {
  const { repositoryIndex } = request;

  const likes = repositories[repositoryIndex].likes + 1;

  repositories[repositoryIndex].likes = likes;

  return response.status(201).json(repositories[repositoryIndex]);
});

module.exports = app;