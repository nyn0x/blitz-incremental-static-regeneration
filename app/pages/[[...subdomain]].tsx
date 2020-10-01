import Layout from "app/layouts/Layout"
import { BlitzPage, GetStaticPaths, GetStaticProps } from "blitz"
import React from "react"

const Home = ({ datetime }) => {
  console.log("datetime", datetime)
  return <div>test: {datetime}</div>
}

Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export const getStaticProps: GetStaticProps = async (context) => {
  console.log("getStaticProps context", context)

  const { params } = context
  const { path } = params as any

  const url = path && path.length > 0 ? path[0] : "/"

  console.log("url", url)
  const res = await fetch("http://localhost:3000/api/make-static-subdomain", {
    method: "post",
    body: JSON.stringify({ url }),
  })
  const { datetime } = (await res.json()) || {}

  return {
    props: { datetime },
    //  // we will attempt to re-generate the page:
    //   // - when a request comes in
    //   // - at most once every 60 seconds
    revalidate: 60,
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // no static pages at build time
    paths: [],
    // Enable statically generating additional pages
    fallback: true,
  }
}

export default Home
