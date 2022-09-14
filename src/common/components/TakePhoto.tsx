import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import Navbar from "../../pages/Landing/components/Navbar";
import {Button, Center} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";


const videoConstraints = {
    width: 720,
    height: 360,
    facingMode: "user"
};

export const TakePhoto = () => {
    const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
    const[photo,setPhoto] = useState<boolean |null >(true);
    const webcamRef = useRef<Webcam>(null);
    const [url, setUrl] = useState<string | null>(null);
    const navigate = useNavigate();
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
             setUrl(imageSrc);
             setPhoto(false)
        }
    }, [webcamRef]);

    return (
        <>
            <Navbar/>
            <Center>
                <header>
                    <h1>Présence par reconnaissance faciale faciale</h1>
                </header>
            </Center>

            <Center>

            {isCaptureEnable || (

                    <Button onClick={() => setCaptureEnable(true)} colorScheme={"red"} w={"max-content"} h={"24"} rounded={"3xl"} display={"flex"} flexWrap={"wrap"}>Verifie ma présence</Button>

            )}
            {isCaptureEnable && (
                <>

                    <div>
                        {
                            photo === true ?
                                (
                                    <Webcam
                                        audio={false}
                                        width={540}
                                        height={360}
                                        ref={webcamRef}
                                        screenshotFormat="image/jpeg"
                                        videoConstraints={videoConstraints}
                                    />
                                ):null

                        }

                    </div>
                    {
                        photo === true ?  (<div>
                            <button onClick={capture}>Capturer votre profil</button>

                        </div> ) : null
                    }

                </>
            )}
            </Center>
            {url && (
                <>
                    <Center>
                        <div>
                            <div>
                                <img src={url} alt="Screenshot" />
                            </div>
                            <Button
                                onClick={() => {
                                    setUrl(null);
                                    setPhoto(true)
                                }}
                            >
                                Reprendre votre photo
                            </Button>
                            <Button
                                onClick={() => {
                                    setUrl(null);
                                    setPhoto(true)
                                }}
                            >
                                Etudiant(e) suivant(e)
                            </Button>
                            <Button onClick={()=>navigate('/landing')}>Terminer</Button>
                        </div>

                    </Center>


                </>
            )}
        </>
    );
};
