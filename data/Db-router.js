const express = require("express");

const db = require("./dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("accounts")
    .then(account => {
      res.status(200).json(account);
    })
    .catch(error => {
      console.log(error);

      res.status(500).json({ error: "failed to get the accounts" });
    });
});

router.get("/:id", (req, res) => {
  db("accounts")
    .where({ id: req.params.id })
    .first()
    .then(accounts => {
      res.status(200).json(post);

      res.status(500).json({ error: "failed to get the accounts" });
    });
});

router.post("/", (req, res) => {
  db.insert(req.body, "id")
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(error => {
      console.log(error);

      res.status(500).json({ error: "failed to get list car ids" });
    });
});

router.put("/:id", (req, res) => {
  db("cars")
    .where({ id })
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(error => {
      console.log(error);

      res.status(500).json({ error: "failed to remove the car" });
    });
});

router.delete("/:id", (req, res) => {
  db("cars");
  where({ id }).del();
});

module.exports = router;
