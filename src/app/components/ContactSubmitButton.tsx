'use client';

interface ContactSubmitButtonProps {
    onSubmit: (e: React.FormEvent) => void;
}

export default function ContactSubmitButton({
    onSubmit,
}: ContactSubmitButtonProps) {
    return (
        <button
            type="submit"
            onClick={onSubmit}
            className="group flex w-fit items-center gap-[0.75rem] rounded-full bg-[#029BE6] px-[2rem] py-[1rem] transition-colors hover:bg-[#0256CC] md:gap-[1rem] md:px-[4rem] md:py-[1.5rem]"
        >
            <div className="relative overflow-hidden md:h-6 md:w-6">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute transition-all duration-300 ease-in-out group-hover:translate-x-8 group-hover:-translate-y-2 group-hover:opacity-0 md:h-6 md:w-6"
                >
                    <path
                        d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -translate-x-8 translate-y-2 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 md:h-6 md:w-6"
                >
                    <path
                        d="M20 6L9 17L4 12"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <span className="text-[1rem] leading-[1.21] font-medium text-white md:text-[1.25rem]">
                Send Message
            </span>
        </button>
    );
}
