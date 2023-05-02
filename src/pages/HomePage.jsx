import React from "react";
import { useParticipant } from "../context/participantList";
import CardWithLogo from "../components/Card";
import AllCards from "../components/AllCards";



const HomePage =()=>{
    const {participantList} = useParticipant();

    console.log(participantList);


    return (
        <div className="flex-wrap">
            HomePage
            <CardWithLogo name={participantList[0].name} imgSrc={participantList[0].imgSrc} mic={participantList[0].micMute} />
            <AllCards ></AllCards>
        </div>
    )
}

export default HomePage;