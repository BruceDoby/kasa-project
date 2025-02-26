import kasaLogo from '../assets/LOGO.png'

function Footer() {
    return (
        <footer>
            <img src={kasaLogo} alt="logo du site" />
            <p className="kasa__Rights">©2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer