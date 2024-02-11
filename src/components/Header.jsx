/* eslint-disable react/no-unescaped-entities */
import lamball from "../assets/Lamball.png"
import chikipi from "../assets/chikipi.png"
import logo from "../assets/logoPalHub.png"
import "../css/Header.css"

function Header () {
    return (
    <header>
        <img src={lamball} alt="lamball" className="palsHeader" id="lamballPosition"/>
        <div id="logoContainer">
            <img src={logo} alt="logo" />
            <p>Découvrez tout les secrets d'une <span className="orange">insémination réussie ! </span></p>
        </div>
        <img src={chikipi} alt="chikipi" className="palsHeader" id="chikipiPosition"/>
    </header>
    )
}

export default Header