import React from "react"
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
                    <img className="imgFooter" src={logoinsta} alt="Instagram logo" />
                </div>
            </div>
        </div>
    )
  
  }
  
  export default Footer