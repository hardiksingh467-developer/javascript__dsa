import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

import dsaPlaylistController from "./controllers/dsaPlaylistController.js";
import dsaOneShotController from "./controllers/dsaOneShotController.js";

app.get("/playlist", dsaPlaylistController);
app.get("/one-shot", dsaOneShotController);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});