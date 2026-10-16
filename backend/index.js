const express = require("express");
const cors = require("cors")

const app = express();
app.use(cors())

app.get("/api", (req, res) => {
    res.json({
        message: "this is server"
    });
});

app.listen(3000, () => {
    console.log("server started on port 3000");
});


