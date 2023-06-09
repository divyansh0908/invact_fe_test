import React from "react";
import { useParticipant } from "../context/participantList";



const CardWithLogo = ({name, imgSrc, mic}) =>{
    const {participantList,setParticipantList} = useParticipant();
    const turnMicOff =() =>{
        // 
        console.log("turning off mic of ", name);
        // updateddParticipant 
        const updatedParticipant = participantList.map(participant=>{
            if(participant.name === name){
                return {...participant, micMute: !participant.micMute}
            }
            return participant;
        }
        )
        console.log(updatedParticipant);
        setParticipantList(participantList.map(participant=>{
            if(participant.name === name){
                return {...participant, micMute: !participant.micMute}
            }
            return participant;
        }
        ))
       

    }

    return(
        <div className="bg-gray-300 min-w-[350px] h-[200px] min-h-[200px] rounded-md mx-4" onClick={()=>turnMicOff()}>
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