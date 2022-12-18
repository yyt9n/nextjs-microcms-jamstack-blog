import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

export default function Layout({ children, headTitle="ハムソーヤ | 手づくりハム・ソーセージ専門メディア" }) {
    return (
        <div className="">
            <Head>
                <title>{headTitle}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <main className="">
                {children}
            </main>
            <Footer />
        </div>
    );
}