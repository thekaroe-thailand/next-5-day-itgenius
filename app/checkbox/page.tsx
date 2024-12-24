'use client';

import { useState } from "react";

interface Props {
    label: string;
}

export default function Checkbox({ label }: Props) {
    const [isChecked, setIsChecked] = useState(true);

    return (
        <div>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)} />
            {" "}
            <label>{label} {isChecked ? "Checked" : "Unchecked"}</label>
        </div>
    )
}
