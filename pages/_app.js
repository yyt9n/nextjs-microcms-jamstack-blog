import '../styles/globals.css'
import { Noto_Sans_JP } from '@next/font/google'

const Noto_Sans_JP_normal = Noto_Sans_JP({
  weight: ['400', '700'],
  style: ['normal'],
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={Noto_Sans_JP_normal.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
