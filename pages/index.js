import Head from 'next/head';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { ethers } from "ethers";

import Layout, { siteTitle } from '../components/layout';
import Logo from '../components/logo';
import Dolls from '../components/dolls';
import Marquee from '../components/marquee';
// import Mint from '../components/archive_mint';
import Minting from '../components/minting';
// import MintCount from '../components/archive_mintCount';
import MintedLink from '../components/mintedLink';
import WalletConnect from '../components/walletconnect';
import ImageGallery from '../components/gallery';
// import Shoutout from '../components/archive_shoutout';
import Star from '../components/star';
import Image from 'next/image';

console.log("★.｡.:*☆:**:. ⓦ𝕖𝓑s𝕚𝓉𝐄 Ｂʸ 𝓶ⓐ𝐲ᗩ 𝐌𝕒𝓝 .:**:.☆*.:｡.★ ♡ www.mayaontheinter.net ♡ 萬美亞")

import UglyBitchesABI from '../contracts/UglyBitches.json';

const uglyBitchesContract = {
  address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
  abi: UglyBitchesABI,
}

export default function Home() {

  // Wallet hooks
  const { address } = useAccount();

  // State hooks
  const [mintQuantity, setMintQuantity] = useState(1);
  const [showMintedMarquee, setShowMintedMarquee] = useState(false);

  // SWR hooks
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const proofFreeMint = useSWR(`/api/allowlistProofFreeMint?address=${address ? address : '0x0000000000000000000000000000000000000000'}`, fetcher);
  const proofPaidMint = useSWR(`/api/allowlistProofPaidMint?address=${address ? address : '0x0000000000000000000000000000000000000000'}`, fetcher);

  // Read contract hooks
  const maxPerWallet = useContractRead({ ...uglyBitchesContract, functionName: 'maxPerWallet', });
  const maxPerTx = useContractRead({ ...uglyBitchesContract, functionName: 'maxPerTx', });
  const getCollectionSize = useContractRead({ ...uglyBitchesContract, functionName: 'getCollectionSize', });
  const getMintPrice = useContractRead({ ...uglyBitchesContract, functionName: 'getMintPrice', });
  const isMintActive = useContractRead({ ...uglyBitchesContract, functionName: 'isMintActive', });
  const isAllowlistMintActive = useContractRead({ ...uglyBitchesContract, functionName: 'isAllowlistMintActive', });
  const isFreeMintActive = useContractRead({ ...uglyBitchesContract, functionName: 'isFreeMintActive', });
  const getReservedFreeMint = useContractRead({ ...uglyBitchesContract, functionName: 'getReservedFreeMint', });
  const totalSupply = useContractRead({ ...uglyBitchesContract, functionName: 'totalSupply', watch: true, });
  const numFreeMint = useContractRead({ ...uglyBitchesContract, functionName: 'numFreeMint', watch: true, });
  const numberMinted = useContractRead({ ...uglyBitchesContract, functionName: 'numberMinted', args: [address || '0x0'], watch: true, });
  const getOwnerFreeMintCount = useContractRead({ ...uglyBitchesContract, functionName: 'getOwnerFreeMintCount', args: [address || '0x0'], watch: true, });
  const getOwnerGiftsCount = useContractRead({ ...uglyBitchesContract, functionName: 'getOwnerGiftsCount', args: [address || '0x0'], watch: true, });

  // Write contract hooks
  const configFreeMint = usePrepareContractWrite({
    ...uglyBitchesContract,
    functionName: 'freeMint',
    args: [proofFreeMint?.data?.proof],
  })
  const configAllowlistMintBitches = usePrepareContractWrite({
    ...uglyBitchesContract,
    functionName: 'allowlistMint',
    args: [ethers.BigNumber.from(mintQuantity || "1"), proofPaidMint?.data?.proof],
    overrides: {
      value: ethers.BigNumber.from(getMintPrice?.data || "0").mul(ethers.BigNumber.from(mintQuantity || "1")),
    }
  })
  const configMintBitches = usePrepareContractWrite({
    ...uglyBitchesContract,
    functionName: 'mint',
    args: [ethers.BigNumber.from(mintQuantity || "1")],
    overrides: {
      value: ethers.BigNumber.from(getMintPrice?.data || "0").mul(ethers.BigNumber.from(mintQuantity || "1")),
    }
  })
  const freeMint = useContractWrite(configFreeMint?.data)
  const allowlistMintBitches = useContractWrite(configAllowlistMintBitches?.data)
  const mintBitches = useContractWrite(configMintBitches?.data)
  const freeMintWait = useWaitForTransaction({ hash: freeMint.data?.hash })
  const allowlistMintBitchesWait = useWaitForTransaction({ hash: allowlistMintBitches.data?.hash })
  const mintBitchesWait = useWaitForTransaction({ hash: mintBitches.data?.hash })

  useEffect(() => {
    if (mintBitchesWait.isLoading || mintBitchesWait.data || freeMintWait.isLoading || freeMintWait.data || allowlistMintBitchesWait.isLoading || allowlistMintBitchesWait.data) {
      setShowMintedMarquee(true);
    }
  }, [mintBitchesWait.isLoading, mintBitchesWait.data, freeMintWait.isLoading, freeMintWait.data, allowlistMintBitchesWait.isLoading, allowlistMintBitchesWait.data]);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Marquee></Marquee>

      {showMintedMarquee && (
        <MintedLink
          freeMintWait={freeMintWait}
          allowlistMintBitchesWait={allowlistMintBitchesWait}
          mintBitchesWait={mintBitchesWait}
          showMintedMarquee={showMintedMarquee}
          setShowMintedMarquee={setShowMintedMarquee}
        ></MintedLink>
      )}

      <section className="splash">
        {true && <WalletConnect></WalletConnect>}
        <Dolls src="/images/littledarlingsavengers_vivid.png" alt="A group of ugly bitches dolls" />
        <Logo src="/images/uglybitcheslogo.png" alt="Ugly Bitches" />
        <Star xPos="25" yPos="30" size="50"></Star>
        <Star xPos="72" yPos="26" size="50" rotation="25"></Star>
        <Star xPos="70" yPos="46" size="50" rotation="5"></Star>
        <Star xPos="26" yPos="65" size="50" rotation="80"></Star>
        <Star xPos="38" yPos="13" size="50" rotation="10"></Star>
        <Star xPos="75" yPos="77" size="50" rotation="7"></Star>

        <Star xPos="28" yPos="40" size="25"></Star>
        <Star xPos="69" yPos="35" size="25"></Star>
        <Star xPos="30" yPos="55" size="25"></Star>
        <Star xPos="74" yPos="69" size="25"></Star>
        <Star xPos="28" yPos="81" size="25"></Star>

        <Star xPos="56" yPos="12" size="25"></Star>

      </section>
      {/* {true && (
        <Mint
          src="/images/glitterheart.png"
          alt="Pink glittery heart"
          mintQuantity={mintQuantity}
          setMintQuantity={setMintQuantity}
          maxPerWallet={maxPerWallet}
          maxPerTx={maxPerTx}
          getCollectionSize={getCollectionSize}
          getMintPrice={getMintPrice}
          isMintActive={isMintActive}
          isAllowlistMintActive={isAllowlistMintActive}
          isFreeMintActive={isFreeMintActive}
          getReservedFreeMint={getReservedFreeMint}
          totalSupply={totalSupply}
          numFreeMint={numFreeMint}
          numberMinted={numberMinted}
          getOwnerFreeMintCount={getOwnerFreeMintCount}
          getOwnerGiftsCount={getOwnerGiftsCount}
          freeMint={freeMint}
          proofFreeMint={proofFreeMint}
          proofPaidMint={proofPaidMint}
          allowlistMintBitches={allowlistMintBitches}
          mintBitches={mintBitches}
        />
      )} */}

      {/* {true && (
        <MintCount
          totalSupply={totalSupply}
          getCollectionSize={getCollectionSize}
        />
      )} */}

      <Minting
      ></Minting>


      <section>
        <div className="dollLaptop">
          <Image className="" src="/images/LittleDarlingsPhoneXL.png" alt="Pink glittery heart" width="500" height="500"
          ></Image>
        </div>
        <ImageGallery />
      </section>
      <section className="faq">
        {/* <Image src="/images/latentspace.gif" alt="Morphing GAN latent space dolls"
          height={500} width={500}
        ></Image> */}

        <div className="faqText">
          <div className="faqEntry">
            <h4>SUPPPPP</h4>
            <p>LITTLE DARLINGS… WIN! HUSTLE HARD WORK HARD PLAY HARD EAT HARD DO HARD BEEP HARD DOG HARD DON’T TRY HARD TRY HARD THEY ARE TRY HARD DO DO DO DOOOOOO!!!!!!!!!!!!
            </p>

            <p>WE ARE THE HARDEST HUSTLING NFTS THE WORLD HAS EVER SEEN. THE WORLD’S SMARTEST MOST IMPORTANT PEOPLE CREATED A SINGULARLY ADVANCED NEURAL NETWORK AND FROM THAT THE LITTLE DARLINGS WERE FORGED. AND THEN ONCE WE WERE MADE, ALL OF INSTAGRAM CAME OUT TO LEAVE US THE SICKEST COMMENTS EVER.
            </p>

            <p> NEVER FORGET:</p>

            <p>GREATNESS ONLY COMES BEFORE HUSTLE IN THE DICTIONARY.</p>
            <p>THOSE AT THE TOP OF THE MOUNTAIN DIDN’T FALL THERE.</p>
            <p>DON’T WATCH THE CLOCK; DO WHAT IT DOES. KEEP GOING.</p>
            <p> WE'RE EVERYONE! YOU ARE NO ONE!!!!!!</p>
          </div>

          <div className="faqEntry">
            <h4>SALE</h4>
            <p>Little Darlings will release on Friday, March 29th, at 10am PT / 1pm ET.
            </p>
            <p>Ugly Bitches holders: </p>

          </div>
          <div className="faqEntry">
            <h4>SQUAD</h4>
            <p>            <a href="https://annhirsch.mmm.page/home" target="_blank">Ann Hirsch</a> (Lead artist and Co-founder) is an artist and culture jammer who went viral on YouTube in 2008, infiltrated trashy VH1 reality television in 2010, and has had her work shown at The New Museum, MIT, Whitechapel Gallery, The Stedelijk Museum, the International Center of Photography, and more.
            </p>

            <p>            <a href="https://mayaontheinter.net/" target="_blank">Maya Man</a> (Lead artist and Co-founder) is an artist focused on contemporary identity culture on the internet. Her websites, generative series, and installations examine dominant narratives around femininity, authenticity, and the performance of self online. She is the creator of the browser extension <a href="https://glanceback.info/" target="_blank">Glance Back</a> and the Art Blocks curated collection <a href="https://fakeittillyoumakeit.lol/" target="_blank">FAKE IT TILL YOU MAKE IT</a>. She has exhibited internationally at bitforms, NYC; SOOT, Tokyo; Verse, London; Power Station of Art, Shanghai; Feral File, online; and more.
            </p>

            <p>            <a href="https://twitter.com/0x901112a" target="_blank">Golira</a> (Web3 Developer) is an architect, artist, writer and developer who has worked on numerous successful NFT projects including Allstarz, Bloomers, and Ugly Bitches.
            </p>
          </div>
          <div className="faqEntry">
            <h4>LINK AND BUILD</h4>
            Follow us <a href="https://twitter.com/myuglybitches" target="_blank">@myuglybitches</a> !!!!! 
            
            {/* View the collection on <a href={`${process.env.NEXT_PUBLIC_OPENSEA_URL}`} target="_blank">OpenSea</a> or <a href={`https://${process.env.NEXT_PUBLIC_VERCEL_ENV == 'production' ? '' : 'goerli.'}etherscan.io/address/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`} target="_blank">Etherscan</a>. */}
          </div>

        </div>
      </section>
    </Layout >
  );
}