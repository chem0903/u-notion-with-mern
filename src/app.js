require("dotenv").config();
const express = require("express");
const app = express();

const mongodb = require("./config/db-config");
const userRoutes = require("./routes/user/userRoutes");

mongodb.connect(process.env.MONGO_URL);

app.use(express.json());

app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`${PORT}でサーバーを起動しました`));
