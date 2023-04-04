import './App.css';
import Head1 from './Components/Head1';
import Nav from './Components/Nav';
import { Cart } from './Components/Cart';
import Section1 from './Components/Section1';

function App() {
  return (
    <div className="App">
      <Head1/>
      <Nav/>
      <Section1/>
      <Cart/>
    </div>
  );
}

export default App;