import {  Route ,Routes} from "react-router-dom";
import Dashbord from "../../Pages/Dashbord/Dashbord";
import Country from "../../Pages/Country/Country";

function AppRoutes() {
    return (
        
            <Routes>
                <Route path="/" element={<Dashbord/>}>Dashbord</Route>
                <Route path="/country" element={<Country/>}>Country</Route>


                

            </Routes>

        
    )
}

export default AppRoutes