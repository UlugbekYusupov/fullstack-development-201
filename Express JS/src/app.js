import express from "express";

const app = express();

const PORT = 3000;

app.get('/health', (request, response) => {
    response.send("Everything is OK!")
})

app.listen(PORT, () => {
    console.log(`Running at: ${PORT}`)
});