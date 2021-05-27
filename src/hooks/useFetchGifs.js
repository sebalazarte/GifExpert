import { useState, useEffect } from 'react';
import { getGifts } from '../helpers/getGifs';

export const useFetchGifs = (category, limit) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifts(category, limit)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            });
    }, [category, limit]);

    return state;
}