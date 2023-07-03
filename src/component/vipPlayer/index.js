import './VipPlayer.scss'
import data from "../../data.json"
import { useEffect, useState } from 'react'

function VipPlayer(){

    const [players, setPlayers] = useState([])

    useEffect(()=>{
        setPlayers(data.players)
    },[])
    return(
        <>
            <h2>Vip Player</h2>
            <div className='vipPlayer'>   
                {players.map((player) =>{
                    return (
                        <div className='cardPlayer'>
                            <img className='playerImg' src={player.img} />
                            <div className='cardContent'>
                            <div className='playerName'>
                                <h5>{player.name}</h5>
                                <div className='onlinePlayer'></div>
                            </div>
                                <p>{player.description}</p>
                                <div className='donate'>
                                    {player.donater.map((donate) => {
                                        return (
                                            <img src={donate} />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
                 {players.map((player) =>{
                    return (
                        <div className='cardPlayer'>
                            <img className='playerImg' src={player.img} />
                            <div className='cardContent'>
                            <div className='playerName'>
                                <h5>{player.name}</h5>
                                <div className='onlinePlayer'></div>
                            </div>
                                <p>{player.description}</p>
                                <div className='donate'>
                                    {player.donater.map((donate) => {
                                        return (
                                            <img src={donate} />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default VipPlayer