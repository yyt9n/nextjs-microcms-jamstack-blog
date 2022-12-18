import Image from "next/image";
import Link from "next/link";
import styles from '../styles/sass/styles.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"


export default function Header() {
  return (
    <div>
      <header id={styles.header}>
        {/* メディアロゴ */}
        <div className={styles.headerImg}>
          <Image src="/hamsauya.png" alt="Vercel Logo" width={300} height={100} />
        </div>

        <nav className={styles.c_header_navbar}>
          <Link href="/">
            <FontAwesomeIcon icon={faBook} style={{ marginRight: "5px" }} />
            読む
          </Link>
          <Link href="">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginRight: "5px" }} />
            探す
          </Link>
          <Link href="">
            <FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: "5px" }} />
            学ぶ
          </Link>
        </nav>
      </header>
    </div>
  );
}