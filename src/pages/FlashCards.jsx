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
    { letter: 'C', imageUrl: '/public/c.jpg' },
    { letter: 'D', imageUrl: '/public/d.jpg' },
    { letter: 'E', imageUrl: '/public/e.jpg' },
    { letter: 'F', imageUrl: '/public/f.jpg' },
    { letter: 'G', imageUrl: '/public/g.jpg' },
    { letter: 'H', imageUrl: '/public/h.jpg' },
    { letter: 'I', imageUrl: '/public/i.jpg' },
    { letter: 'J', imageUrl: '/public/j.jpg' },
    { letter: 'K', imageUrl: '/public/k.jpg' },
    { letter: 'L', imageUrl: '/public/l.jpg' },
    { letter: 'M', imageUrl: '/public/m.jpg' },
    { letter: 'N', imageUrl: '/public/n.jpg' },
    { letter: 'O', imageUrl: '/public/o.jpg' },
    { letter: 'P', imageUrl: '/public/p.jpg' },
    { letter: 'Q', imageUrl: '/public/q.jpg' },
    { letter: 'R', imageUrl: '/public/r.jpg' },
    { letter: 'S', imageUrl: '/public/s.jpg' },
    { letter: 'T', imageUrl: '/public/t.jpg' },
    { letter: 'U', imageUrl: '/public/u.jpg' },
    { letter: 'V', imageUrl: '/public/v.jpg' },
    { letter: 'W', imageUrl: '/public/w.jpg' },
    { letter: 'X', imageUrl: '/public/x.jpg' },
    { letter: 'Y', imageUrl: '/public/y.jpg' },
    { letter: 'Z', imageUrl: '/public/z.jpg' },
    { letter: 'RED', imageUrl: '/public/c.jpg' },
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