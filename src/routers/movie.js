const express = require("express");
const res = require("express/lib/response");
const { createTicket, getMoviesById } = require("../controllers/movie");

const router = express.Router();

router.get("/:screenId", getMoviesById);
router.post("/create-ticket", createTicket);

module.exports = router;
