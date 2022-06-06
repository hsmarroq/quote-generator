import { FaTwitterSquare, FaShareSquare, FaQuoteLeft } from 'react-icons/fa';
import { useEffect, useState } from 'react';

function QuoteBox() {
  const API_URL = 'https://type.fit/api/quotes';
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [colorOne, setColorOne] = useState(255);
  const [colorTwo, setColorTwo] = useState(255);
  const [colorThree, setColorThree] = useState(255);

  const randamizeColor = () => {
    setColorOne(Math.floor(Math.random() * 255));
    setColorTwo(Math.floor(Math.random() * 255));
    setColorThree(Math.floor(Math.random() * 255));
  };

  const fetchQuotes = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error('Did not receive expected data.');
      const newQuote = await response.json();
      const randNum = Math.floor(Math.random() * newQuote.length) + 1;
      setQuote(newQuote[randNum].text);
      setAuthor(newQuote[randNum].author);
    } catch (err) {
      console.log(err.stack);
    }
  };

  useEffect(() => {
    fetchQuotes();
    randamizeColor();
  }, []);

  const handleClick = () => {
    randamizeColor();
    fetchQuotes();
  };

  return (
    <main
      style={{
        backgroundColor: `rgb(${colorOne}, ${colorTwo}, ${colorThree})`,
        height: '100vh',
      }}
    >
      <div
        className='main-container'
        style={{
          backgroundColor: `rgb(${colorOne}, ${colorTwo}, ${colorThree})`,
        }}
      >
        <div className='quote-box-container'>
          <div className='quote'>
            <p
              className='paragraph'
              style={{
                color: `rgb(${colorOne}, ${colorTwo}, ${colorThree})`,
              }}
            >
              <span>
                <FaQuoteLeft
                  className='quote-logo'
                  style={{
                    color: `rgb(${colorOne}, ${colorTwo}, ${colorThree})`,
                  }}
                />
              </span>
              {quote}
            </p>
            <p
              className='author-name'
              style={{
                color: `rgb(${colorOne}, ${colorTwo}, ${colorThree})`,
              }}
            >
              - {author === null ? 'Yanib Gonon' : author}
            </p>
          </div>
          <div className='share-new'>
            <div className='share-quote'>
              <a
                href={`https://twitter.com/intent/tweet?text="${quote}"%20-%20${author}.`}
                target='_blank'
                rel='noreferrer'
              >
                <FaTwitterSquare
                  className='share-logo'
                  style={{
                    color: `rgb(${colorOne}, ${colorTwo}, ${colorThree})`,
                  }}
                />
              </a>
              <FaShareSquare
                className='share-logo'
                onClick={() =>
                  navigator.clipboard
                    .writeText(quote)
                    .then(alert('Quotes has been copied!'))
                }
                style={{
                  color: `rgb(${colorOne}, ${colorTwo}, ${colorThree})`,
                }}
              />
            </div>
            <button
              className='new-quote'
              style={{
                backgroundColor: `rgb(${colorOne}, ${colorTwo}, ${colorThree})`,
              }}
              onClick={handleClick}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default QuoteBox;
