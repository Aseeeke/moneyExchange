import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {CurrencyContext} from "../App.tsx";

const SearchBar = () => {
    const [amount, setAmount] = useState('')

    //@ts-expect-error currency to use
    const {currency} = useContext(CurrencyContext);

    const navigate = useNavigate();

    const handleChange = (e:any) => {
        setAmount(e.target.value);
    }

    const handleSearch = () => {
        navigate('/searchResults')
        //todo
    }

    return (
        <div className="h-screen bg-gradient-to-b from-cyan-300 to-blue-500 text-white p-6 flex flex-col items-center justify-evenly">
            <h1 className="text-6xl text-center font-semibold">Money Exchange</h1>
            <div className="flex flex-col h-1/5 justify-around items-center w-full">
                <h3 className="text-3xl">Enter the amount:</h3>
                <input value={amount} onChange={handleChange} type="number" className="bg-white rounded-2xl w-72 h-1/5 border-1 border-black text-black pl-2"/>
                <button onClick={handleSearch} className="bg-white text-black py-2 px-10 rounded-xl text-xl">Search</button>
            </div>
            <h3 className="text-center text-2xl">If you are not satisfied with the search results, consider creating your own order ^_^ </h3>
        </div>
    )
}
export default SearchBar;