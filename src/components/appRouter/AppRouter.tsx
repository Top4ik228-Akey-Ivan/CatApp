import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CatByModules from '../catByModules/CatByModules';
import CatBySass from '../catBySass/CatBySass';
import CatByStyledComponents from '../catByStyledComponents/CatByStyledComponents';

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={'modules'} />} />
            <Route path="/modules" element={<CatByModules />} />
            <Route path="/sass" element={<CatBySass />} />
            <Route path="/styled" element={<CatByStyledComponents />} />
        </Routes>
    );
};

export default AppRouter;
