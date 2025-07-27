"use client";

import React, { useState } from 'react';

interface LogoProps {
    variant?: 'default' | 'minimal' | 'geometric';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

const Logo: React.FC<LogoProps> = ({
    variant = 'default',
    size = 'md',
    className = ''
}) => {
    const [imageError, setImageError] = useState(false);

    const sizeClasses = {
        sm: variant === 'default' ? 'w-20 h-7' : 'w-8 h-8',
        md: variant === 'default' ? 'w-28 h-9' : 'w-12 h-12',
        lg: variant === 'default' ? 'w-36 h-12' : 'w-16 h-16',
        xl: variant === 'default' ? 'w-44 h-15' : 'w-20 h-20'
    };

    const getLogoSrc = () => {
        switch (variant) {
            case 'minimal':
                return '/icons/parth-logo-minimal.svg';
            case 'geometric':
                return '/icons/parth-logo-geometric.svg';
            default:
                return '/icons/parth-logo.svg';
        }
    };

    const FallbackLogo = () => (
        <div className={`${variant === 'default' ? 'flex items-center space-x-2' : 'w-full h-full rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center'}`}>
            {variant === 'default' ? (
                <>
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">PS</span>
                    </div>
                    <div>
                        <div className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">PARTH</div>
                        <div className="text-xs text-gray-500">SHARMA</div>
                    </div>
                </>
            ) : (
                <span className="text-white font-bold text-lg">PS</span>
            )}
        </div>
    );

    return (
        <div className={`${sizeClasses[size]} ${className} transition-transform duration-300 hover:scale-105`}>
            {!imageError ? (
                <img
                    src={getLogoSrc()}
                    alt="Parth Sharma Logo"
                    className="w-full h-full"
                    onError={() => setImageError(true)}
                />
            ) : (
                <FallbackLogo />
            )}
        </div>
    );
};

export default Logo; 