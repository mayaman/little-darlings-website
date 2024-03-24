import Image from 'next/image';
import styles from './logo.module.css';

export default function logo({ src, alt }) {
    return (
        <div className={styles.logoWrapper} >
            {/* <Image
                src={src}
                alt={alt}
                width={1728}
                height={1220}
                sizes="100vw"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 999
                }}
            /> */}
            <h1 className={styles.title}>LITTLE DARLINGS</h1>
            <h2 className={styles.subtitle}>Hello 👋 I'm a thief 💰💸🤑 and I'm here to steal 🤝 your heart ❤️‍🔥</h2>
        </div>

    );
}