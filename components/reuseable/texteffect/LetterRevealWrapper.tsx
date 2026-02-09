import React, { ReactNode } from 'react';
import { useLetterReveal } from './useLetterReveal';

interface LetterRevealWrapperProps {
    children: ReactNode;
    className?: string;
    threshold?: number;
}

const LetterRevealWrapper: React.FC<LetterRevealWrapperProps> = ({
    children,
    className = '',
    threshold = 0.1
}) => {
    const { elementRef } = useLetterReveal<HTMLSpanElement>(threshold);

    return (
        <span ref={elementRef} className={`inline-block ${className}`}>
            {children}
        </span>
    );
};

export default LetterRevealWrapper;
