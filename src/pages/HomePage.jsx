import React from "react";
import { useParticipant } from "../context/participantList";
import CardWithLogo from "../components/Card";
import AllCards from "../components/AllCards";
import AllParticipants from "../components/AllParticipant";



const HomePage =()=>{
    const {participantList} = useParticipant();

    console.log(participantList);


    return (
        <div className="w-full h-full flex flex-row">
           
            {/* <CardWithLogo name={participantList[0].name} imgSrc={participantList[0].imgSrc} mic={participantList[0].micMute} /> */}
            <div className="w-2/3 ">
            <AllCards ></AllCards>
            </div>
            <div className="w-1/3 ">
            <AllParticipants />
            </div>

        </div>
    )
}

export default HomePage;