import express from "express";
import { mockUsers } from "./db.js";
import e from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(mockUsers);
});

app.get("/health", (req, res) => {
  res.status(205).send({ ok: true });
});

// Query Parameters
app.get("/users/", (req, res) => {
    const {filter, value} = req.query
    if(!['name', 'email'].includes(filter)) res.status(404).send({ok: false, message: 'filter is not valid. only name and email accepted'})
    if(filter && value){
        return res.send(
            mockUsers.filter(e => e[filter].includes(value))
        ).status(200)
    }
    res.send(mockUsers).status(200)

});

// This is Route Parametr
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id))
    res.status("400").send({ ok: false, message: ":id parametr not found" });
  const result = mockUsers.find((e) => e.id == id);
  if (!result)
    res.status(404).send({ ok: false, message: "user not found with this ID" });
  res.status(200).send({ ok: true, data: result });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
