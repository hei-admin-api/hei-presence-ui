import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";


const videoConstraints = {
    width: 720,
    height: 360,
    facingMode: "user"
};

export const TakePhoto = () => {
    const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
    const webcamRef = useRef<Webcam>(null);
    const [url, setUrl] = useState<string | null>(null);
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setUrl(imageSrc);
        }
    }, [webcamRef]);

    return (
        <>
            <header>
                <h1>Présence faciale</h1>
            </header>
            {isCaptureEnable || (
                <button onClick={() => setCaptureEnable(true)}>Cadrez votre caméra pour que votre visage soit clair</button>
            )}
            {isCaptureEnable && (
                <>
                    <div>
                        <button onClick={() => setCaptureEnable(false)}></button>
                    </div>
                    <div>
                        <Webcam
                            audio={false}
                            width={540}
                            height={360}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                        />
                    </div>
                    <button onClick={capture}>Prendre une photo</button>
                </>
            )}
            {url && (
                <>
                    <div>
                        <button
                            onClick={() => {
                                setUrl(null);
                            }}
                        >
                            annuler et reprendre
                        </button>
                    </div>
                    <div>
                        <img src={url} alt="Screenshot" />
                    </div>
                </>
            )}
        </>
    );
};
