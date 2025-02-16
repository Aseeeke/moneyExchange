import {useState} from "react";
import {useNavigate} from "react-router-dom";

const EditOrder = () => {
    const [amount, setAmount] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setAmount(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //todo
        navigate('/ordersManagement')
    }

    return (
        <div className="h-screen bg-gradient-to-b from-cyan-300 to-blue-500 p-6 flex flex-col items-center justify-around text-white">
            <h1 className="text-6xl text-center font-semibold mt-20">Order management</h1>
            <div className="flex flex-col h-1/5 items-center justify-evenly">
                <h1 className="text-2xl text-center">Type a new amount</h1>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <input type="number" onChange={handleChange} value={amount} className="bg-white rounded-2xl w-72 py-2 pl-2 border-1 border-black text-black"/>
                    <button type="submit" className="bg-white text-black py-1 px-6 rounded-lg text-xl w-1/2 mt-4">Save</button>
                </form>
            </div>
            <div className="h-1/3"/>
        </div>
    )
}
export default EditOrder;