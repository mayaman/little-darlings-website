import Image from 'next/image';
import styles from './releaseDate.module.css';

export default function releaseDate({ src, alt }) {
    return (
        <div className={styles.dateWrapper} >
            <h3 className={styles.date}>Releasing March 29th at 1pm ET</h3>
        </div>
    );
}