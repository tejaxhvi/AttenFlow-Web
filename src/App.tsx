import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Middle from './components/Middle';
function App() {
  return (
    <div className='w-full h-full'>
      <Navbar />
      <Hero />
      <Middle />
    </div>
  );
}
export default App;