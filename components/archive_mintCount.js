import styles from "./mintCount.module.css";
import Image from "next/image";

export default function MintCount({
  totalSupply,
  getCollectionSize
}) {
  return (
    <div className={styles.mintCount}>
      <Image
        className={styles.mintIcon}
        src="/images/pinkstar.png"
        alt=""
        width={125}
        height={125}
        sizes="100vw"
      />
      <span className={styles.mintText}>{totalSupply?.data?.toNumber()} / {getCollectionSize?.data?.toNumber()}<br></br> minted!</span>
    </div>
  );
}
