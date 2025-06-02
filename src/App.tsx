import './styles/App.css';

import HeaderBar from './components/HeaderBar.tsx';
import PlayerWidget from './components/PlayerWidget.tsx';

function App() {
  return (
    <div className='full-container'>
      <HeaderBar />
      <div className='widget-box'>
      <PlayerWidget />
      <PlayerWidget />
      <PlayerWidget />
      </div>
    </div>
  )
}

export default App
