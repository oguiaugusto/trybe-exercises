const express = require('express');
const {
  validateName,
  validateInitials,
  validateCountry,
} = require('../middlewares/validateTeamsMiddleware');
const { writeTeams } = require('../services/readAndWriteTeams');

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

module.exports = router;
