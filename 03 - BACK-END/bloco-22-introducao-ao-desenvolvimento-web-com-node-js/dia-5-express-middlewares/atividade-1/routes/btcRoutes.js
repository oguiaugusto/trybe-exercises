const express = require('express');
const validateBtcToken = require('../middlewares/validateBtcToken');
const getBtcApi = require('../services/btcApi');

const router = express.Router();

router.get(
  '/price',
  validateBtcToken,
  async (req, res) => {
    const data = await getBtcApi();
    res.status(200).json(data);
  }
);

module.exports = router;
