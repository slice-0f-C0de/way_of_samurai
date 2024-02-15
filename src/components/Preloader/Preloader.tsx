import React from 'react';
import preloader from "./loading/preloader.gif"

const Preloader = () => {
    return (
        <div>
            <img src={preloader}/>
        </div>
    );
};

export default Preloader;