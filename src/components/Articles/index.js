import React from "react"

import FeaturedArticle from "../FeaturedArticle/index"
import * as Styles from "./styles"

const articles = [
  {
    id: "1",
    date: "01-01-2020",
    headline: "Lorem ipsum dolor sit amet apem edit",
    category: "Lifestyle",
    snippet:
      "Cras a erat a quam efficitur vestibulum. Nulla in nisl semper, condimentum ex quis, semper elit.",
    image:
      "https://images.unsplash.com/photo-1579541707963-368970b955b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: "2",
    date: "02-01-2020",
    headline: "Lorem ipsum dolor sit amet apem edit",
    category: "Lifestyle",
    snippet:
      "Cras a erat a quam efficitur vestibulum. Nulla in nisl semper, condimentum ex quis, semper elit.",
    image:
      "https://images.unsplash.com/photo-1579571076332-acc4483d3eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1023&q=80",
  },
  {
    id: "3",
    date: "03-01-2020",
    headline: "Lorem ipsum dolor sit amet apem edit",
    category: "Lifestyle",
    snippet:
      "Cras a erat a quam efficitur vestibulum. Nulla in nisl semper, condimentum ex quis, semper elit.",
    image:
      "https://images.unsplash.com/photo-1579617881900-fe2590bc8384?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: "4",
    date: "04-01-2020",
    headline: "Lorem ipsum dolor sit amet apem edit",
    category: "Lifestyle",
    snippet:
      "Cras a erat a quam efficitur vestibulum. Nulla in nisl semper, condimentum ex quis, semper elit.",
    image:
      "https://images.unsplash.com/photo-1579626349272-8ecb1eba0421?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
]

const Articles = () => {
  const featuredArticle = articles.slice(0, 1)

  const desktopArticleGrids = articles.slice(1, 4)
  const mobileArticleGrids = articles.slice(0, 4)

  return (
    <>
      <FeaturedArticle article={featuredArticle[0]} />

      <Styles.Articles>
        {desktopArticleGrids.map(article => (
          <Styles.Card>
            <img src={article.image}></img>
            <Styles.Headline>{article.headline}</Styles.Headline>
            <Styles.FooterText>
              {article.category} {article.date}
            </Styles.FooterText>
          </Styles.Card>
        ))}
      </Styles.Articles>
    </>
  )
}

export default Articles
