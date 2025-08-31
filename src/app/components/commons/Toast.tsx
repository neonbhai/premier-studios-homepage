'use client';

import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface ToastProps {
    message: string;
    type: 'success' | 'error' | 'info';
    onClose: () => void;
    duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
    message,
    type,
    onClose,
    duration = 3000,
}) => {
    const toastRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!toastRef.current) return;

        // Set initial state
        gsap.set(toastRef.current, {
            x: 100,
            opacity: 0,
            scale: 0.9,
        });

        // Entrance animation
        gsap.to(toastRef.current, {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: 'back.out(1.7)',
            delay: 0.1,
        });

        // Exit animation after duration
        gsap.to(toastRef.current, {
            x: 100,
            opacity: 0,
            scale: 0.9,
            duration: 0.3,
            ease: 'power2.in',
            delay: duration / 1000 - 0.3,
            onComplete: onClose,
        });
    }, [duration, onClose]);

    const getTypeStyles = () => {
        switch (type) {
            case 'success':
                return 'bg-green-500 text-white';
            case 'error':
                return 'bg-red-500 text-white';
            case 'info':
                return 'bg-blue-500 text-white';
            default:
                return 'bg-gray-500 text-white';
        }
    };

    const handleClose = () => {
        if (!toastRef.current) return;

        gsap.to(toastRef.current, {
            x: 100,
            opacity: 0,
            scale: 0.9,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: onClose,
        });
    };

    return (
        <div
            ref={toastRef}
            className={`fixed top-4 right-4 z-50 min-w-[300px] rounded-lg px-4 py-3 shadow-lg ${getTypeStyles()}`}
        >
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{message}</span>
                <button
                    onClick={handleClose}
                    className="ml-4 text-white/70 transition-colors hover:text-white"
                >
                    ×
                </button>
            </div>
        </div>
    );
};

interface ToastContextType {
    showToast: (message: string, type: 'success' | 'error' | 'info') => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(
    undefined
);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [toasts, setToasts] = useState<
        Array<{
            id: number;
            message: string;
            type: 'success' | 'error' | 'info';
        }>
    >([]);

    const showToast = (message: string, type: 'success' | 'error' | 'info') => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);
    };

    const removeToast = (id: number) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    message={toast.message}
                    type={toast.type}
                    onClose={() => removeToast(toast.id)}
                />
            ))}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = React.useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
