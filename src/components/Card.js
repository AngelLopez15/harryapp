import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import noFav from '../assets/images/bookmark-outline.svg'
import Fav from '../assets/images/bookmark.svg'

// Actions de redux
import { addFav } from '../actions/favActions'


export default function Card(props) {

  const {name, alive, dateOfBirth, gender, eyeColour, hairColour, image, hogwartsStudent, hogwartsStaff, house} = props

  // state del componente
  const [fav, setFav] = useState({name: '', image: ''})
  const [select, setSelect] = useState(false)

  // utilizando el useDistpach
  const dispatch = useDispatch()

  // Acceder al state del store para mostrar mensajes en la Interfaz y decirle al Usuario el estatus de su peticion
  const loading = useSelector( (state) => state.favoritos.loading)
  const err = useSelector( (state) => state.favoritos.error)

  // manda llamar el action de favoritos
  const addFavorite = (characterFav) => dispatch( addFav(characterFav) )
  
  // agregue a favoritos
  const submitFav = (e) => {

    e.preventDefault()
    
    // agregando a favorito
    addFavorite(fav)
    setSelect(true)
  }

  return (
    <form onSubmit={ submitFav }>
      <article className="card">
        <div className={`card__left-${house || 'default'}`} >
          <img className={`card__left-${house || 'default' }__imagen`} src={image} alt={name} />
        </div>
        <div className="card__rigth">
          <p className="character__name-mobile">{name}</p>
          <div className="card__rigth__header">
            <p className="card__rigth__status"> 
              { alive ? <span>VIVO / </span> : <span>FINADO / </span> } 
              {hogwartsStudent ? <span>ESTUDIANTE</span> : null } 
              {hogwartsStaff ?<span>STAFF</span> : null}
            </p>
            {
              select
              ?
                <button className="card__rigth__header__btn-fav" >
                  <img className="card__rigth__imagen" src={Fav} alt="icono de bookmark" />
                </button>
              :
                <button type="submit" className="card__rigth__header__btn-fav" >
                  <img className="card__rigth__imagen" src={noFav} alt="icono de bookmark" onClick={()=>setFav({name: name, image: image})} />
                </button>
            }
          </div>
          <div className="card__rigth__data-character">
            <p className="card__rigth__data-character__name">{name}</p>
            <p className="card__rigth__data-character__date"><span className="data-name">Cumpleaños: </span>{dateOfBirth}</p>
            <p className="card__rigth__data-character__gender"><span className="data-name">Género: </span>{gender}</p>
            <p className="card__rigth__data-character__color-eye"><span className="data-name">Color de ojos: </span>{eyeColour}</p>
            <p className="card__rigth__data-character__color-hair"><span className="data-name">Color de pelos: </span>{hairColour}</p>
          </div>
        </div>
      </article>
    </form>
  )
}
