import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
    </div>
  );
}

export default App;
