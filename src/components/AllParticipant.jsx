import React, {useState} from "react";
import { useParticipant } from "../context/participantList";
import CardWithLogo from "../components/Card";
import ParticipantStrip from "./ParticipantStrip";



const AllParticipants = ()=>{
    const {participantList} = useParticipant();
    const participantListState = useState (participantList);
    const [name, setName] = useState("");
    

    

    return (
        <div className="w-full h-full flex flex-col bg-white rounded-md content-center mx-auto">
            <h4 className="font-bold">
                People
            </h4>
            <input 
            value={name}
            setName={setName}
            placeholder=" Enter Name to filter"
            className="border-2 border-gray-300 rounded-md w-full h-10 px-4"
            />
    
        {participantList.map((participant)=><ParticipantStrip name={participant.name} imgSrc={participant.imgSrc} mic={participant.micMute} />)}
        </div>
    )
}

export default AllParticipants;