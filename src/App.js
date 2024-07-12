import './App.css';

import yosemite from './Images/Yosemite.jpg';
import cliffs from './Images/cliffs.jpg';
import themoment from './Images/themoment.jpg';
import oldWest from './Images/oldWest.jpg';

function App() {
  return (
    <div className="App">
      <div className='parent'>
        
        <div className='scrollable-container'>
          <a className='scrollable-card' href="/#"></a>
          <a className='scrollable-card' href="/#"></a>
          <a className='scrollable-card' href="/#"></a>
          <a className='scrollable-card' href="/#"></a>
          <a className='scrollable-card' href="/#"></a>
          <a className='scrollable-card' href="/#"></a>
          <a className='scrollable-card' href="/#"></a>
        </div>

        <div className='visible-cards-container'>

          <div className='visible-card'>
            <div
              className='visible-card-content'
              style={{ backgroundImage: `url(${yosemite})` }}
            >
            </div>
          </div>

          <div className='visible-card'>
            <div
              className='visible-card-content'
              style={{ backgroundImage: `url(${themoment})` }}
            >
            </div>
          </div>

          <div className='visible-card'>
            <div
              className='visible-card-content'
              style={{ backgroundImage: `url(${cliffs})` }}
            >
            </div>
          </div>

          <div className='visible-card'>
            <div
              className='visible-card-content'
              style={{ backgroundImage: `url(${oldWest})` }}
            >
            </div>
          </div>

          <div className='visible-card'>
            <div
              className='visible-card-content'
              style={{ backgroundImage: `url(${yosemite})` }}
            >
            </div>
          </div>

          <div className='visible-card'>
            <div
              className='visible-card-content'
              style={{ backgroundImage: `url(${yosemite})` }}
            >
            </div>
          </div>

          <div className='visible-card'>
            <div
              className='visible-card-content'
              style={{ backgroundImage: `url(${yosemite})` }}
            >
            </div>
          </div>

        </div>



      </div>
    </div>
  );
}

export default App;
