import React from 'react';
import { useParams } from 'react-router';

const DocDetails = () => {
        const {docId} = useParams();
    return (
        <div>
            <h2>This is doc:{docId}</h2>
        </div>
    );
};

export default DocDetails;