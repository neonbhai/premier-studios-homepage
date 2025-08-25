import Link from 'next/link';
import ArrowRightIcon from './ArrowRightIcon';

interface TextLinkWithArrowProps {
    href: string;
    text: string;
    className?: string;
}

export default function TextLinkWithArrow({
    href,
    text,
    className = '',
}: TextLinkWithArrowProps) {
    return (
        <Link
            href={href}
            className={`group flex cursor-pointer items-center gap-[0.75rem] ${className}`}
        >
            <span className="text-[1.25rem] leading-[1.21] font-medium tracking-[0.02em] whitespace-nowrap text-white capitalize">
                {text}
            </span>
            <div className="flex h-[1.5rem] w-[0.75rem] items-center justify-center">
                <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
            </div>
        </Link>
    );
}