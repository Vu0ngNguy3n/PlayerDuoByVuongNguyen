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
                        </div>
                    </div>
                    <div className="middle">
                        <div className="home" alt="Trang chủ">
                            <i className="fa-solid fa-house"></i>
                        </div>
                        <div className="cinema">
                            <i className="fa-solid fa-film"></i>
                        </div>
                        <div className="board">
                            <i className="fa-solid fa-trophy"></i>
                        </div>
                    </div>
                    <div className="rightHeader">
                        <div className="web">
                            <i className="fa-solid fa-globe"></i>
                        </div>
                        <div className="facebook">
                            <i className="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className="loginBtn">
                            <span onClick={() => setShowModal(true)}>Đăng nhập</span>
                        </div>
                        <div className="mode">
                            <i className="fa-solid fa-moon"></i>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="login" style={{display: showModal ===true?'flex':'none'}}>
                    <div className="loginForm">
                        <div className="backHome">
                            <i className="fa-solid fa-arrow-left " onClick={() => setShowModal(false)}></i>
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
                            <button className="facebook"><i className="fa-brands fa-facebook"></i>Đăng nhập bằng Facebook</button>
                            <a className="signUp">Đăng ký tài khoản</a>
                        </div>
                    </div>
                </div>       
           </React.Fragment>
    )
}

export default Header