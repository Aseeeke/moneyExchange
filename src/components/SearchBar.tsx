import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {GlobalContext} from "../App.tsx";
import {findOrders} from "../service/orderService.ts";

const SearchBar = () => {
    const [amount, setAmount] = useState('')

    const {currency, setResults,setLoader} = useContext(GlobalContext);

    const navigate = useNavigate();

    const handleChange = (e:any) => {
        setAmount(e.target.value);
    }

    const handleSearch = async () => {
        setLoader(true);
        try{
            if(currency && amount) {
                const result = await findOrders({
                    amount: Number(amount),
                    currency: currency,
                })
                setResults(result)
                navigate('/searchResults')
            }
        }
        catch(error) {
            console.log(error);
            navigate('/')
        }
        finally {
            setLoader(false);
        }
    }

    return (
        <div className="h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 text-white p-6 flex flex-col items-center justify-evenly">
            <h1 className="text-6xl text-center font-semibold">Money Exchange</h1>
            <div className="flex flex-col h-1/5 justify-around items-center w-full">
                <h3 className="text-3xl text-center">Enter the amount of {currency} you want to get:</h3>
                <input value={amount} onChange={handleChange} type="number" className="bg-white rounded-2xl w-72 h-1/5 border-1 border-black text-black pl-2"/>
                <button onClick={handleSearch} className="bg-white text-black py-2 px-10 rounded-xl text-xl">Search</button>
            </div>
            <h3 className="text-center text-2xl">If you are not satisfied with the search results, consider creating your own order ^_^ </h3>
        </div>
    )
}
export default SearchBar;