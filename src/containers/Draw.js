import React, { useState, useEffect } from 'react';

import { getDraws } from '../utils';
import { useDrawsContext } from '../hooks/useDrawsContext';
import DrawComponent from '../components/Draw/Draw';

const Draw = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { setNewestDraw } = useDrawsContext();

    useEffect(() => {
        getDraws('/draws/first', {
            success({ data }) {
                setNewestDraw(data);
                setLoading(false);
            },
            fail(error) {
                setError(error);
            }
        });
    }, []);

    return (
        <DrawComponent
            error={error}
            loading={loading}
        />
    );
}

export default Draw;
