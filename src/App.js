import './App.css';
import Animation from './components/Animation';
import News from './components/News';
import Footer from './components/Footer';
import Spotify from './components/Spotify';

function App() {
  return (
    <div className="App">
      <Animation />
      <News />
      <Spotify />
      <Footer />
    </div>
  );
}

export default App;
