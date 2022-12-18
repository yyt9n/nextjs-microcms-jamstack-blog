import Link from "next/link";
import { client } from '../libs/client'
import styles from '../styles/sass/styles.module.scss'
import Head from 'next/head'
import Layout from "../components/Layout"

export default function Home({ blog }) {
  return (
    <Layout headTitle="test">
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                {blog.title}
                {blog.id}
              </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

// microCMSのデータを取得
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    }
  }
}