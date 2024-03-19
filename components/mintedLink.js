import { ethers } from "ethers";
import { useEffect } from "react";
import styles from "./mintedLink.module.css";

export default function MintedLink({freeMintWait, allowlistMintBitchesWait, mintBitchesWait, setShowMintedMarquee}) {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeText}>
        {(mintBitchesWait.isLoading || mintBitchesWait.data) && (
          <>
            {(mintBitchesWait.isLoading) && (<span>MINTING…</span>)}
            {(mintBitchesWait.data && !mintBitchesWait.isLoading) && (<span>SUCCESS!&nbsp;</span>)}
            {(mintBitchesWait.data?.logs && !mintBitchesWait.isLoading) && (
              <span>
                VIEW TOKEN{mintBitchesWait.data?.logs?.length > 1 && 's'} ON OPENSEA:&nbsp;
                {mintBitchesWait.data?.logs.map((entry, index) => {
                  return <><a key={index} className={styles.mintLink} target="_blank" rel="noreferrer" href={`https://${process.env.NEXT_PUBLIC_VERCEL_ENV != 'production' ? 'testnets.' : ''}opensea.io/assets/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}/${parseInt(entry.topics[3])}`}>#{parseInt(entry.topics[3])}</a>&nbsp;</>
                })}
              </span>
            )}
          </>
        )}
        {(allowlistMintBitchesWait || allowlistMintBitchesWait.data) && (
          <>
            {(allowlistMintBitchesWait.isLoading) && (<span>MINTING…</span>)}
            {(allowlistMintBitchesWait.data && !allowlistMintBitchesWait.isLoading) && (<span>SUCCESS!&nbsp;</span>)}
            {(allowlistMintBitchesWait.data?.logs && !allowlistMintBitchesWait.isLoading) && (
              <span>
                VIEW TOKEN{allowlistMintBitchesWait.data?.logs?.length > 1 && 's'} ON OPENSEA:&nbsp;
                {allowlistMintBitchesWait.data?.logs.map((entry, index) => {
                  return <><a key={index} className={styles.mintLink} target="_blank" rel="noreferrer" href={`https://${process.env.NEXT_PUBLIC_VERCEL_ENV != 'production' ? 'testnets.' : ''}opensea.io/assets/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}/${parseInt(entry.topics[3])}`}>#{parseInt(entry.topics[3])}</a>&nbsp;</>
                })}
              </span>
            )}
          </>
        )}
        {(freeMintWait.isLoading || freeMintWait.data) && (
          <>
            {(freeMintWait.isLoading) && (<span>MINTING…</span>)}
            {(freeMintWait.data && !freeMintWait.isLoading) && (<span>SUCCESS!&nbsp;</span>)}
            {(freeMintWait.data?.logs && !freeMintWait.isLoading) && (
              <span>
                VIEW TOKEN{freeMintWait.data?.logs?.length > 1 && 's'} ON OPENSEA:&nbsp;
                {freeMintWait.data?.logs.map((entry, index) => {
                  return <><a key={index} className={styles.mintLink} target="_blank" rel="noreferrer" href={`https://${process.env.NEXT_PUBLIC_VERCEL_ENV != 'production' ? 'testnets.' : ''}opensea.io/assets/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}/${parseInt(entry.topics[3])}`}>#{parseInt(entry.topics[3])}</a>&nbsp;</>
                })}
              </span>
            )}
          </>
        )}
      </div>
      <button className={styles.closeButton} onClick={(e) => setShowMintedMarquee(false)}>
        x
      </button>
    </div>
  );
}
