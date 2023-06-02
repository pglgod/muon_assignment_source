
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';

function App() {

  document.title = "muon capital"
  return (
    <>
    <Header/>
    <div className="container">
      <Menu/> 
      <Main/>
    </div>
    </>
  );
}

export default App;
