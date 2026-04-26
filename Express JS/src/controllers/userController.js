import { mockUsers } from "../data/mockUsers.js";

export const getUsers = (req, res) => {
  const { filter, value } = req.query;

  if (filter && !["name", "email"].includes(filter)) {
    return res.status(400).json({
      success: false,
      message: "filter is required only name or email",
    });
  }

  if (filter && value) {
    const filtered = mockUsers.filter((u) =>
      u[filter].toLowerCase().includes(value.toLowerCase())
    );
    return res.status(200).json(filtered);
  }

  return res.status(200).json(mockUsers);
};

export const getUserById = (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "ID is not valid" });
  }

  const user = mockUsers.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
};

export const createUser = (req, res) => {
  const { name, email, role } = req.body;

  if (!name?.trim() || !email?.trim()) {
    return res.status(400).json({
      message: "Name and email is required",
    });
  }

  const exists = mockUsers.find(
    (u) => u.email === email.trim().toLowerCase()
  );

  if (exists) {
    return res.status(409).json({
      message: "Email already exist",
    });
  }

  const newUser = {
    id: mockUsers.length
      ? mockUsers[mockUsers.length - 1].id + 1
      : 1,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    role: role ?? "user",
    isActive: true,
  };

  mockUsers.push(newUser);

  res.status(201).json(newUser);
};

export const updateUser = (req, res) => {
  const id = Number(req.params.id);
  const { name, email, role, isActive } = req.body;

  if (isNaN(id)) {
    return res.status(400).json({ message: "ID is not valid" });
  }

  const index = mockUsers.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  mockUsers[index] = {
    ...mockUsers[index],
    name: name?.trim() ?? mockUsers[index].name,
    email: email?.trim() ?? mockUsers[index].email,
    role: role ?? mockUsers[index].role,
    isActive: isActive ?? mockUsers[index].isActive,
  };

  res.status(200).json(mockUsers[index]);
};

export const deleteUser = (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "ID is not valid" });
  }

  const index = mockUsers.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  mockUsers.splice(index, 1);

  res.status(200).json({ message: "Deleted successfully" });
};