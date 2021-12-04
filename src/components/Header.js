import logoHarry from '../assets/images/harry-potter-logo.png'

export default function Header() {
  return (
    <header className="header">
      <img src={logoHarry} alt="logo harry poter" className="header__logo" />
      <p className="header__text">Selecciona tu filtro</p>
    </header>
  )
}