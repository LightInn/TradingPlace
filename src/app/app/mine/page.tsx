export default function Page() {

    return (

        <div className="flex flex-col items-center justify-center h-screen">

            {/*a gold quantity view and a "mine" input field*/}
            <div className="flex flex-row items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-medium mb-4">Gold</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            0
                        </label>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <button className="block text-gray-700 text-sm font-bold mb-2">
                            MINE !
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );


}