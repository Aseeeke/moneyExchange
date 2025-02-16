const Loader = () => {
    return (
        <div className="h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 flex items-center justify-center">
            <div role="status">
                <div className="w-16 h-16 border-4 border-solid border-white border-t-transparent rounded-full animate-spin"></div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;
