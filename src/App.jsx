// First Query Test //
// const App = () => <h1>Our First Test</h1>;
// export default App;

//Simulating user events //
import { useState } from "react";

const App =() => {
    const [heading, setHeading] = useState("Magnificent Monkeys");

    const clickHandler =() => {
        setHeading("Radical Rhinos");
    };

    return (
        <>
            <button type="button" onClick={clickHandler}>Click Me</button>
            <h1>{heading}</h1>
        </>
    )
}
export default App;