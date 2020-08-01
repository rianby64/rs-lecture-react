
import * as React from "react";
import { useState } from "react";

interface ArrValuesProps {
    values: number[];
}

export function ArrValues(props: ArrValuesProps) {
    const [values, setValues] = useState(props.values);

    function handleClick(): void {
        setValues([Math.round(Math.random() * 100), ...values]);
    }

    return (
        <div>
            <span>Case 3 - reconciliation - the importance of the attribute "key"</span>
            <button onClick={handleClick}>Random</button>
            { values.map((value, i) => <div key={values.length - i}>{value}, {values.length - i}</div>) }
        </div>
    )
}
