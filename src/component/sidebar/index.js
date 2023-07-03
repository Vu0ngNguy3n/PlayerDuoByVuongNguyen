import React, { useEffect, useState } from "react"
import "./Sidebar.scss"
import data from "../../data.json"

function Sidebar(){

    const [games, setGames] = useState([])

    useEffect(()=>{
        setGames(data.games)
    },[])

    return (
        <React.Fragment>
            <div className="sidebar">
                <h4 className="sidebarTitle">Danh mục game</h4>
                <div className="listGame">
                    {games.map((game) => {
                        return (
                        <div className="game" key={game.id}>
                            <img src={game.img}/>
                            <label>{game.name}</label>
                        </div>

                        )
                    })}
                </div>
            </div>  
        </React.Fragment>
    )
}

export default Sidebar