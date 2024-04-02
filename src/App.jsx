import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Header from './componments/Header';
import { HoroscopeProvider } from './componments/Datas';



function App() {
  return (
      <Router>
          <HoroscopeProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Header /> }/>
                            
            </Routes>
          </HoroscopeProvider>
      </Router>
  )
};
export default App;