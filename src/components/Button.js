import axios from "axios"
import { useState } from "react";

export default function Button(props) {

  const { text, filter, setCharacteres } = props
  const [active, setActive] = useState(false)

  const filtro = (param) => {

    setActive(!active)

    let config = {
      method: 'get',
      url: `http://localhost:5000/${param}`,
      headers: { }
    };
    axios(config)
    .then(function (response) {
      // console.log(response.data)
      setCharacteres(response.data)
      // window.location.reload(true)
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  return (
    <button className={active ? 'active' : 'button-select'}  onClick={()=>filtro(filter)} >
      { text }
    </button>
  )
}