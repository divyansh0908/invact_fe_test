import React from "react";
import { useParticipant } from "../context/participantList";
import CardWithLogo from "../components/Card";


const AllCards = ()=>{
    const {participantList} = useParticipant();

    return (
        <div className="w-full flex flex-wrap">
        {participantList.map((participant)=><CardWithLogo name={participant.name} imgSrc={participant.imgSrc} mic={participant.micMute} />)}
        </div>
    )
}

export default AllCards;