import Link from "next/link";
import { client } from '../libs/client'
import styles from '../styles/Home.module.scss'

export default function Home({ blog }) {
  return (
    <div className={styles.container}>
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
    </div>
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