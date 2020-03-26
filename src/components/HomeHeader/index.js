import React from "react"
import { Link } from "gatsby"
import logofood from "../../images/symbol-avocado.png"

const HomeHeader = () => {
      
    return (
        <div className="divHomeHeader">
            <div className="divHomeHeaderTopContainer">
                <div className="divHomeHeaderTitle">
                    não deixe<br/>fechar<br/>a conta.
                </div>
                <div className="divHomeHeaderButton">
                    Cadastrar
                </div>
            </div>
 
            <div className="divHomeHeaderSubtitle">
                Todas as formas de pedir dos seus lugares favoritos.
            </div>
            <div className="divHomeHeaderBottomContainer">
                <div className="divHomeHeaderPlace">
                    <Link to="/SP" className="aPlace">São Paulo, SP</Link><br/>
                    <div className="divHomeHeaderPlaceSubtitle">
                        172 lugares que não vamos deixar fechar
                    </div>
                </div>
                <div className="divHomeHeaderImg">
                    <img className="imgHeader" src={logofood} alt="Logo iFood" />
                </div>
            </div>
        </div>
    )
  
  }
  
  export default HomeHeader