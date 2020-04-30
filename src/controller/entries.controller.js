const Entries = [];

const renderIndex = (req, res) => {
  res.render("index", { Entries });
};

const renderEntries = (req, res) => {
  res.render("new-entry");
};

const renderNewEntry = (req, res) => {
  const entries = {
    title: req.body.title,
    body: req.body.body,
    published: new Date(),
  };
  Entries.push(entries);
  res.redirect("/");
};

module.exports = { renderIndex, renderEntries, renderNewEntry };
