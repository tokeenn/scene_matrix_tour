const express = require("express");
const path = require("path");
const app = express();

app.use("/css", express.static(path.resolve(__dirname, "frontend", "css")));
app.use("/script", express.static(path.resolve(__dirname, "frontend", "script")));
app.use("/frontend", express.static(path.resolve(__dirname, "frontend")));
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
});

app.listen(process.env.PORT || 5050, () => console.log("Server running..."));