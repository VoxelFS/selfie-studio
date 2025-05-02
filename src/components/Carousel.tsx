"use client";

import React, { ReactNode, useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type CarouselProps = {
    children: ReactNode;
    autoSlide?: boolean;
    autoSlideInterval?: number;
};

export default function Carousel({
    children,
    autoSlide = false,
    autoSlideInterval = 15000,
}: CarouselProps) {
    const items = React.Children.toArray(children);
    const [curr, setCurr] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? items.length - 1 : curr - 1));
    const next = () =>
        setCurr((curr) => (curr === items.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="overflow-hidden relative">
            <div
                className="flex transition-transform ease-out duration-500 "
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {children}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="hover:cursor-pointer">
                    <ArrowBackIosIcon
                        sx={{ color: "white" }}
                        fontSize="large"
                    />
                </button>
                <button onClick={next} className="hover:cursor-pointer">
                    <ArrowForwardIosIcon
                        sx={{ color: "white" }}
                        fontSize="large"
                    />
                </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {items.map((_, i) => (
                        <div
                            key={i}
                            className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
