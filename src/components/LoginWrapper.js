import React, { useState, useEffect } from 'react';
import Login from './Login';
import LoginResponsive from './LoginResponsive';

export default function LoginWrapper() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to check screen width
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 760); // md breakpoint
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <>
            {isMobile ? <LoginResponsive /> : <Login />}
        </>
    );
}
