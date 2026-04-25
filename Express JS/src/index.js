import express, { urlencoded } from "express";
import { mockUsers } from "./db.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send(mockUsers);
});

app.get("/health", (req, res) => {
  res.status(205).send({ ok: true });
});

// Query Parameters
app.get("/users/", (req, res) => {
  const { filter, value } = req.query;
  if (!["name", "email"].includes(filter))
    res.status(404).send({
      ok: false,
      message: "filter is not valid. only name and email accepted",
    });
  if (filter && value) {
    return res
      .send(mockUsers.filter((e) => e[filter].includes(value)))
      .status(200);
  }
  res.send(mockUsers).status(200);
});

// Creating new users with POST request (req.body to get field)
app.post("/users", (req, res) => {
  const { name, email, role } = req.body;

  if (!name?.trim() || !email?.trim()) {
    return res.status(400).send({
      success: false,
      message: "Name and email are required",
    });
  }

  const existingUser = mockUsers.find(
    (u) => u.email === email.trim().toLowerCase(),
  );

  if (existingUser) {
    return res.status(409).send({
      success: false,
      message: "Email already exists",
    });
  }

  const newUser = {
    id: mockUsers.length ? mockUsers[mockUsers.length - 1].id + 1 : 1,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    role: role ?? "user",
    isActive: true,
  };

  mockUsers.push(newUser);

  res.status(201).send({
    success: true,
    data: newUser,
  });
});

// This is Route Parameter
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id))
    res.status("400").send({ ok: false, message: ":id parameter not found" });
  const result = mockUsers.find((e) => e.id == id);
  if (!result)
    res.status(404).send({ ok: false, message: "user not found with this ID" });
  res.status(200).send({ ok: true, data: result });
});


// PUT request, updates entire record
app.put("/users/:id", (req, res) => {
  const { body = {}, params = {} } = req;

  const { name, email, role, isActive } = body;
  const { id } = params;
  const parsedId = parseInt(id);
  if (isNaN(parsedId))
    return res
      .status(400)
      .send({ success: false, message: "Id parameter is not a intager" });

  if (!name?.trim() && !email?.trim() && !role?.trim() && !isActive?.trim()) {
    return res.status(400).send({
      success: false,
      message: "body parameters missing",
    });
  }

  const findUserIndex = mockUsers.findIndex((e) => e.id === parsedId);
  if (findUserIndex === -1)
    return res
      .status(404)
      .send({ success: false, message: "User with this id not found" });

  mockUsers[findUserIndex] = {
    id: findUserIndex+1,
    name: name?.trim() ?? mockUsers[findUserIndex].name,
    email: email?.trim() ?? mockUsers[findUserIndex].email,
    role: role?.trim() ?? mockUsers[findUserIndex].role,
    isActive: isActive?.trim() ?? mockUsers[findUserIndex].isActive,
  };

  res.status(201).send({
    success: true,
    data: mockUsers[findUserIndex],
  });
});
