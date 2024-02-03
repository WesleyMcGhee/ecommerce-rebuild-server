import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", async (req, res) => {
  return res.status(200).send("Hello World");
});

app.listen(4000, () => console.log("Server is lisening on port 4000"));
