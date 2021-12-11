import React from "react";
import "./article.css";

function Article(props) {
  return <article className="article">{props.children}</article>;
}

export default Article;
