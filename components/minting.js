import Image from 'next/image';
import styles from './minting.module.css';

export default function minting() {
    return (
        <div className={styles.mintWrapper} >
            <h3 className={styles.releaseDate}>🔥 RELEASING THIS FRIDAY, MARCH 29th 🔥</h3>

            <section className={styles.mintArea}>
                <div className={styles.mintInfo}>
                    {/* <select className={styles.customSelect} name="numDarlings">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select> */}

                    {/* 1 Little Darling = 0.1 ETH (334.22 USD) */}

                </div>
                {/* <button className={styles.mintButton}>MINT!</button> */}
            </section>

            <iframe className={styles.trailer} title="vimeo-player" src="https://player.vimeo.com/video/926994313?h=45a364975b" frameborder="0" allowfullscreen></iframe>
        </div>
    );
}