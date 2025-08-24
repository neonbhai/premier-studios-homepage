export interface OfferService {
    number: string;
    title: string;
    description: string;
    link?: string;
}

export const offerServicesData: OfferService[] = [
    {
        number: '01',
        title: 'Creative Services',
        description:
            'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
        number: '02',
        title: 'Technical Services',
        description:
            'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
        number: '03',
        title: 'Writing Services',
        description:
            'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
];