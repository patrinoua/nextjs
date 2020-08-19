import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Web and App developer based in Berlin. This is my first Next.js App!</p>
        {/* <Link href="/">
          <a>Back to home!</a>
        </Link> */}
      </section>
    </Layout>
  )
}
