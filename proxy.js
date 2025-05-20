const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/results", async (req, res) => {
  try {
    const response = await fetch("https://api.tournament-live.com/v1/page/65fab9c06cb48c0015c373b5/tournament/67f80b631a96b90015d40158/results");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Fehler beim Abrufen der Turnierdaten." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy-Server läuft auf Port ${PORT}`);
});