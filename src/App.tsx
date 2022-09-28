//? ESSENTIAL IMPORTS
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//? COMPONENT IMPORTS
import Landing from './pages/Landing/Landing';
import Spotone from './pages/Spotone/Spotone';

//? STYLES IMPORTS
import Styled from './App.styled';

const App = () => {
    return (
        <Styled.ThemeWrapper>
            <Router>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/spotone' element={<Spotone />} />
                </Routes>
            </Router>
        </Styled.ThemeWrapper>
    );
};

export default App;
