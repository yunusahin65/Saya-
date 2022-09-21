import React, { useState } from "react";


const Deneme = () => {
    const [Deneme, setDeneme] = useState(0)

    const handleAzalt = () => {
        if (Deneme <= 0){
            setDeneme(0);
        }
        else{
            setDeneme(Deneme - 1);    
        };
        
    };
    const handleSıfırla = () => {
        setDeneme (0)
    };
    const handleArttır = () => {
        setDeneme ( Deneme + 1)
    };

    return (
        <div className="text-center">
            <h2>Zikirmatik</h2>
            <h1 className="text-center">{Deneme}</h1>
            <div className="d-flex justify-content-center">
                <button onClick={handleAzalt} className="btn btn-outline-danger mx-2">Azalt</button>
                <button onClick={handleSıfırla} className="btn btn-outline-success mx-2">Sıfırla</button>
                <button onClick={handleArttır} className="btn btn-outline-danger mx-2">Arttır</button>
            </div>
        </div>
    );
};

export default Deneme;