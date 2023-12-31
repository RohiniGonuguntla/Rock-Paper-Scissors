import './index.css'

const ImageItem = props => {
  const {details, clickWeapon} = props
  const {id, imageUrl} = details

  const onClickEmojiCard = () => {
    clickWeapon(details)
  }

  let compiler

  if (id === 'ROCK') {
    compiler = 'rockButton'
  } else if (id === 'PAPER') {
    compiler = 'paperButton'
  } else if (id === 'SCISSORS') {
    compiler = 'scissorsButton'
  }

  return (
    <li className="card">
      <button
        type="button"
        className="choose"
        onClick={onClickEmojiCard}
        data-testid={compiler}
      >
        <img className="image" src={imageUrl} alt={id} />
      </button>
    </li>
  )
}

export default ImageItem
