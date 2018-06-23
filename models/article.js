const articleSchema = new Schema({
  title: { type: String},
  date: { type: INT},
  URL: { type: String}
});

const Article = model("NY Times", Schema);
module.exports = Article;