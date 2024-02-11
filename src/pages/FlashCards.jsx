import { useState } from 'react'
import logo from '/SignLingo.png'
import './Layout.css'
import ReactCardFlip from 'react-card-flip'



const FlashCards = () => 
{
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <>
      <div>
          <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
            <div className='card' onClick={flipCard}>
              <h1>Front</h1>
            </div>
            <div className='card card-back' onClick={flipCard}>
              <h1>Back</h1>
            </div>
          </ReactCardFlip>
      </div>
    </>
  )
};

export default FlashCards;