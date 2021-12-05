import noFav from '../assets/images/bookmark-outline.svg'

export default function Card(props) {

  const {name, alive, dateOfBirth, gender, eyeColour, hairColour, image, hogwartsStudent, hogwartsStaff, house} = props

  return (
    <article className="card">
      <div className={`card__left-${house || 'default'}`} >
        <img className={`card__left-${house || 'default' }__imagen`} src={image} alt={name} />
      </div>
      <div className="card__rigth">
        <div className="card__rigth_header">
          <p className="card__rigth__status"> 
            { alive ? <span>VIVO / </span> : <span>FINADO / </span> } 
            {hogwartsStudent ? <span>ESTUDIANTE</span> : null } 
            {hogwartsStaff ?<span>STAFF</span> : null}
          </p>
          <img className="card__rigth__imagen" src={noFav} alt="icono de bookmark" />
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
  )
}
