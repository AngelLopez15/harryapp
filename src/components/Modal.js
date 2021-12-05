import close from '../assets/images/close-circle-outline.svg'

export default function Modal() {
  return (
    <div className="modal-container display">
      <div className="modal">
        <div className="modal__header">
          <p className="modal__header__title">Agregar personaje</p>
          <img src={close} alt="cerrar" />
        </div>
        <form className="form">
          <div className="form__input-1">
            <div className="input-name" >
              <label className="text-input" htmlFor="name">NOMBRE</label>
              <input className="input-box" type="text" name="name" />
            </div>
            <div className="input-date">
              <label className="text-input" htmlFor="date">CUMPLEAÑOS</label>
              <input className="input-box" type="text" name="date" />
            </div>
          </div>
          <div className="form__input-2">
            <div className="input-eye">
              <label className="text-input" htmlFor="eye">COLOR DE OJOS</label>
              <input className="input-box" type="text" name="eye" />
            </div>
            <div className="input-hair">
              <label className="text-input" htmlFor="hair">COLOR DE PELO</label>
              <input className="input-box" type="text" name="hair" />
            </div>
          </div>
          <div className="form__input-3">
            <div className="gender-container">
              <p>GÉNERO</p>
              <div className="gender-radio">
                <div>
                  <input type="radio" id="mujer" name="gender" value="mujer" defaultChecked />
                  <label htmlFor="mujer">Mujer</label>
                </div>
                <div>
                  <input type="radio" id="hombre" name="gender" value="hombre" />
                  <label htmlFor="hombre">Hombre</label>
                </div>
              </div>
            </div>
            <div className="position-container">
              <p>POSICIÓN</p>
              <div className="gender-position">
                <div>
                  <input type="radio" id="estudiante" name="position" value="estudiante" defaultChecked />
                  <label htmlFor="estudiante">Estudiante</label>
                </div>
                <div>
                  <input type="radio" id="staff" name="position" value="staff" />
                  <label htmlFor="staff">Staff</label>
                </div>
              </div>
            </div>
          </div>
          <div className="input-foto">
            <p className="foto-text">FOTOGRAFIA</p>
            <input type="file" name="foto" />
          </div>
          <div className="btn-save-container">
            <input
              className="btn-save"
              type="submit"
              value="GUARDAR"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
