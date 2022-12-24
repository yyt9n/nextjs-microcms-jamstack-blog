import Image from "next/image";
import Link from "next/link";
import { client } from '../libs/client'
import styles from '../styles/sass/styles.module.scss'
import Layout from "../components/Layout"
import JstTimeFormatter from "../components/common/JstTimeFormatter";
import Pagination from "../components/common/Pagination";

export default function Home({ blog, totalArticleCount, perPageLimit }) {
  return (
    <Layout>
      <ul className={styles.c_index_articleList}>
        {blog.map((blog) => (
          <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <Image src={blog.thumbnailImg.url} alt={blog.title} width={70} height={70} className={styles.c_index_article_Img} />
                <div className={styles.c_index_article}>
                  <h1 className={styles.c_index_articleTitle}>
                    {blog.title}
                  </h1>
                  <div>
                    <JstTimeFormatter dateTime={blog.updatedAt} />
                  </div>
                </div>
              </Link>
          </li>
        ))}
      </ul>
      <Pagination totalCount={totalArticleCount} perPage={perPageLimit}/>
    </Layout>
  )
}

// microCMSのデータを取得
export const getStaticProps = async () => {
  const limit = 5;
  const queries = {
    limit: limit,
    offset: 0,
  };

  const data = await client.get({ endpoint: "blog", queries: queries });

  return {
    props: {
      blog: data.contents,
      totalArticleCount: data.totalCount,
      perPageLimit: limit,
    }
  }
}