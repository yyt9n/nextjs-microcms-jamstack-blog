import Link from "next/link";

export default function Pagination({totalCount, perPage}) {
    // 1ページあたりのコンテンツ数
    const PER_PAGE = perPage;
    // ページネーション範囲の配列を返却
    const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

    return (
        <ul>
            {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
                <li key={index}>
                    <Link href={ `/blog/page/${number}`}>
                        {number}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
