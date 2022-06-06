import { FaTwitterSquare, FaShareSquare, FaQuoteLeft } from 'react-icons/fa';
import { useEffect, useState } from 'react';

function QuoteBox() {
  const API_URL = 'https://type.fit/api/quotes';
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

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
  }, []);

  const handleClick = () => {
    fetchQuotes();
  };

  return (
    <main>
      <div className='main-container'>
        <div className='quote-box-container'>
          <div className='quote'>
            <p className='paragraph'>
              <span>
                <FaQuoteLeft className='quote-logo' />
              </span>
              {quote}
            </p>
            <p className='author-name'>
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
                <FaTwitterSquare className='share-logo' />
              </a>
              <FaShareSquare
                className='share-logo'
                onClick={() => navigator.clipboard.writeText(quote)}
              />
            </div>
            <button className='new-quote' onClick={handleClick}>
              New Quote
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default QuoteBox;
