import { HashRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/appRouter/AppRouter';
import Navbar from './components/navbar/NavBar';

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Navbar />
                <AppRouter />
            </HashRouter>
        </div>
    );
}

export default App;
