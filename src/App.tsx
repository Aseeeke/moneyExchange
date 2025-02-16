import AppRouter from "./components/AppRouter.tsx";
import {createContext, Dispatch, SetStateAction, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

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

    useEffect(() => {
        const handleBackButtonClick = () => {
            navigate(-1);
        }

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
