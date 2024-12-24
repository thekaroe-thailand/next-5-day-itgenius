'use client';
import { useRef } from "react";
export default function Page() {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleFocus = () => {
        inputRef.current?.focus();
    }
    const handleBlur = () => {
        inputRef.current?.blur();
    }
    const handleClear = () => {
        inputRef.current!.value = '';
    }
    return (
        <div>
            <div className="text-2xl font-bold">ทดสอบภาษาไทย</div>
            <input ref={inputRef} type="text" className="text-black" />
            <button onClick={handleFocus}
                className="bg-blue-500 text-white p-2 rounded-md">
                Focus Input
            </button>
            <button onClick={handleBlur}
                className="bg-red-500 text-white p-2 rounded-md">
                Blur Input
            </button>
            <button onClick={handleClear}
                className="bg-green-500 text-white p-2 rounded-md">
                Clear Input
            </button>
        </div>
    )
}

