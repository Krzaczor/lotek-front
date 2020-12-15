import { useState, useEffect } from 'react';
import { device } from '../config/styles';

export const useMatchMedia = (media) => {
    const [hasMoreWidth, setHasMoreWidth] = useState(false);

    useEffect(() => {
        const mediaCSS = window.matchMedia(device.tablet);
        const checkWidth = (e) => setHasMoreWidth(e.matches);
        
        mediaCSS.addEventListener('change', checkWidth, false);
        setHasMoreWidth(mediaCSS.matches);
        
        return () => mediaCSS.removeEventListener('change', checkWidth, false);
    }, []);

    return { hasMoreWidth };
}

export default useMatchMedia;