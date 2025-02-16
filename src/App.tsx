import AppRouter from "./components/AppRouter.tsx";
import {createContext, Dispatch, SetStateAction, useState} from "react";

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

  return (
    <div>
        <CurrencyContext.Provider value={{currency, setCurrency}}>
            <AppRouter/>
        </CurrencyContext.Provider>
    </div>
  )
}

export default App
