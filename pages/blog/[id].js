import { client } from "../../libs/client";
import Image from "next/image";
import Layout from "../../components/Layout";
import JstTimeFormatter from "../../components/common/JstTimeFormatter";
import styles from '../../styles/sass/styles.module.scss'

export default function BlogId({blog}){
    return (
        <Layout>
            <header className={styles.c_blogDetailHeader}>
                <JstTimeFormatter dateTime={blog.updatedAt} />
                <h1 className={styles.c_blogDetailHeader_title}>{blog.title}</h1>
                <div className={styles.c_blogDetailHeader_author}>
                    <Image src={blog.thumbnailImg.url} alt={blog.title} width={50} height={50} className={styles.c_index_article_Img} />
                    <span>{blog.author[0]}</span>
                </div>
            </header>
            <div
                dangerouslySetInnerHTML={{
                    __html: `${blog.body}`,
                }}
                className={styles.post}
            />
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });
    const paths = data.contents.map((content)=>`/blog/${content.id}`);

    return {
        paths,
        fallback: false
    };
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", contentId: id });

    return {
        props: {
            blog: data,
        },
    };
}