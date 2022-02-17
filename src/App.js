import './App.css';
import Header from './components/Header';
import { ItemProvider } from './context/ShoppingContext';
import Shop from './views/Shop';

function App() {
  return (
    <div className="App">
      <ItemProvider>
        <header className="App-header">
          {/* Yes, I know that this is a Header component, inside the default header HTML tag. I know this would be against convention, but I need and want the styles from the header that were already here, and when I tried to put them and the components inside a body tag, they didn't work, so I gave up, and we have this. */}
          <Header />
          <Shop />
        </header>
      </ItemProvider>
    </div>
  );
}

export default App;
