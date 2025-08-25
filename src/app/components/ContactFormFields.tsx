'use client';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface ContactFormFieldsProps {
    formData: FormData;
    focusedField: string | null;
    onInputChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onFocusChange: (field: string | null) => void;
}

export default function ContactFormFields({
    formData,
    focusedField,
    onInputChange,
    onFocusChange,
}: ContactFormFieldsProps) {
    return (
        <div className="flex w-full flex-col gap-[2rem] md:gap-[4rem]">
            <div className="flex flex-col gap-[0.5rem]">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={onInputChange}
                    onFocus={() => onFocusChange('name')}
                    onBlur={() => onFocusChange(null)}
                    placeholder="Enter your name"
                    className="border-none bg-transparent text-[1rem] leading-[1.5] font-medium text-black/52 outline-none placeholder:text-black/52 md:text-[1.25rem]"
                />
                <div
                    className={`h-[1.5px] w-full transition-colors ${focusedField === 'name' || formData.name ? 'bg-[#029BE6]' : 'bg-black/52'}`}
                ></div>
            </div>

            <div className="flex flex-col gap-[0.5rem]">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onInputChange}
                    onFocus={() => onFocusChange('email')}
                    onBlur={() => onFocusChange(null)}
                    placeholder="Enter your email"
                    className="border-none bg-transparent text-[1rem] leading-[1.21] font-medium text-black/52 outline-none placeholder:text-black/52 md:text-[1.25rem]"
                />
                <div
                    className={`h-[1.5px] w-full transition-colors ${focusedField === 'email' || formData.email ? 'bg-[#029BE6]' : 'bg-black/52'}`}
                ></div>
            </div>

            <div className="flex flex-col gap-[0.5rem]">
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={onInputChange}
                    onFocus={() => onFocusChange('message')}
                    onBlur={() => onFocusChange(null)}
                    placeholder="Enter your message"
                    rows={1}
                    className="resize-none border-none bg-transparent text-[1rem] leading-[1.21] font-medium text-black/52 outline-none placeholder:text-black/52 md:text-[1.25rem]"
                />
                <div
                    className={`h-[1.5px] w-full transition-colors ${focusedField === 'message' || formData.message ? 'bg-[#029BE6]' : 'bg-black/52'}`}
                ></div>
            </div>
        </div>
    );
}
