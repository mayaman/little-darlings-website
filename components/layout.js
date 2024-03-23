import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Maya';
export const siteTitle = '𝙇𝙞𝙩𝙩𝙡𝙚 𝘿𝙖𝙧𝙡𝙞𝙣𝙜𝙨 ᯓ★';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/images/fireemoji.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Bowlby+One&family=Jockey+One&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Share+Tech&display=swap" rel="stylesheet"></link>
                <meta
                    name="description"
                    content="Little Darlings"
                />
                <meta property="og:image" content="https://www.uglybitches.exposed/images/dolllookingatbitches.png" />
                <meta property="og:image" itemprop="image primaryImageOfPage" content="https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon@2.png?v=73d79a89bded">

                    <meta name="og:title" content={siteTitle} />
                    <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main>{children}</main>
        </div>
    );
}