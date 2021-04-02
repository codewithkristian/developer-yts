import React from "react"
import { graphql } from "gatsby"
import { Cards, Hero, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <SiteMetadata
        title="Developer YouTube Channels"
        description="Check out our favorite developer YouTube channels"
        image={data.hero.url}
      />

      <Hero
        image={data.hero}
        tag="#coding"
        title="Developer YouTube Channels"
        description="Check out our favorite developer YouTube channels"
      />

      <Cards nodes={data.items.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery($tableName: String!) {
    hero: file(relativePath: { eq: "hero-travel.jpg" }) {
      ...HeroImageFragment
    }
    items: allAirtable(filter: { table: { eq: $tableName } }) {
      nodes {
        data {
          image {
            ...CardImageFragment
          }
          name
          slug
          summary
          topic
        }
      }
    }
  }
`
