import React from "react";
import { useParticipant } from "../context/participantList";



const CardWithLogo = ({name, imgSrc, mic}) =>{
    const {participantList,setParticipantList} = useParticipant();
    const onClick =name =>{
        // 

    }

    return(
        <div className="bg-gray-300 w-[350px] h-[200px] min-h-[200px] rounded-md ">
            <div className="flex flex-col justify-center h-full">
                <div className="flex flex-row-reverse px-[10px]">
                    {mic ? "On": "Off"}
                </div>

                <div className="mx-auto justify-self-center w-[60px] h-[60px]">
                    <img src={imgSrc} alt="user Image" className="rounded-full"/>
                </div>
                <div className="flex flex-row font-semibold px-[10px]">
                    {name}
                </div>

            </div>
        </div>
    )


}

export default CardWithLogo;