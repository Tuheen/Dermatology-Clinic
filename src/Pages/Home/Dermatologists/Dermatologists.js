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
        <div id="dermatologists" className="my-5">
            <h2 className='text-info bg-white mb-3 font-weight-light'> Our Popular <br /> <span className="bg-info px-5 rounded">Dermatologists</span></h2>
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