const { Router } = require("express");
const router = Router();

const {
  renderIndex,
  renderEntries,
  renderNewEntry,
} = require("../controller/entries.controller");

router.get("/", renderIndex);
router.get("/new-entry", renderEntries);
router.post("/new-entry", renderNewEntry);

module.exports = router;
