import AppRouter from "./components/AppRouter.tsx";
import {createContext, Dispatch, SetStateAction, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Loader from "./components/Loader.tsx";

export type Currency = 'KZT' | 'KRW' | undefined;

export type userOrder = {
    firstCurrency: Currency;
    _id: string;
    amount: number;
    username:string;
} | undefined;

interface GlobalContextType {
    currency: Currency;
    setCurrency: Dispatch<SetStateAction<Currency>>;
    userKRWOrder: userOrder | null,
    userKZTOrder: userOrder | null,
    setUserKZTOrder: Dispatch<SetStateAction<userOrder>>;
    setUserKRWOrder: Dispatch<SetStateAction<userOrder>>;
    currentEditOrder: userOrder | null,
    setCurrentEditOrder: Dispatch<SetStateAction<userOrder>>;
    setLoader: Dispatch<SetStateAction<boolean>>;
    results: userOrder[] | undefined;
    setResults: Dispatch<SetStateAction<userOrder[]>>;
}

// Provide a default value that matches the type
export const GlobalContext = createContext<GlobalContextType>({
    currency: undefined,
    setCurrency: () => {},
    userKRWOrder: null,
    userKZTOrder: null,
    setUserKRWOrder: () => {},
    setUserKZTOrder: () => {},
    currentEditOrder: null,
    setCurrentEditOrder: () => {},
    setLoader: () => {},
    results: [],
    setResults: () => {}
});

function App() {
    const [currency, setCurrency] = useState<Currency>(undefined);
    const [userKRWOrder, setUserKRWOrder] = useState<userOrder>(undefined);
    const [userKZTOrder, setUserKZTOrder] = useState<userOrder>(undefined);
    const [currentEditOrder, setCurrentEditOrder] = useState<userOrder>(undefined);
    const [loader, setLoader] = useState(false);
    const [results, setResults] = useState<userOrder[]>([])

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleBackButtonClick = () => {
            if(location.pathname === '/') {
                window.Telegram.WebApp.close();
            }
            else {
                navigate('/');
            }

        }
        window.Telegram.WebApp.expand();
        window.Telegram.WebApp.onEvent('backButtonClicked', handleBackButtonClick);
        window.Telegram.WebApp.BackButton.show();
        return () => {
            window.Telegram.WebApp.offEvent('backButtonClicked', handleBackButtonClick);
        };
    }, [navigate])

    useEffect(() => {
        if (loader) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [loader]);

  return (
    <div>
        <GlobalContext.Provider value={{currency, setCurrency, userKRWOrder, setUserKRWOrder, userKZTOrder, setUserKZTOrder, currentEditOrder, setCurrentEditOrder, setLoader, results, setResults}}>
            {loader && <Loader/>}
            <AppRouter/>
        </GlobalContext.Provider>
    </div>
  )
}

export default App
