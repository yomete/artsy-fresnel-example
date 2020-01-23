import React from "react"

import * as Styles from "./styles"

const FeaturedArticle = ({ article }) => {
  return (
    <Styles.FeaturedArticleWrapper>
      <Styles.ArticleDetails>
        <Styles.Headline>{article.headline}</Styles.Headline>
        <Styles.Snippet>{article.snippet}</Styles.Snippet>
        <Styles.Date>{article.date}</Styles.Date>
      </Styles.ArticleDetails>
      <Styles.ImageWrapper>
        <img src={article.image}></img>
      </Styles.ImageWrapper>
    </Styles.FeaturedArticleWrapper>
  )
}
export default FeaturedArticle
