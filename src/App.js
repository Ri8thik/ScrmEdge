import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import Header from './components/Header/Header.tsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<div>Test</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
