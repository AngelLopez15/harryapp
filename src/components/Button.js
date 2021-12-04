export default function Button(props) {

  const { text } = props

  return (
    <button className="button-select">
      { text }
    </button>
  )
}