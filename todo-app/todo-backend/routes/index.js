const express = require("express");
const router = express.Router();
const redis = require("../redis");

const configs = require("../util/config");

let visits = 0;

/* GET index data. */
router.get("/", async (req, res) => {
  visits++;

  res.send({
    ...configs,
    visits,
  });
});

router.get("/statistics", async (req, res) => {
  let addedTodos = { added_todos: 0 };
  addedTodos.added_todos += await redis.getAsync("added_todos");
  res.send(addedTodos);
});

module.exports = router;
