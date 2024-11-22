// ApiRoutes.js
import { Navigate, Route, Routes } from 'react-router-dom';
import ApisComponent from '../../Components/ApisComponentInternas';
import ApisComponetsCOBIS from '../../Components/ApisComponetsCOBIS';
import ApisBuc from '../../Components/ApisBUC';
import AsyncAPIDocumentation from '../../Components/AsyncAPIDocumentation';


export const ApiRoutes = () => {
    return (
        
        <Routes>
            <Route path="/" element={<ApisComponent />} />
            <Route path="/apisComponetsExternas" element={<ApisComponetsCOBIS />} />
            <Route path="/buc" element={<ApisBuc />} />
            <Route path="/mensajeriaColas" element={<AsyncAPIDocumentation />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
