module.exports = {
  index(req, res) {
    Ebay.find()
      .then(answers => res.json(answers));
  },

  find: function (req, res) {
    var title = req.body.title;

    Ebay.findOne({title: title})
      .then(function (answer) {
        if (answer) {
          return res.json(answer);
        } else {
          return res.notFound();
        }
      })
      .fail(function (err) {
        return res.badRequest(err);
      })
  }
};
