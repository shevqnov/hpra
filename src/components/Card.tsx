import React from 'react'

interface Props {
  word: string;
  meaning: string;
  image: string
}

const Card: React.FC<Props> = ({ word, meaning, image }) => {
  return (
    <li>
      <b>{word}</b>
      <br />
      <span>{meaning}</span>
      <br />
      <img style={{ width: 100 }} src={image} alt={word} />
    </li>
  )
}

export default Card