import styles from './gallery.module.css';
import Image from 'next/image';

const imagePathString = "/images/darlings/little-"

function ImageGallery() {
    const numImages = 20;
    const uglyBitchImages = [];
    for (let i = 0; i < numImages; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        let currentImagePath = imagePathString + i + ".png";
        uglyBitchImages.push(<Image
            src={currentImagePath}
            alt={"Ugly bitch example output"}
            width={900}
            height={900}
            style={{ objectFit: 'cover' }}
            key={currentImagePath}
            className={styles.galleryImage}
        />);
    }

    return (
        <div className={styles.galleryWrapper}>
            {/* <Image
                src={"/images/uglieststar.png"}
                alt="Star that says The Ugliest Bitches on the Internet"
                width={400}
                height={400}
                sizes="100vw"
                className={styles.ugliestStar}
            /> */}
            {uglyBitchImages}
        </div>
    );
}

export default ImageGallery;