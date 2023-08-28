import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren, useEffect, useState } from "react";
import Dots from "./Dots";
import React from "react";
import CarouselControls from "./CarouselControls";

type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const length = React.Children.count(children);
    const canScrollNext = !!emblaApi?.canScrollNext();
    const canScrollPrev = !!emblaApi?.canScrollPrev();

    useEffect(() => {
        function selectHandler() {
            const index = emblaApi?.selectedScrollSnap();
            setSelectedIndex(index || 0);
        }

        emblaApi?.on("select", selectHandler);
        // cleanup
        return () => {
            emblaApi?.off("select", selectHandler);
        };
    }, [emblaApi]);
    return (
        <>
            <div className=" overflow-hidden pb-2" ref={emblaRef}>
                <div className="flex flex-none">{children}</div>
            </div>
            <Dots itemsLength={length} selectedIndex={selectedIndex} />
            <CarouselControls
                canScrollNext={canScrollNext}
                canScrollPrev={canScrollPrev}
                onNext={() => emblaApi?.scrollNext}
                onPrev={() => emblaApi?.scrollPrev}
            />
        </>
    );
};
export default Carousel;
