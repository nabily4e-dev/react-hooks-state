import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        console.log(`before setState: ${count}`);

        setCount(count + 1);
        console.log(`after 1st setState: ${count}`);

        setCount(count + 1);
        console.log(`after 2nd setState: ${count}`);

        setCount(function (currentCounter) {
          currentCounter += 1;
          console.log(`after 3nd setState: ${currentCounter}`);
          return console.log(`after 3nd setState: ${count}`);

        });

        setCount((currentCounter) => currentCounter + 1);
        console.log(`after 4nd setState: ${count}`);
    }

    return (
        <div>
            <button onClick={increment}>
                I have been clicked {count} times
            </button>
            <div onClick={increment}>{count}</div>
        </div>
    );
}

export default Counter;
