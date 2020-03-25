import React from "react"

//import styles from "../../assets/styles/components/homeheader.modules.scss"
import styles from "../../assets/styles/main.scss"
import logoinsta from "../../images/instagram_footer.png"

const Footer = () => {
      
    return (
        <div className="divHomeHeader">
            <div className="footerLine"></div>
            <div className="divHomeHeaderTopContainer">
                <div className="divHomeFooterTitle">
                     #nãodeixefecharaconta   
                </div>
                <div className="divHomeFooterImg">
                    <img className="imgFooter" src={logoinsta}/>
                </div>
            </div>
        </div>
    )
  
  }
  
  export default Footer