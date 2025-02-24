import  { useState } from "react";


function Counter() {
    let [counter, setCounter] = useState(12)

    const addValue = () => {
        setCounter((item) => {

            if (item >= 20) {
                alert('value should not be greater then 20');
                return item;
            }else {
                return item + 1;
            }
        });
    };
    const removeValue = () => {
        setCounter((item) => {

            if (item <= 0) {
                alert('value should not be lower then 0 or -ve');
                return item;
            }else {
                return item - 1;
            }
        });
    }
    return (
        <>
            <h1 className="text-2xl pb-10">Counter value: {counter}</h1>

            <button type="button" className="outline-none ring-4 ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    onClick={addValue}>Add Value</button>
            <br />
            <button type="button" className="outline-none ring-4 ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    onClick={removeValue}>remove Value</button>
        </>
    )
}

export default Counter
