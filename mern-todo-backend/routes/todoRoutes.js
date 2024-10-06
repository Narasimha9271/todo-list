const express = require("express");
const Todo = require("../models/Todo");
const router = express.Router();

// Get all todos
router.get("/", async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// Add a new todo
router.post("/", async (req, res) => {
    const { task } = req.body;
    const todo = new Todo({
        task,
    });
    const createdTodo = await todo.save();
    res.status(201).json(createdTodo);
});

// Delete a todo
router.delete("/:id", async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (todo) {
        await todo.remove();
        res.json({ message: "Todo removed" });
    } else {
        res.status(404).json({ message: "Todo not found" });
    }
});

module.exports = router;
