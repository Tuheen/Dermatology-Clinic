import React, { useEffect, useState } from 'react';
import Dermatologist from '../Dermatologist/Dermatologist';

const Dermatologists = () => {
    const [ dermatologists, setDermatologists ] = useState([])
    useEffect( () => {
        fetch('dermatologists.json')
        .then(res => res.json())
        .then(data => setDermatologists(data));
    }, [])
    return (
        <div id="dermatologists">
            <h2 className='text-primary'> Our Popular <br /> <span>Dermatologists</span></h2>
            <div className="row">
            {
                dermatologists.map(dermatologist => <Dermatologist
                    key={dermatologist.id}
                    dermatologist={dermatologist}
                ></Dermatologist>)
            }
            </div>
        </div>
    );
};

export default Dermatologists;