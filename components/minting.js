import Image from 'next/image';
import styles from './minting.module.css';

export default function minting() {
    return (
        <div className={styles.mintWrapper} >
            <h3 className={styles.releaseDate}>RELEASING FRIDAY, MARCH 29th, 1:00 pm ET</h3>

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
        </div>
    );
}