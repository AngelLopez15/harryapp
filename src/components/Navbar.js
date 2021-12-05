import bookmarkWhite from '../assets/images/bookmark-white.svg'
import account from '../assets/images/account-plus.svg'

export default function Navbar() {
  return (
    <nav className="navbar" >
      <div className="navbar__btns">
        <button className="navbar__btns__btn-l">FAVORITOS <img src={bookmarkWhite} alt="bookmark" /> </button>
        <button className="navbar__btns__btn-r">AGREGAR <img src={account} alt="account" /> </button>
      </div>
    </nav>
  )
}
