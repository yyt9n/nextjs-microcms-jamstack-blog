import Link from "next/link";
import styles from '../../styles/sass/styles.module.scss';

export default function Pagination({totalCount, perPage}) {
    // 1ページあたりのコンテンツ数
    const PER_PAGE = perPage;
    // ページネーション範囲の配列を返却
    const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

    return (
        <ul className={styles.c_pagination_ul}>
            {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
                <li key={index} className={styles.c_pagination_li}>
                    <Link href={ `/blog/page/${number}`} className={styles.c_pagenation_number}>
                        {number}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
