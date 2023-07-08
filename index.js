const express = require("express")

const app = express()
const format = require("date-format");
const port = process.env.PORT || 4000;

app.get("/",(req,res) => {
    res.status(200).send("Hi there i'm Avinash and  i just made a change to the code")
})

app.get("/api/v1/instagram", (req,res) => {
    const social = {
        userName: "Avinash372",
        followers: 276,
        follows: 224,
        date: format.asString("dd-MM-yyyy", new Date())
    }

    res.status(200).send(social)
})

app.get("/api/v1/facebook", (req,res) => {
    const social = {
        userName: "Avinash372",
        followers: 112,
        follows: 219,
        date: format.asString("dd-MM-yyyy", new Date())
    }

    res.status(200).send(social)
})

app.get("/api/v1/linkedin", (req,res) => {
    const social = {
        userName: "Avinash372",
        followers: 6,
        follows: 24,
        date: format.asString("dd-MM-yyyy", new Date())
    }

    res.status(200).send(social)
})

app.get("/api/v1/:keyword", (req, res) => {
    res.status(200).send(`${req.params.keyword} does not exist`)
})

app.listen(port, ()=> console.log("Listening to 4000"))

