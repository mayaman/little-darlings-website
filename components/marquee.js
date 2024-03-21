import styles from './marquee.module.css';

export default function Marquee() {
    return (
        <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeText}>
                <div className={styles.movieName}> <p>FROM THE TEAM THAT BROUGHT YOU </p>
                    <p><a className={styles.marqueeLink} href="https://www.uglybitches.exposed/" target="_blank">UGLY BITCHES</a></p>
                </div>
                <div className={styles.movieName}><p>ANN</p> <p>HIRSCH</p></div>
                <div className={styles.movieName}><p>MAYA</p> <p>MAN</p></div>
                <div className={styles.movieName}><p>GOLIRA</p> <p>@0x901112a
                </p></div>

                <div className={styles.movieName}><p>AND...</p></div>

                <div className={styles.movieName}> <p>REAL</p>
                    <p>MEN ONLINE</p>
                </div>
            </div>
        </div>
    );
}