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
            {displayTitle && <h2 className="text-[#029BE6] font-sans text-lg font-medium leading-6 md:text-2xl lg:text-3xl">{displayTitle}</h2>}
            <div className="font-sans space-y-4 text-sm leading-relaxed text-white/80 md:text-base lg:text-lg">{children}</div>
        </section>
    );
}