import { useEffect } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { deleteFav, getFav } from '../actions/favActions'

import bookmarkWhite from '../assets/images/bookmark-white.svg'
import account from '../assets/images/account-plus.svg'
import delate from '../assets/images/trash-can-outline.svg'


export default function Navbar() {

  const dispatch = useDispatch()

  useEffect(() => {
    
    // consultar la api
    const loadFavs = () => dispatch (getFav())
    loadFavs()

  }, [])

  // obtener el state (el state solo se puede acceder a el con el useSelector)
  const favoritos = useSelector( (state) => state.favoritos.favoritos )

  // Para mandar mensajes a la UI en caso de error
  const error = useSelector( (state) => state.favoritos.error )
  const cargando = useSelector( (state) => state.favoritos.loading )

  // Eliminar favorito
  const borrar = (id) => {

    // preguntar si desea eliminar

    // pasarlo al action
    dispatch(deleteFav(id))

  }

  return (
    <>
      <nav className="navbar" >
        <div className="navbar__btns">
          <button className="navbar__btns__btn-l">FAVORITOS <img src={bookmarkWhite} alt="bookmark" /> </button>
          <button className="navbar__btns__btn-r">AGREGAR <img src={account} alt="account" /> </button>
          <div className="navbar__dropdown">
            <div className="navbar__dropdown__item-container" >
              {favoritos.length===0 ? <p>No hay favoritos</p> : (
                favoritos.map((item)=>(
                <div className="item-fav" key={item.id} >
                  <img className="item-fav__picture" src={item.image} alt={item.name} />
                  <p className="item-fav__name">{item.name}</p>
                  <img className="item-fav__delete" src={delate} alt="eliminar" onClick={()=> borrar(item.id)} />
                </div>
                ))
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
