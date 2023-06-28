import React, { useState } from "react"
import "./Header.scss"

function Header(){

    const [showModal, setShowModal] = useState(false)

    return (
           <React.Fragment>
            <div className="header">
                <div className="inner">
                    <div className="leftHeader">
                        <img alt="logo playerduo" src="https://files.playerduo.net/production/static-files/logo.png" className="logo"></img>
                        <div className="search">    
                            <input 
                                className="searchInput"
                                placeholder="Nickname/Url..."
                            />
                            {/* <div className="searchBtn"><i class="fa-solid fa-magnifying-glass"></i></div> */}
                        </div>
                    </div>
                    <div className="middle">
                        <div className="home" alt="Trang chủ">
                            <i class="fa-solid fa-house"></i>
                        </div>
                        <div className="cinema">
                            <i class="fa-solid fa-film"></i>
                        </div>
                        <div className="board">
                            <i class="fa-solid fa-trophy"></i>
                        </div>
                    </div>
                    <div className="rightHeader">
                        <div className="web">
                            <i class="fa-solid fa-globe"></i>
                        </div>
                        <div className="facebook">
                            <i class="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className="loginBtn">
                            <span onClick={() => setShowModal(true)}>Đăng nhập</span>
                        </div>
                        <div className="mode">
                            <i class="fa-solid fa-moon"></i>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="login" style={{display: showModal ===true?'flex':'none'}}>
                    <div className="loginForm">
                        <div className="backHome">
                            <i class="fa-solid fa-arrow-left " onClick={() => setShowModal(false)}></i>
                        </div>
                        <div className="logo">
                            <img alt="logo playerduo" src="https://files.playerduo.net/production/static-files/logo.png"></img>
                            <h1 className="titleLogin">PlayerDuo</h1>
                        </div>
                        <div className="contentMain">
                            <div className="contentForm">
                                <input 
                                placeholder="Tên đăng nhập hoặc email"
                                />
                                <input
                                    placeholder="Mật khẩu"
                                    type={"password"}
                                />
                                <p className="forgotPass">Quên mật khẩu?</p>
                                <button className="handleLogin"><span>Đăng nhập</span></button>
                            </div>
                            <button className="facebook"><i class="fa-brands fa-facebook"></i>Đăng nhập bằng Facebook</button>
                            <a className="signUp">Đăng ký tài khoản</a>
                        </div>
                    </div>
                </div>       
           </React.Fragment>
    )
}

export default Header