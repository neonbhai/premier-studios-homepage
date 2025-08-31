'use client';

import React from 'react';
import { ButtonWithCutoff } from './ButtonWithCutoff';
import { useResponsiveLayout } from '../../hooks/useResponsiveLayout';
import { useToast } from './commons/Toast';

type ButtonSize = 'sm' | 'md' | 'lg';

interface EmailSubscribeProps {
    placeholder?: string;
    buttonText?: string;
    onSubmit?: (email: string) => void;
    className?: string;
}

export const EmailSubscribe: React.FC<EmailSubscribeProps> = ({
    placeholder = 'Enter your email',
    buttonText = 'Subscribe',
    onSubmit,
    className = '',
}) => {
    const { isMobile, isTablet } = useResponsiveLayout();
    const [email, setEmail] = React.useState('');
    const { showToast } = useToast();
    const formRef = React.useRef<HTMLFormElement>(null);

    // Match the responsive size logic from ButtonWithCutoff
    const getResponsiveSize = (): ButtonSize => {
        if (isMobile) return 'sm';
        if (isTablet) return 'md';
        return 'lg'; // Desktop and larger
    };

    const getSizeClasses = (size: ButtonSize) => {
        switch (size) {
            case 'sm':
                return {
                    height: 48,
                    textSize: 'text-sm',
                    padding: 'px-3',
                };
            case 'md':
                return {
                    height: 48,
                    textSize: 'text-base',
                    padding: 'px-4',
                };
            case 'lg':
                return {
                    height: 62,
                    textSize: 'text-lg',
                    padding: 'px-5',
                };
        }
    };

    const size = getResponsiveSize();
    const sizeConfig = getSizeClasses(size);

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedEmail = email.trim();
        
        if (!trimmedEmail) {
            showToast('Please enter an email address', 'error');
            return;
        }
        
        if (!isValidEmail(trimmedEmail)) {
            showToast('Please enter a valid email address', 'error');
            return;
        }

        showToast('Successfully subscribed to our newsletter!', 'success');
        setEmail('');
        if (onSubmit) {
            onSubmit(trimmedEmail);
        }
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit} className={className}>
            <div className="flex justify-end">
                <input
                    type="email"
                    placeholder={placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full max-w-xs border border-r-0 border-t-white border-b-white border-l-white bg-transparent xl:max-w-[300px] ${sizeConfig.padding} ${sizeConfig.textSize} text-white placeholder-white/40 focus:border-white/80 focus:outline-none`}
                    style={{ height: sizeConfig.height }}
                    required
                />
                <div
                    className="-ml-[4px] flex items-center"
                    style={{ height: sizeConfig.height }}
                >
                    <ButtonWithCutoff
                        text={buttonText}
                        flipped={true}
                        size={size}
                        onClick={() => {
                            // Trigger form submission using the specific form ref
                            if (formRef.current) {
                                formRef.current.requestSubmit();
                            }
                        }}
                    />
                </div>
            </div>
        </form>
    );
};
