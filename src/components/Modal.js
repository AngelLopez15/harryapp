import axios from 'axios';
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import close from '../assets/images/close-circle-outline.svg'

export default function Modal( props ) {

  const { modal, setModal } = props

  const [addNewCharacter, setAddNewCharacter] = useState({
    id: '',
    name: '',
    dateOfBirth: '',
    eyeColour: '',
    hairColour: '',
    gender: '',
    image: '',
    position: '',
  })

  // Creando un State para mostar los errores al usuario
  const [error, actualizarError] = useState(false)

  const updateState = (e) => {

    setAddNewCharacter({
      ...addNewCharacter,
      [e.target.name]:e.target.value
    })

  }

  const saveNewCharacter = (e) => {
    e.preventDefault()

    // validar
    if (addNewCharacter.name.trim() ==='' || addNewCharacter.dateOfBirth.trim() === '' || addNewCharacter.eyeColour.trim() === '' || addNewCharacter.hairColour.trim() === '' || addNewCharacter.gender.trim()=== '' || addNewCharacter.position.trim() === '') {
      actualizarError(true)
      return
    }
    // Eliminar el mensaje de error
    actualizarError(false)

    // asignar un id
    addNewCharacter.id= uuidv4()

    console.log(addNewCharacter)

    // Enviar la informacion a la API
    let data = JSON.stringify(addNewCharacter);

    if (addNewCharacter.position==='hogwartsStudent') {

      let config = {
        method: 'post',
        url: 'http://localhost:5000/hp-students',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      }
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })

    } else {
      
      let config = {
        method: 'post',
        url: 'http://localhost:5000/hp-staff',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });  

    }

    // se limpian los campos del formulario
    // setAddNewCharacter({
    //   name: '',
    //   dateOfBirth: '',
    //   eyeColour: '',
    //   hairColour: '',
    //   gender: '',
    //   position: '',
    // })

    // console.log(addNewCharacter)

  }

  return (
    <div className={modal ? "modal-container show" : "modal-container display"} >
      <div className="modal">
        <div className="modal__header">
          <p className="modal__header__title">Agregar personaje</p>
          <img className="btn-close" src={close} alt="cerrar" onClick={()=> setModal(!modal) } />
        </div>
        { error ? <p className="text-error">Llene todos los campos</p> : null }
        <form className="form"  onSubmit={saveNewCharacter} >
          <div className="form__input-1">
            <div className="input-name" >
              <label className="text-input" htmlFor="name">NOMBRE</label>
              <input className="input-box" type="text" name="name" onChange={ updateState } />
            </div>
            <div className="input-date">
              <label className="text-input" htmlFor="dateOfBirth">CUMPLEAÑOS</label>
              <input className="input-box" type="text" name="dateOfBirth" onChange={ updateState } />
            </div>
          </div>
          <div className="form__input-2">
            <div className="input-eye">
              <label className="text-input" htmlFor="eyeColour">COLOR DE OJOS</label>
              <input className="input-box" type="text" name="eyeColour" onChange={ updateState } />
            </div>
            <div className="input-hair">
              <label className="text-input" htmlFor="hairColour">COLOR DE PELO</label>
              <input className="input-box" type="text" name="hairColour" onChange={ updateState } />
            </div>
          </div>
          <div className="form__input-3">
            <div className="gender-container">
              <p>GÉNERO</p>
              <div className="gender-radio">
                <div>
                  <input type="radio" id="female" name="gender" value="female" onChange={ updateState } />
                  <label htmlFor="female">Mujer</label>
                </div>
                <div>
                  <input type="radio" id="male" name="gender" value="male" onChange={ updateState } />
                  <label htmlFor="male">Hombre</label>
                </div>
              </div>
            </div>
            <div className="position-container">
              <p>POSICIÓN</p>
              <div className="gender-position">
                <div>
                  <input type="radio" id="estudiante" name="position" value="hogwartsStudent" onChange={ updateState } />
                  <label htmlFor="estudiante">Estudiante</label>
                </div>
                <div>
                  <input type="radio" id="staff" name="position" value="hogwartsStaff" onChange={ updateState } />
                  <label htmlFor="staff">Staff</label>
                </div>
              </div>
            </div>
          </div>
          <div className="input-foto">
            <p className="foto-text">FOTOGRAFIA</p>
            <input type="file" name="image" accept="image/*" onChange={ updateState } />
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
