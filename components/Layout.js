import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import styles from '../styles/sass/styles.module.scss'

export default function Layout({ children, headTitle="ハムソーヤ | 手づくりハム・ソーセージ専門メディア" }) {
    return (
        <div className="">
            <Head>
                <title>{headTitle}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <main className={styles.c_layout_main}>
                {children}
            </main>
            <Footer />
        </div>
    );
}