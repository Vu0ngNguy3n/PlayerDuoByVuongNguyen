import React from "react"
import Header from "../../component/header"
import "./Stories.scss"
import SidebarStories from "../../component/sidebarStories"
import ContentStories from "../../component/contentStories"

function Stories(){
    return (
        <React.Fragment>
            <Header/>
            <div className="container">
                <SidebarStories/>
                <ContentStories/>
            </div>
        </React.Fragment>
    )
}
export default Stories