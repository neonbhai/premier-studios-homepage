interface LegalSectionProps {
    title?: string;
    number?: number;
    children: React.ReactNode;
}

export default function LegalSection({
    title,
    number,
    children,
}: LegalSectionProps) {
    const displayTitle = number ? `${number}. ${title}` : title;

    return (
        <section className="space-y-6">
            {displayTitle && (
                <h2 className="font-sans text-lg leading-6 font-medium text-[#029BE6] md:text-2xl lg:text-3xl">
                    {displayTitle}
                </h2>
            )}
            <div className="space-y-4 font-sans text-sm leading-relaxed text-white/80 md:text-base lg:text-lg">
                {children}
            </div>
        </section>
    );
}
