import {useEffect, useState} from "react";

const SearchResults = () => {
    const [searchResults, setSearchResults] = useState([{}]);

    useEffect(() => {
        setSearchResults([
            {
                name: 'alisher'
            },
            {
                name: 'aseke'
            }
        ])
    },[])

    return (
        <div className="h-screen bg-gradient-to-b from-cyan-300 to-blue-500 text-white p-6 flex flex-col items-center">
            <h1 className="text-5xl text-center font-semibold mt-20">Search Results</h1>
            <div className="mt-10 text-black">
                {searchResults.map((result) => (
                    <li>{result.name}</li>
                ))}
            </div>
            <h3 className="text-center text-2xl mt-10">If you are not satisfied with the search results, consider creating
                your own order ^_^ </h3>
        </div>
    )
}
export default SearchResults;