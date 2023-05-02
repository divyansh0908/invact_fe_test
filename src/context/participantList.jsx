import React, {useState, useContext, createContext, Children} from "react";



const partticipantContext = createContext();
function ParticipantListProvider({children}) {
    const [participantList, setParticipantList] = useState([
        {
            name: "Divyansh",
            imgSrc : "https://avatars.githubusercontent.com/u/56147966?v=4",
            micMute : true
        },
        {
            name: "Hardik",
            imgSrc : "https://avatars.githubusercontent.com/u/56147966?v=4",
            micMute : true
        },
        {
            name: "Golu",
            imgSrc : "https://avatars.githubusercontent.com/u/56147966?v=4",
            micMute : true
        }
    ]);

    // ...
    return (
        <partticipantContext.Provider value={{participantList, setParticipantList}}>
            {children}
        </partticipantContext.Provider>
    );

  }

export const useParticipant = () => {
   return useContext(partticipantContext);
}

export default ParticipantListProvider;