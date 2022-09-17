import React, {useRef, useState, useCallback} from "react";
import Webcam from "react-webcam";
import Navbar from "../../pages/Landing/components/Navbar";
import {Button, Center} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {useData} from "../../utils/hooks/use-data";


const videoConstraints = {
    width: 720,
    height: 360,
    facingMode: "user"
};

export const TakePhoto = () => {

     /* State for Webcam function */
    const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
    const[photo,setPhoto] = useState<boolean |null >(true);

    const webcamRef = useRef<Webcam>(null);
    const [url, setUrl] = useState<string | null>(null);
    /*Initialize data hooks from providers*/
    const{save}= useData();
    /* Route Navigate initializer */
    const navigate = useNavigate();

    /* Post images to backend service */
    const SaveImage = ()=>{
        const sendToBack = async ()=>{
            try {
                await save('student_face',url)
            }catch (err){
                console.log(err)
            }
        }
        sendToBack();
    }

    {/*Webcam function*/}
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            {/*Set image url */}
             setUrl(imageSrc);
            {/*Set image webcam state */}
             setPhoto(false);
            {/*Send to Backend Server*/}
        SaveImage();
        }
    }, [webcamRef]);

    return (
        <>
            <Navbar/>

            {/*Title*/}
            <Center>
                <header>
                    Présence par reconnaissance faciale faciale
                </header>
            </Center>

            <Center>

             {/*webcam appareance*/}

            {isCaptureEnable || (
                    <Button onClick={() => setCaptureEnable(true)} colorScheme={"red"} w={"max-content"} h={"24"} rounded={"3xl"} display={"flex"} flexWrap={"wrap"}>Verifie ma présence</Button>
            )}

            {/*Webcam state function,if true return the webcam else disapear the cam*/}
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

            {/*After having some image,it can be previewed in ui from url.So more endpoint can be specified with some button*/}
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

             {/*All of webcam function*/}
        </>
    );
};
