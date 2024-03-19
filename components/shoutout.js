import styles from './shoutout.module.css';


export default function shoutout({ width, height, text, xPos, yPos, textSize, color, strokeColor, fontFamily, rotation, addClass }) {
    return (
        <div className={[styles.text, addClass].join(" ")} style={{ position: "absolute", width: width, height: height, left: xPos + "%", top: yPos + "%", fontSize: textSize + "vw", color: color, fontFamily: fontFamily, transform: "rotate(" + rotation + "deg) translate(-50%, 0)" }} >
            {text}
        </div >
    );
}