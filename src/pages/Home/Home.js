import React from "react"
import ContentHome from "../../component/contentHome"
import Header from "../../component/header"
import Sidebar from "../../component/sidebar"
import "./Home.scss"


function Home(){
    return (
    <React.Fragment>
        <Header/>
        <div className="container">
            <Sidebar/>
            <ContentHome/>
        </div>
    </React.Fragment>)
}

export default Home