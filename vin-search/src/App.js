import Main from './main';
import './App.css';
import { NavBar } from './components/Nav/navBar';
import { Footer } from './components/Footer/footer';
import ErrorBoundary from './components/ErrorBoundary/errorBoundary';



function App() {
  return (
    <div className="App"  >
      <ErrorBoundary>
        <NavBar />
        <Main />
        <Footer />
      </ErrorBoundary>
    </div>

  );
}

export default App;
