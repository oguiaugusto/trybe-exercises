const express = require('express');
const {
  validateName,
  validateInitials,
  validateCountry,
} = require('../middlewares/validateTeamsMiddleware');
const { readTeams, writeTeams } = require('../services/readAndWriteTeams');

const router = express.Router();

router.post(
  '/',
  validateName,
  validateInitials,
  validateCountry,
  async (req, res) => {
    const { name, initials, country, league = '' } = req.body;
    const teams = await writeTeams({ name, initials, country, league });
    return res.status(201).json(teams);
  }
);

router.get('/', async (req, res) => {
  const teams = await readTeams();

  if (teams.length === 0) return res.status(200).json({ teams: [] });
  return res.status(200).json(teams)
});

module.exports = router;
