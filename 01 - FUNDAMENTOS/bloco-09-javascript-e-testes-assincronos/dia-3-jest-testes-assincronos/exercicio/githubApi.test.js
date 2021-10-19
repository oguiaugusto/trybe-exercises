// githubApi.test.js

const fetch = require('node-fetch');

const getRepos = (url) => {
  const repositories = fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name));
  return repositories;
};

// implemente seus testes aqui

describe('Testa a função getRepos()', () => {
  it('Testa se existem os repositórios esperados na lista', async () => {
    const apiUrl = 'https://api.github.com/orgs/tryber/repos';
    const repos = await getRepos(apiUrl);
    expect(repos).toContain('sd-01-week4-5-project-todo-list');
    expect(repos).toContain('sd-01-week4-5-project-meme-generator');
  });
});
