import React from "react"
import { Link } from "gatsby"
import logofood from "../../images/symbol-avocado.png"

const HomeHeader = () => {
  return (
    <div className="divHomeHeader">
      <div className="divHomeHeaderTopContainer">
        <div className="divHomeHeaderTitle">
          não deixe
          <br />
          fechar
          <br />a conta.
        </div>
        <div className="divHomeHeaderButton">Cadastrar</div>
      </div>

      <div className="divHomeHeaderSubtitle">
        Como pedir de todos os lugares que você gosta e quer ajudar.
      </div>
      <div className="divHomeHeaderBottomContainer">
        <div className="divHomeHeaderPlace">
          <Link to="/SP" className="aPlace">
            São Paulo, SP
          </Link>
          <br />
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
