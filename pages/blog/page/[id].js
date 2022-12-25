import { constants } from '../../../constants/const';
import { client } from '../../../libs/client';
import Home from '../../index';

export default function BlogPageId({blog, totalArticleCount, perPageLimit}) {
    return (
        <Home blog={blog} totalArticleCount={totalArticleCount} perPageLimit={perPageLimit} />
      );
};

// 動的なページ作成
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });
  
    const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);
  
    const paths = range(1, Math.ceil(data.totalCount / constants.PER_PAGE)).map((data) => `/blog/page/${data}`);
  
    return { paths, fallback: false };
}

// microCMSのデータを取得
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const limit = constants.PER_PAGE;
    const queries = {
      limit: limit,
      offset: (id - 1) * limit,
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
