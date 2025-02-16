import AppRouter from "./components/AppRouter.tsx";
import {createContext, Dispatch, SetStateAction, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

interface CurrencyContextType {
    currency: string;
    setCurrency: Dispatch<SetStateAction<string>>;
}

// Provide a default value that matches the type
export const CurrencyContext = createContext<CurrencyContextType>({
    currency: '',
    setCurrency: () => {}
});

function App() {
    const [currency, setCurrency] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleBackButtonClick = () => {
            if(location.pathname === '/') {
                window.Telegram.WebApp.close();
            }
            else {
                navigate(-1);
            }

        }
        window.Telegram.WebApp.expand();
        window.Telegram.WebApp.onEvent('backButtonClicked', handleBackButtonClick);
        window.Telegram.WebApp.BackButton.show();
        return () => {
            window.Telegram.WebApp.offEvent('backButtonClicked', handleBackButtonClick);
        };
    }, [navigate])

  return (
    <div>
        <CurrencyContext.Provider value={{currency, setCurrency}}>
            <AppRouter/>
        </CurrencyContext.Provider>
    </div>
  )
}

export default App
