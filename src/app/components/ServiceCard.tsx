import { OfferService } from '../data/offerServicesData';
import ExternalArrowIcon from './commons/ExternalArrowIcon';

interface ServiceCardProps {
    service: OfferService;
}

export default function ServiceCard({ service }: ServiceCardProps) {
    return (
        <div className="flex w-full flex-col gap-[0.625rem] rounded-[1.875rem] border-2 border-white/52 p-[1.875rem_2.5rem] xl:w-auto">
            <div className="flex flex-col items-end gap-[2.5rem]">
                <div className="flex flex-col gap-[2.5rem] self-stretch">
                    <div className="flex flex-col items-start gap-[2.5rem]">
                        {/* Number Badge */}
                        <div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center gap-[0.625rem] rounded-full bg-[#029BE6] p-[1.25rem]">
                            <span className="text-[1rem] leading-[1.21] font-medium text-white">
                                {service.number}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="flex flex-1 flex-col gap-[1.875rem] self-stretch">
                            <h3 className="self-stretch text-[1.5rem] leading-[1em] font-medium text-white">
                                {service.title.split(' ')[0]}{' '}
                                <span className="text-[#029BE6]">
                                    {service.title.split(' ')[1]}
                                </span>
                            </h3>
                            <p className="self-stretch text-[1rem] leading-[1.4] font-normal text-white/52">
                                {service.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Arrow Button */}
                <div className="flex cursor-pointer items-center justify-center gap-[0.625rem] rounded-[0.375rem] border border-white p-[0.625rem] transition-colors hover:bg-white/10">
                    <ExternalArrowIcon />
                </div>
            </div>
        </div>
    );
}