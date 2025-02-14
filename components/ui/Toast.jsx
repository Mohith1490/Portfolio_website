"use client";
import { useEffect, useState } from "react";

export default function Toast({ message, type, onClose }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose(); 
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    if (!visible) return null;

    return (
        <div className={`fixed top-5 right-5 p-4 rounded-lg shadow-lg text-white text-sm font-semibold
            ${type === "success" ? "bg-green-500" : "bg-red-500"}`}>
            {message}
        </div>
    );
}
