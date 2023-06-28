import { useState } from "react"
import SwiperHome from "../swiperHome"
import VipPlayer from "../vipPlayer"
import './ContentHome.scss'

function ContentHome(){

    const [ready, setReady] = useState(false)
    const [online, setOnline] = useState(false)

    return(
        <div className="home">
            <SwiperHome/>
            <div className="topSteamer">
                <div className="card">
                    <img className="avatar" src="https://photo-zmp3.zmdcdn.me/avatars/1/4/8/d/148ddab9ed3756234771530579c73f5f.jpg" />
                     <div className="eye">
                        <i class="fa-solid fa-eye"></i>30
                    </div>
                    <div className="titleCard">
                        <img className="imgTitle" src="https://photo-zmp3.zmdcdn.me/avatars/1/4/8/d/148ddab9ed3756234771530579c73f5f.jpg" />
                        <label>Mina Young</label>
                    </div>
                </div>
                <div className="card">
                    <img className="avatar" src="https://photo-zmp3.zmdcdn.me/avatars/1/4/8/d/148ddab9ed3756234771530579c73f5f.jpg" />
                     <div className="eye">
                        <i class="fa-solid fa-eye"></i>30
                    </div>
                    <div className="titleCard">
                        <img className="imgTitle" src="https://photo-zmp3.zmdcdn.me/avatars/1/4/8/d/148ddab9ed3756234771530579c73f5f.jpg" />
                        <label>Mina Young</label>
                    </div>
                </div>
                <div className="card">
                    <img className="avatar" src="https://photo-zmp3.zmdcdn.me/avatars/1/4/8/d/148ddab9ed3756234771530579c73f5f.jpg" />
                    <div className="eye">
                        <i class="fa-solid fa-eye"></i>30
                    </div>
                    <div className="titleCard">
                        <img className="imgTitle" src="https://photo-zmp3.zmdcdn.me/avatars/1/4/8/d/148ddab9ed3756234771530579c73f5f.jpg" />
                        <label>Mina Young</label>
                    </div>
                </div>
                <div className="card">
                    <img className="avatar" src="https://photo-zmp3.zmdcdn.me/avatars/1/4/8/d/148ddab9ed3756234771530579c73f5f.jpg" />
                     <div className="eye">
                        <i class="fa-solid fa-eye"></i>30
                    </div>
                    <div className="titleCard">
                        <img className="imgTitle" src="https://photo-zmp3.zmdcdn.me/avatars/1/4/8/d/148ddab9ed3756234771530579c73f5f.jpg" />
                        <label>Mina Young</label>
                    </div>
                </div>
                <div className="card">
                    <img className="avatar" src="https://photo-zmp3.zmdcdn.me/avatars/1/4/8/d/148ddab9ed3756234771530579c73f5f.jpg" />
                     <div className="eye">
                        <i class="fa-solid fa-eye"></i>30
                    </div>
                    <div className="titleCard">
                        <img className="imgTitle" src="https://photo-zmp3.zmdcdn.me/avatars/1/4/8/d/148ddab9ed3756234771530579c73f5f.jpg" />
                        <label>Mina Young</label>
                    </div>
                </div>
                
            </div>
            <div className="filter">
                <div className="handle">
                    <select className="gender">
                        <option>Giới tính</option>
                        <option>Nam</option>
                        <option>Nữ</option>
                    </select>
                    <select className="type">
                        <option>Thể loại</option>
                        <option>Người mới</option>
                        <option>Hot</option>
                        <option>Vip</option>
                    </select>
                    <div 
                        className="ready"
                        onClick={ready === false?() => setReady(true):() => setReady(false)}
                        style={{transition: ".4s", backgroundColor: ready=== false?"transparent":"#f0564a", color: ready===false?"#6c6c6c":"white"}}
                    >
                        Sẵn sàng
                    </div>
                    <div 
                        className="online"
                        onClick={online === false?() => setOnline(true):() => setOnline(false)}
                        style={{transition: ".4s", backgroundColor: online=== false?"transparent":"#f0564a", color: online===false?"#6c6c6c":"white"}}
                    >
                        Online
                    </div>
                    <button className="price">Khoảng giá</button>
                    <input placeholder="Sống tại"/>
                    <input placeholder="Tên/Url Player"/>
                    <input placeholder="Tên game"/>
                </div>
               <div>
                 <button className="search"><i class="fa-solid fa-magnifying-glass"></i>Tìm kiếm</button>
               </div>

            </div>
            <VipPlayer/>
        </div>
    )
}
export default ContentHome