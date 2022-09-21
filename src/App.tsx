//? ESSENTIAL IMPORTS
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

//? COMPONENT IMPORTS
import Landing from './Pages/Landing/Landing';

//? STYLES IMPORTS
import Styled from './App.styled';
import Spotone from './Pages/Spotone/Spotone';

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
