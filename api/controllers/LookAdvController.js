const moment = require('moment');

module.exports = {
  index(req, res) {
    LookAdv.find()
      .then(answers => {
        return res.json(answers);
      });
  },

  store(req, res) {
    const params = {
      imageUrl: req.body.imageUrl,
      answerIsAdv: req.body.answerIsAdv,
      answerName: req.body.answerName,
    };

    const imageName = params.imageUrl.match(/([0-9]|[a-z])*.(jpg|gif|swf|png)$/g)[0];

    LookAdv.findOne({ imageName })
      .then((answerFound) => {
        if (answerFound) {
          const evaluated = moment().diff(answerFound.updatedAt, 'minutes') > 30;

          return LookAdv.update(answerFound.id, {
            answerIsAdv: params.answerIsAdv,
            answerName: params.answerName,
            evaluated,
          });
        }

        return LookAdv.create({
          imageName,
          answerIsAdv: params.answerIsAdv,
          answerName: params.answerName,
        });
      })
      .then(answer => res.json(answer));
  },

  find(req, res) {
    const imageName = req.body.imageUrl.match(/([0-9]|[a-z])*.(jpg|gif|swf|png)$/g)[0];

    LookAdv.findOne({ imageName })
      .then(answerFound => {
        if (answerFound) {
          return res.json(answerFound);
        }

        return res.status(404).json(answerFound)
      });
  }
};