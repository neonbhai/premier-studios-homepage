'use client';

interface ContactSubmitButtonProps {
    onSubmit: (e: React.FormEvent) => void;
}

export default function ContactSubmitButton({ onSubmit }: ContactSubmitButtonProps) {
    return (
        <button
            type="submit"
            onClick={onSubmit}
            className="flex w-fit items-center gap-[0.75rem] rounded-full bg-[#029BE6] px-[2rem] py-[1rem] transition-colors hover:bg-[#0256CC] md:gap-[1rem] md:px-[4rem] md:py-[1.5rem]"
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-6 md:w-6"
            >
                <path
                    d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span className="text-[1rem] leading-[1.21] font-medium text-white md:text-[1.25rem]">
                Send Message
            </span>
        </button>
    );
}