import React, {useState, useEffect} from 'react';

function Ticking() {
    const [count, setCount] = useState(10);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count - 1)}>
                Click me
            </button>
        </div>
    );
}

export default Ticking;