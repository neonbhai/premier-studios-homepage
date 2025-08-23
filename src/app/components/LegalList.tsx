interface LegalListProps {
    items: (string | React.ReactNode)[];
    spaced?: boolean;
}

export default function LegalList({ items, spaced = false }: LegalListProps) {
    const listClass = spaced 
        ? 'ml-4 list-disc space-y-2 marker:text-white/80' 
        : 'ml-4 list-disc space-y-1 marker:text-white/80';

    return (
        <ul className={listClass}>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}