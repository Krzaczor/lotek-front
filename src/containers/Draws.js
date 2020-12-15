import React, { useState, useEffect, useCallback } from 'react';
import { requestAction } from '../utils';
import { useDrawsContext } from '../hooks/useDrawsContext';

import DrawsCollaction from '../components/Draws/Draws';

export default () => {
    const { draws, setDraws } = useDrawsContext();
    const [error, setError] = useState(null);
    const [state, setState] = useState({
        loading: true,
        urlToDraws: '/draws/public',
        hasNextDraws: true,
    })

    useEffect(() => {
        requestAction('/draws/public', {
            success({ data, headers }) { setStateAndContext(data, headers) },
            fail(error) { setError(error) }
        });
    }, []);

    const setStateAndContext = useCallback((data, { next }) => {
        setState({
            loading: false,
            hasNextDraws: next ? true : false,
            urlToDraws: next,
        });

        setDraws(data);
    });

    const moreDraws = useCallback(() => {
        if (state.urlToDraws) {
            requestAction(state.urlToDraws, {
                success({ data, headers }) { setStateAndContext(data, headers) },
                fail(error) { setError(error) }
            });
        }
    });

    return (
        <DrawsCollaction
            error={error}
            loading={state.loading}
            draws={draws}
            hasNextDraws={state.hasNextDraws}
            moreDraws={moreDraws}
        />
    )
}
