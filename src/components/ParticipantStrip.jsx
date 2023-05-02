import React from "react";
import { useParticipant } from "../context/participantList";



const ParticipantStrip = ({name, imgSrc, mic}) =>{
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
        <div className=" w-full p-4 rounded-md mx-auto" onClick={()=>turnMicOff()}>
            <div className="flex flex-row py-4 ">
            <div className="my-auto mx-4">
                    <img src={imgSrc} alt="user Image" className="w-[30px] h-[30px] rounded-full"/>
                </div>
                <div className="flex flex-row font-semibold px-[10px] my-auto">
                    {name}
                </div>

                <div className="flex flex-row-reverse my-auto px-[10px]">
                    {mic ? "On": "Off"}
                </div>

                
               
            </div>
        </div>
    )


}

export default ParticipantStrip;