import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layout/Layout"
import { useStaticQuery } from "gatsby"
// import blogs from "../styles/blogs.css"

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <Layout>
      {posts.map(post => (
        <article key={post.id}>
          <Link to={post.fields.slug}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
          <small>
            {post.frontmatter.author}, {post.frontmatter.date}
          </small>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date
          title
          author
        }
        excerpt
        id
      }
    }
  }
`
