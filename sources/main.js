import { mainArticles } from "./data/articles.data.js";

const articlesEl = document.getElementById("article-container");

mainArticles.forEach((art) => {
  articlesEl.appendChild(art.generateElement());
});
