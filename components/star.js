import { ROUTES_MANIFEST } from 'next/dist/shared/lib/constants';
import Image from 'next/image';

export default function star({ size, xPos, yPos, rotation }) {
    return (
        <div className="star" style={{ position: "absolute", left: xPos + "vw", top: yPos + "vh", transform: "rotate(" + rotation + "deg)" }} >
            <Image
                src="/images/whitestar.svg"
                alt="White glowing star"
                width={size}
                height={size}
                sizes="100vw"
            />
        </div >
    );
}