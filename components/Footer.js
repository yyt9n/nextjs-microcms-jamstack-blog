import Image from "next/image";
import Link from "next/link";
import styles from '../styles/sass/styles.module.scss'

export default function Footer () {
  return (
    <div>
      <footer className={styles.c_footer_main}>
        <span class={styles.c_footer_boxTitle}>心満たされる、食卓を。</span>
        <div className={styles.c_footer_hamsauya}>
          <Image src="/hamsauya-icon.png" alt="Vercel Logo" width={100} height={100} />
          <p>
            Ham Sauyaは手づくりハムソー専門の職人が運営する秘密基地メディアです
          </p>
        </div>
        <ul className={styles.c_footer_listContents}>
          <li>Ham Sauyaについて</li>
          <li>ガイドライン</li>
          <li>利用規約</li>
          <li>個人情報の取り扱いについて</li>
          <li>運用会社について</li>
          <li>お問合わせ</li>
        </ul>
        <div className={styles.c_footer_copylight}>
          <Link
            href=""
            rel=""
          >
              © 2022 久松畜産「手づくり工房ぴあらハム」All Rights Reserved.
          </Link>
          <Image src="/hamsauya-icon.png" alt="Vercel Logo" width={20} height={20} />
        </div>
      </footer>
    </div>
  );
}