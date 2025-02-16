import AppRouter from "./components/AppRouter.tsx";
import {createContext, useState} from "react";

export const CurrencyContext = createContext({});

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
