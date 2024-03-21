import styles from './dolls.module.css';
import Image from 'next/image';

export default function Dolls({ src, alt }) {
    return (
        <div className={styles.dollImageWrapper}>
            <Image
                className={styles.dollImage}
                alt="Little Darlings action figures"
                src={src}
                width={1080}
                height={1080}
                sizes="100vw"
                style={{
                    width: 'auto',
                    height: '90vh',
                }}
            />
            <div className={styles.dollBorder}>

            </div>
        </div>

    );
}