import noFav from '../assets/images/bookmark-outline.svg'

export default function Card() {
  return (
    <article className="card">
      <div className="card__left-gryffindor">
        <img className="card__left-gryffindor__imagen" src="http://hp-api.herokuapp.com/images/harry.jpg" alt="El harry" />
      </div>
      <div className="card__rigth">
        <div className="card__rigth_header">
          <p className="card__rigth__status">Vivo / Estudiante</p>
          <img className="card__rigth__imagen" src={noFav} alt="icono de bookmark" />
        </div>
        <div className="card__rigth__data-character">
          <p className="card__rigth__data-character__name">Harry Poter</p>
          <p className="card__rigth__data-character__date"><span className="data-name">Cumpleaños: </span>31-07-1980</p>
          <p className="card__rigth__data-character__gender"><span className="data-name">Género: </span>Male</p>
          <p className="card__rigth__data-character__color-eye"><span className="data-name">Color de ojos: </span>Green</p>
          <p className="card__rigth__data-character__color-hair"><span className="data-name">Color de pelos: </span>Black</p>
        </div>
      </div>
    </article>
  )
}
