import React, { useState } from 'react';
import './Layout.css';
import ReactCardFlip from 'react-card-flip';

const FlashCards = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [shuffledFlashcards, setShuffledFlashcards] = useState([]);
  const [isShuffled, setIsShuffled] = useState(false);

  const flashcards = [
    { letter: 'A', imageUrl: '/public/a.jpg' },
    { letter: 'B', imageUrl: '/public/b.png' },
    { letter: 'C', imageUrl: '/public/c.png' },
    { letter: 'D', imageUrl: '/public/d.jpg' },
    { letter: 'E', imageUrl: '/public/e.jpg' },
    { letter: 'F', imageUrl: '/public/f.png' },
    { letter: 'G', imageUrl: '/public/g.png' },
    { letter: 'H', imageUrl: '/public/h.png' },
    { letter: 'I', imageUrl: '/public/i.png' },
    { letter: 'J', imageUrl: '/public/j.png' },
    { letter: 'K', imageUrl: '/public/k.png' },
    { letter: 'L', imageUrl: '/public/l.png' },
    { letter: 'M', imageUrl: '/public/m.png' },
    { letter: 'N', imageUrl: '/public/n.png' },
    { letter: 'O', imageUrl: '/public/o.png' },
    { letter: 'P', imageUrl: '/public/p.png' },
    { letter: 'Q', imageUrl: '/public/q.png' },
    { letter: 'R', imageUrl: '/public/r.png' },
    { letter: 'S', imageUrl: '/public/s.png' },
    { letter: 'T', imageUrl: '/public/t.png' },
    { letter: 'U', imageUrl: '/public/u.png' },
    { letter: 'V', imageUrl: '/public/v.png' },
    { letter: 'W', imageUrl: '/public/w.png' },
    { letter: 'X', imageUrl: '/public/x.png' },
    { letter: 'Y', imageUrl: '/public/y.png' },
    { letter: 'Z', imageUrl: '/public/z.png' },
    { letter: 'RED', imageUrl: '/public/c.png' },
  ];

  const shuffleCards = () => {
    let array = [...flashcards]; // Copy the original flashcards array
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % (isShuffled ? shuffledFlashcards.length : flashcards.length));
    setIsFlipped(false);
  };

  const goToPrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + (isShuffled ? shuffledFlashcards.length : flashcards.length)) % (isShuffled ? shuffledFlashcards.length : flashcards.length));
    setIsFlipped(false);
  };

  const handleShuffleClick = () => {
    if (!isShuffled) {
      setShuffledFlashcards(shuffleCards());
    } else {
      setShuffledFlashcards([]);
    }
    setIsShuffled(!isShuffled);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  const currentCards = isShuffled ? shuffledFlashcards : flashcards;
  const currentCard = currentCards[currentCardIndex];

  return (
    <div className="flashcards-container">
      <div onClick={flipCard}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div className="card">
            <h1>{currentCard.letter}</h1>
          </div>
          <div className="card card-back">
            <img src={currentCard.imageUrl} alt={`Sign for ${currentCard.letter}`} style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
        </ReactCardFlip>
      </div>
      <div className="navigation">
        <button onClick={goToPrevCard}>Previous</button>
        <button onClick={goToNextCard}>Next</button>
        <button onClick={handleShuffleClick}>{isShuffled ? 'Unshuffle' : 'Shuffle'}</button>
      </div>
    </div>
  );
};

export default FlashCards;