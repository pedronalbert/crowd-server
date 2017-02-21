module.exports = {
  index: function (req, res) {
    Moderate.find()
      .then(answers => res.json(answers));
  },

  find: function (req, res) {
    var url = req.body.url;

    Moderate.findOne({url: url})
      .then(function (savedAnswer) {
        if (savedAnswer) {
          return res.json(savedAnswer);
        } else {
          return res.notFound();
        }
      })
      .catch(function (err) {
        return res.badRequest();
      });
  }
};
