'use client'

import { useEffect, useState } from "react";

const useScreenSize = () => {
    const [size, setSize] = useState<number >(0);
    const [device, setDevice] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'>('sm');

    const handleResize = () => {
        setSize(window.innerWidth);
    };

    useEffect(() => {
        // Set initial size and device type on mount
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (size !== null) {
            if (size < 640) {
                setDevice('xs');
            } else if (size >= 640 && size < 768) {
                setDevice('sm');
            } else if (size >= 768 && size < 1024) {
                setDevice('md');
            } else if (size >= 1024 && size < 1280) {
                setDevice('lg');
            } else if (size >= 1280 && size < 1536) {
                setDevice('xl');
            } else if (size >= 1536) {
                setDevice('2xl');
            }
        }
    }, [size]);

    return { size, device };
};

export default useScreenSize;
