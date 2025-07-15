
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    // <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          {/* <AppRoutes /> */}
        </main>
      </div>
    // </Router>
  );
}


export default App;
