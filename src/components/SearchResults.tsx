import { useContext } from "react";
import { GlobalContext } from "../App";

const SearchResults = () => {
    const { results } = useContext(GlobalContext);

    const handleUsernameClick = (username: string | undefined) => {
        window.Telegram.WebApp.openTelegramLink(`https://t.me/${username}`)
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 p-6">
            {/* Title */}
            <h1 className="mt-16 text-5xl font-bold text-white drop-shadow-lg">
                Search Results
            </h1>

            {/* Results Container */}
            <div className="w-full max-w-xl mt-12 space-y-6">
                {results && results.length > 0 ? (
                    results.map((order) => (
                        <div
                            key={order?._id}
                            className="
                relative
                bg-white bg-opacity-20
                backdrop-blur-md
                rounded-xl
                p-6
                shadow-lg
                text-black
                transform
                transition-transform
                duration-300
                hover:scale-105
              "
                        >
                            {/* Username */}
                            <p className="text-2xl font-semibold mb-1" onClick={() => {handleUsernameClick(order?.username)}}>
                                {order?.username}
                            </p>
                            {/* Order Details */}
                            <p className="text-lg">
                                {order?.amount} {order?.firstCurrency} →{" "}
                                {order?.firstCurrency === "KZT" ? "KRW" : "KZT"}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-white text-center text-xl">
                        No results found.
                    </p>
                )}
            </div>

            {/* Footer / Info */}
            <h3 className="text-center text-2xl mt-12 px-4 text-white drop-shadow">
                If you are not satisfied with the search results, consider creating
                your own order ^_^
            </h3>
        </div>
    );
};

export default SearchResults;
