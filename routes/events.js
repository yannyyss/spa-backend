const express = require("express");
const router = express.Router();
const axios = require("axios");
const countriesUrl = "https://date.nager.at/Api/v2/AvailableCountries";

router.get("/all", async (req, res, next) => {
  try {
    const response = await axios.get(countriesUrl);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

router.post("/holidays", async (req, res, next) => {
  try {
    const countryCode = req.body.countryCode;
    const yearCode = req.body.yearCode;
    const response = await axios.get(
      `https://date.nager.at/api/v2/publicholidays/${yearCode}/${countryCode}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = router;
