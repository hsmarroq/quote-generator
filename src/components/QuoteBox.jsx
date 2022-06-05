import { FaTwitterSquare, FaShareSquare, FaQuoteLeft } from 'react-icons/fa';

function QuoteBox() {
  return (
    <main>
      <div className='main-container'>
        <div className='quote-box-container'>
          <div className='quote'>
            <p className='paragraph'>
              <span>
                <FaQuoteLeft className='quote-logo' />
              </span>
              A house divided against itself cannot stand.
            </p>
            <p className='author-name'>- Yanib Gonon</p>
          </div>
          <div className='share-new'>
            <div className='share-quote'>
              <FaTwitterSquare className='share-logo' />
              <FaShareSquare className='share-logo' />
            </div>
            <button className='new-quote'>New Quote</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default QuoteBox;
