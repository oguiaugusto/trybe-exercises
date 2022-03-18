const fs = require('fs').promises;

const readTeams = async () => {
  try {
    const teams = await fs.readFile('./data/teams.json', 'utf8');
    return JSON.parse(teams);
  } catch (err) {
    return [];
  }

};

const writeTeams = async (content) => {
  try {
    const teams = await readTeams();
    
    teams.push(content);
    console.log(teams);
    await fs.writeFile('./data/teams.json', JSON.stringify(teams, null, 2));

    return teams;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = { writeTeams };
