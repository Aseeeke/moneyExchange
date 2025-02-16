import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage.tsx";
import UserOrders from "./UserOrders.tsx";
import CreateOrder from "./CreateOrder.tsx";
import SearchBar from "./SearchBar.tsx";
import SearchResults from "./SearchResults.tsx";
import EditOrder from "./EditOrder.tsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/ordersManagement" element={<UserOrders/>}/>
            <Route path="/createOrder" element={<CreateOrder/>}/>
            <Route path="/searchBar" element={<SearchBar/>}/>
            <Route path="/searchResults" element={<SearchResults/>}/>
            <Route path="/editOrder" element={<EditOrder/>} />
        </Routes>
    )
}
export default AppRouter;