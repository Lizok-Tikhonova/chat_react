import './App.css';
import AsideBar from '../components/AsideBar';
import Content from '../components/Content';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AsideBar />
      <Routes>
        <Route path="chat/*" element={<Content/>}/>
      </Routes>
    </div>
  );
}

export default App;
