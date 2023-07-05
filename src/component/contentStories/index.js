import React, { useEffect, useState } from "react"
import './ContentStories.scss'
import data from '../../data.json'

function ContentStories(){

    const [stories, setStories] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [info, setInfo] = useState({})

    useEffect(()=>{
        setStories(data.players)
    },[])

    return(
        <React.Fragment>
            <div className="contentStories">
                {stories.map((story) => {
                    return (
                        <div className="cardStory">
                            <img src={story?.img} className="imgStory" onClick={() => {
                                setShowModal(true)
                                setInfo(story)
                                }}/>
                            <div className="imgStoryHover"></div>
                            <div className="storyTitle">
                                <img className="avatarStory" src={story?.img}/>
                                <label>{story?.name}</label>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="infoStory" style={{display: showModal ===true?'flex':'none'}}>
                <div className="inforContent">
                    <div className="close" onClick={() => setShowModal(false)}><i class="fa-solid fa-x"></i></div>
                    <div className="leftInfor">
                        <img src={info?.img} className="imgLeft"/>
                    </div>
                    <div className="rightInfor">
                        <div className="topRight">
                            <div className="navInfor">
                                <div className="user">
                                    <img src={info?.img}/>
                                    <label>{info?.name}</label>
                                </div>
                                <button className="rent">Thuê</button>
                            </div>
                            <div className="reaction">
                                <label><i class="fa-solid fa-eye"></i> 0</label>
                                <label><i class="fa-solid fa-comment"></i> 0</label>
                                <label><i class="fa-solid fa-heart"></i> 0</label>
                            </div>
                            <div className="describe">
                                <h5>Hãy ib nếu bạn thấy 1 bạn nữ nhaaaaaa</h5>
                            </div>
                        </div>
                        <div className="centerRight">

                        </div>
                        <div className="bottomRight">

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ContentStories