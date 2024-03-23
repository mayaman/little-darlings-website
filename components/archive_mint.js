import { ethers } from "ethers";

import styles from "./mint.module.css";
import Image from "next/image";
import MintCount from "./archive_mintCount";

export default function Mint({
  src,
  alt,
  mintQuantity,
  setMintQuantity,
  maxPerWallet,
  maxPerTx,
  getCollectionSize,
  getMintPrice,
  isMintActive,
  isAllowlistMintActive,
  isFreeMintActive,
  getReservedFreeMint,
  totalSupply,
  numFreeMint,
  numberMinted,
  getOwnerFreeMintCount,
  getOwnerGiftsCount,
  freeMint,
  proofPaidMint,
  proofFreeMint,
  allowlistMintBitches,
  mintBitches,
}) {

  const handleSliderChange = (e) => {
    const value = e.target.value;
    if (value <= Math.min(
          maxPerTx?.data?.toNumber(),
          maxPerWallet?.data?.toNumber() - numberMinted?.data?.toNumber() + getOwnerFreeMintCount?.data + getOwnerGiftsCount?.data,
          getCollectionSize?.data?.toNumber() - (getReservedFreeMint?.data?.toNumber() - numFreeMint?.data?.toNumber()) - totalSupply?.data?.toNumber()
        )
      ) {
      setMintQuantity(e.target.value);
    }
  };

  return (
    <div className={styles.mint}>
      <div className={styles.mintIcon}>
{/* 
        <Image
          className={styles.mintImg}
          src={src}
          alt={alt}
          width={500}
          height={500}
          sizes="100vw"
        /> */}

        {
          (isMintActive?.data || isAllowlistMintActive?.data || isFreeMintActive?.data) ? (
            getCollectionSize?.data?.toNumber() - (getReservedFreeMint?.data?.toNumber() - numFreeMint?.data?.toNumber()) - totalSupply?.data?.toNumber() > 0 ? (
              isFreeMintActive?.data ? (
                proofFreeMint?.data?.valid ? (
                  getOwnerFreeMintCount?.data == 0 && getOwnerGiftsCount?.data == 0 ? (
                    <>
                      <span className={styles.mintText}>MINT YOURS TODAY!</span>
                      <div className={styles.slidercontainer}>
                        <span className={styles.sliderValue}>
                          You are on the VIP mint list!
                        </span>
                        <br></br>
                        <br></br>
                        <span className={styles.sliderValue}>1 ᗷ✩𝓲tς𝐡, 0 ETH</span>
                        <br></br>
                        <br></br>
                        <button
                          className={styles.mintButton}
                          onClick={() => {
                            freeMint?.write?.();
                          }}
                        >
                          MINT
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className={styles.mintText}>
                        YOU ALREADY MINTED YOUR FREE BITCH OR WERE GIFTED ONE!
                      </span>
                      <div className={styles.slidercontainer}>
                        <span className={styles.sliderValue}>
                          Come back soon<br></br>for the paid mint.
                        </span>
                      </div>
                    </>
                  )
                ) : (
                  proofPaidMint?.data?.valid ?
                    (
                    <>
                      <span className={styles.mintText}>
                        YOU ARE NOT ON THE VIP LIST<br></br>BUT YOU ARE ON THE ALLOWLIST!
                      </span>
                      <div className={styles.slidercontainer}>
                        <span className={styles.sliderValue}>
                          Come Friday 27, 10am PT<br></br>for the allowlist mint.
                        </span>
                      </div>
                    </>
                  ):(
                    <>
                      <span className={styles.mintText}>
                        YOU ARE NOT ON THE <br></br> VIP LIST OR ALLOWLIST!
                      </span>
                      <div className={styles.slidercontainer}>
                        <span className={styles.sliderValue}>
                          Come Saturday 28, 10am PT<br></br>for the paid mint.
                        </span>
                      </div>
                    </>
                  )
                )
              ) : (
                isAllowlistMintActive?.data ? (
                  proofPaidMint?.data?.valid ? (
                    numberMinted?.data?.toNumber() < maxPerWallet?.data?.toNumber() + getOwnerFreeMintCount?.data + getOwnerGiftsCount?.data ? (
                      <>
                        <span className={styles.mintText}>MINT YOURS TODAY!</span>
                        <div className={styles.slidercontainer}>
                          <input
                            className={styles.slider}
                            type="range"
                            value={mintQuantity}
                            onChange={handleSliderChange}
                            step="1"
                            min="1"
                            max={maxPerWallet?.data?.toNumber()}
                          />
                          <br></br>
                          <br></br>
                          <span className={styles.sliderValue}>
                            {mintQuantity} ᗷ✩𝓲tς𝐡{mintQuantity>1 && `є𝐒`},{" "}
                            {(
                              Number(
                                ethers.utils.formatEther(
                                  ethers.BigNumber.from(getMintPrice?.data || 0)
                                )
                              ) * mintQuantity
                            ).toFixed(2)}{" "}
                            ETH
                          </span>
                          <br></br>
                          <br></br>
                          <button
                            className={styles.mintButton}
                            onClick={() => {
                              allowlistMintBitches?.write?.();
                            }}
                          >
                            MINT
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <span className={styles.mintText}>
                          YOU HAVE MINTED<br></br>THE MAXIMUM ALLOWED AMOUNT!
                        </span>
                        <div className={styles.slidercontainer}>
                          <span className={styles.sliderValue}>
                            Buy an Ugly Bitch <br></br>on <a href={`${process.env.NEXT_PUBLIC_OPENSEA_URL}`} target="_blank" rel="noreferrer">OpenSea</a>
                          </span>
                        </div>
                      </>
                    )
                  ) : (
                    <>
                      <span className={styles.mintText}>
                        YOU ARE NOT ON THE <br></br> VIP LIST OR ALLOWLIST!
                      </span>
                      <div className={styles.slidercontainer}>
                        <span className={styles.sliderValue}>
                          Come Saturday 28, 10am PT<br></br>for the paid mint.
                        </span>
                      </div>
                    </>
                  )
                ) : (
                  numberMinted?.data?.toNumber() <= maxPerWallet?.data?.toNumber() + getOwnerFreeMintCount?.data + getOwnerGiftsCount?.data ? (
                    <>
                      <span className={styles.mintText}>MINT YOURS TODAY!</span>
                      <div className={styles.slidercontainer}>
                        <input
                          className={styles.slider}
                          type="range"
                          value={mintQuantity}
                          onChange={handleSliderChange}
                          step="1"
                          min="1"
                          max={maxPerWallet?.data?.toNumber()}
                        />
                        <br></br>
                        <br></br>
                        <span className={styles.sliderValue}>
                          {mintQuantity} ᗷ✩𝓲tς𝐡{mintQuantity>1 && `є𝐒`},{" "}
                          {(
                            Number(
                              ethers.utils.formatEther(
                                ethers.BigNumber.from(getMintPrice?.data || 0)
                              )
                            ) * mintQuantity
                          ).toFixed(2)}{" "}
                          ETH
                        </span>
                        <br></br>
                        <br></br>
                        <button
                          className={styles.mintButton}
                          onClick={() => {
                            mintBitches?.write?.();
                          }}
                        >
                          MINT
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className={styles.mintText}>
                        YOU HAVE MINTED<br></br>THE MAXIMUM ALLOWED AMOUNT!
                      </span>
                      <div className={styles.slidercontainer}>
                        <span className={styles.sliderValue}>
                          Buy an Ugly Bitch <br></br>on <a href={`${process.env.NEXT_PUBLIC_OPENSEA_URL}`} target="_blank" rel="noreferrer">OpenSea</a>
                        </span>
                      </div>
                    </>
                  )
                )
    
              )
            ) : (
              <>
                <span className={styles.mintText}>
                  THE COLLECTION <br></br>IS SOLD OUT!
                </span>
                <div className={styles.slidercontainer}>
                  <span className={styles.sliderValue}>
                    Buy an Ugly Bitch <br></br>on <a href={`${process.env.NEXT_PUBLIC_OPENSEA_URL}`} target="_blank" rel="noreferrer">OpenSea</a>
                  </span>
                </div>
              </>
            )
          ) : (
            getCollectionSize?.data?.toNumber() - (getReservedFreeMint?.data?.toNumber() - numFreeMint?.data?.toNumber()) - totalSupply?.data?.toNumber() > 0 ?
            (
              proofPaidMint?.data?.valid ?
              (
                <>
                  <span className={styles.mintText}>
                    MINTING IS CLOSED<br></br>
                    YOU ARE ON THE ALLOWLIST!
                  </span>
                  <div className={styles.slidercontainer}>
                    <span className={styles.sliderValue}>
                      Come Friday 27, 10am PT<br></br>for the allowlist mint.
                    </span>
                  </div>
                </>
              ):(
                <>
                  <span className={styles.mintText}>
                    MINTING IS CLOSED<br></br>
                    YOU ARE NOT ON THE ALLOWLIST!
                  </span>
                  <div className={styles.slidercontainer}>
                    <span className={styles.sliderValue}>
                      Come Saturday 28, 10am PT<br></br>for the paid mint.
                    </span>
                  </div>
                </>
              )
            ):(
              <>
                <span className={styles.mintText}>
                  THE COLLECTION <br></br>IS SOLD OUT!
                </span>
                <div className={styles.slidercontainer}>
                  <span className={styles.sliderValue}>
                    Buy an Ugly Bitch <br></br>on <a href={`${process.env.NEXT_PUBLIC_OPENSEA_URL}`} target="_blank" rel="noreferrer">OpenSea</a>
                  </span>
                </div>
              </>
            )
          )
        }
      </div>
    </div>
  );
}
