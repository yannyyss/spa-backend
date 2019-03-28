const express = require("express");
const router = express.Router();
const axios = require("axios");
const baseUrl = "https://date.nager.at/Api/v2/AvailableCountries";

router.get("/all", async (req, res, next) => {
  try {
    const response = await axios.get(baseUrl);
    res.json(response.data);
  } catch (error) {
    console.log("No sirve:", error);
    res.status(400).json({ error: error });
  }
});

router.post("/holidays", async (req, res, next) => {
  try {
    //const year = req.body.year;
    console.log(req.body);
    const countryCode = req.body.countryCode;
    console.log(countryCode);
    const response = await axios.get(
      `https://date.nager.at/api/v2/publicholidays/2017/${countryCode}`
    );
    console.log("Holidays:", response.data);
    res.json(response.data);
  } catch (e) {}
});

module.exports = router;
