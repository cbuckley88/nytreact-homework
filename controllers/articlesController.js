const db = require(module);

module.exports = {
  findAll: function(req, res) {
      console.log('articles - find');
    db.Article
      .find(req.query)
      .sort({ date: -1 })
  },
  remove: function(req, res) {
        console.log('articles - delete');

    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove());
  }
};

return Article();