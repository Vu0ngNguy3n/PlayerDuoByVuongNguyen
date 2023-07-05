import React, { useEffect, useState } from "react"
import "./SidebarStories.scss"
import data from '../../data.json'

function SidebarStories(){
    const [players, setPlayers] = useState([])

    useEffect(()=>{
        setPlayers(data.players)
    },[])
    return (
        <React.Fragment>
            <div className="sidebar">
                <h4 className="sidebarStoriesTitle">Thịnh hành</h4>
                <div className="listPlayers">
                    {players.map((player, index) => {
                        return(
                            <div className="player" key={index}>
                                <img src={player.img} className="imgPlayer"/>
                                <label>{player.name}</label>
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default SidebarStories