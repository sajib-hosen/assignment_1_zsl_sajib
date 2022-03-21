import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import useApiData from './components/Hooks/useApiData';

function App() {
  const { itemsData } = useApiData();
  console.log( itemsData)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home itemData ={ itemsData } />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
