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
                <link href="https://fonts.googleapis.com/css2?family=Bayon&family=Dancing+Script:wght@600&family=IM+Fell+French+Canon+SC&family=Irish+Grover&family=Oswald:wght@400;500&family=Paytone+One&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,900&family=Rum+Raisin&family=Yuji+Mai&family=Yusei+Magic&display=swap" rel="stylesheet" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta property="og:image" content="https://www.uglybitches.exposed/images/dolllookingatbitches.png" />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main>{children}</main>
        </div>
    );
}