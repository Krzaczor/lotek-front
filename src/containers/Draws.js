import React, { useState, useEffect, useCallback } from 'react';
import { getDraws } from '../utils';
import { useDrawsContext } from '../hooks/useDrawsContext';

import DrawsCollaction from '../components/Draws/Draws';

export default () => {
    const { draws, setDraws } = useDrawsContext();

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [urlDraws, setUrlDraws] = useState('/draws');
    const [hasNextDraws, setHasNextDraws] = useState(true);

    useEffect(() => {
        getDraws(urlDraws)
            .then(({ data, headers }) => {
                setStateAndContext(data, headers)
            })
            .catch((error) => {
                setError(error)
            });
    }, []);

    const setStateAndContext = useCallback((data, { next }) => {
        setLoading(false);
        setHasNextDraws(next ? true : false);
        setUrlDraws(next);
        setDraws(data);
    }, []);

    const moreDraws = useCallback(() => {
        if (hasNextDraws) {
            getDraws(urlDraws)
                .then(({ data, headers }) => {
                    setStateAndContext(data, headers)
                })
                .catch((error) => {
                    setError(error)
                });
        }
    }, []);

    return (
        <DrawsCollaction
            error={error}
            loading={loading}
            draws={draws}
            hasNextDraws={hasNextDraws}
            moreDraws={moreDraws}
        />
    )
}
