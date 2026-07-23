/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

"use client";

import { useState, useEffect, useRef } from "react";


import { ChevronLeft, ChevronRight, Star } from "lucide-react";


const testimonials = [
    {
        id: 1,
        name: "Mahmudul Hasan",
        username: "@Ariahkay",
        body: " This was my first order, and I'm really impressed. The product quality is excellent, and it arrived on time. I'll definitely shop here again!",
        img: "https://plus.unsplash.com/premium_vector-1682269287900-d96e9a6c188b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image: "https://plus.unsplash.com/premium_vector-1682269287900-d96e9a6c188b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Client",
        quote: "This was my first order, and I'm really impressed. The product quality is excellent, and it arrived on time. I'll definitely shop here again!",
    },
    {
        id: 2,
        name: "Tanzila Akter",
        username: "@brighteto11",
        body: "Great value for the price. The quality exceeded my expectations, and the delivery was faster than I expected. Very satisfied with my purchase.",
        img: "/img/review/client2.png",
        image: "https://plus.unsplash.com/premium_vector-1682269287900-d96e9a6c188b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Client",
        quote: "Great value for the price. The quality exceeded my expectations, and the delivery was faster than I expected. Very satisfied with my purchase.",
    },
    {
        id: 3,
        name: "Rakibul Islam",
        username: "@hegoode",
        body: "The product looks exactly like the pictures. The packaging was secure, and the customer support team was very helpful. Highly recommended!",
        img: "/img/review/client3.png",
        image: "https://plus.unsplash.com/premium_vector-1682269287900-d96e9a6c188b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Client",
        quote: "The product looks exactly like the pictures. The packaging was secure, and the customer support team was very helpful. Highly recommended!",
    },
    {
        id: 4,
        name: "Sadia Rahman",
        username: "@maxcam91043",
        body: "I was a bit hesitant about shopping online, but this store changed my mind. Everything was perfect, from ordering to delivery. I'll definitely recommend it to my friends.",
        img: "/img/review/client4.png",
        image: "https://plus.unsplash.com/premium_vector-1682269287900-d96e9a6c188b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Client",
        quote: "I was a bit hesitant about shopping online, but this store changed my mind. Everything was perfect, from ordering to delivery. I'll definitely recommend it to my friends.",
    },
    {
        id: 5,
        name: "Md. Imran Hossain",
        username: "@sabero1",
        body: "Excellent service! I received regular order updates, and the product was 100% authentic. I'll definitely be shopping here again.",
        img: "/img/review/client5.png",
        image: "https://plus.unsplash.com/premium_vector-1682269287900-d96e9a6c188b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Client",
        quote: "Excellent service! I received regular order updates, and the product was 100% authentic. I'll definitely be shopping here again.",
    },
];

const CustomerReview = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const intervalRef = useRef(null);

    const startAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        }, 3000);
    };

    useEffect(() => {
        startAutoSlide();

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
        setTimeout(() => setIsAnimating(false), 600);
        startAutoSlide();
    };

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsAnimating(false), 600);
        startAutoSlide();
    };

    const getCardPosition = (index) => {
        const totalItems = testimonials.length;
        let diff = index - currentIndex;
        if (diff > totalItems / 2) {
            diff -= totalItems;
        } else if (diff < -totalItems / 2) {
            diff += totalItems;
        }

        if (diff === 0) return "center";
        if (diff === 1 || diff === -1) return "adjacent";
        return "edge";
    };

    const renderStars = (rating = 5) => {
        return Array.from({ length: 5 }, (_, index) => {
            const isFilled = index < Math.round(rating);
            return (
                <Star
                    key={index}
                    size={14}
                    fill={isFilled ? "currentColor" : "none"}
                    stroke="currentColor"
                    className={isFilled ? "text-amber-400" : "text-slate-300"}
                />
            );
        });
    };

    return (
        <div id="testimonial" className="py-4 px-4 " >
            <div className=" mx-auto">
                <div className="mb-8 flex flex-wrap items-end justify-center gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5E13] text-center">Community love</p>
                        <h2 className="mt-2 text-3xl font-semibold text-slate-900">Trusted by thoughtful shoppers</h2>
                    </div>
                </div>

                <div className="relative">
                    <div className="relative h-[450px] flex items-center justify-center overflow-hidden perspective-1000">
                        <div className="absolute w-full flex justify-center items-center">
                            {testimonials.map((testimonial, index) => {
                                const position = getCardPosition(index);

                                let transform = "";
                                switch (position) {
                                    case "center":
                                        transform = "translateX(0%) scale(1) rotateY(0deg)";
                                        break;
                                    case "adjacent":
                                        const isNextAdjacent = (index - currentIndex + testimonials.length) % testimonials.length === 1;
                                        transform = isNextAdjacent
                                            ? "translateX(100%) scale(0.85) rotateY(-5deg)"
                                            : "translateX(-100%) scale(0.85) rotateY(5deg)";
                                        break;
                                    case "edge":
                                        const isFarRight = (index - currentIndex + testimonials.length) % testimonials.length > testimonials.length / 2;
                                        transform = isFarRight
                                            ? "translateX(-185%) scale(0.7) rotateY(10deg)"
                                            : "translateX(185%) scale(0.7) rotateY(-10deg)";
                                        break;
                                }

                                const cardStyles = {
                                    transform,
                                    transformStyle: "preserve-3d",
                                    zIndex: position === "center" ? 30 : position === "adjacent" ? 20 : 10,
                                    opacity: position === "center" ? 1 : position === "adjacent" ? 0.9 : 0.7,
                                    height: "auto",
                                    width: "100%",
                                    maxWidth: "360px",
                                    transitionProperty: "transform, opacity",
                                    transitionDuration: "600ms",
                                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                };

                                return (
                                    <div
                                        key={testimonial.id}
                                        className="absolute shadow-md"
                                        style={cardStyles}
                                    >
                                        <div
                                            className={`rounded-lg shadow-xl p-6 h-full flex flex-col items-center overflow-hidden transition-colors duration-300 ${position === "center"
                                                ? "bg-white dark:bg-[#00308F]"
                                                : "bg-white dark:bg-gray-800"
                                                }`}
                                        >
                                            {position === "center" && (
                                                <>
                                                </>
                                            )}
                                            <div
                                                className={`absolute -top-14 rounded-full overflow-hidden border-2 border-blue-100 dark:border-gray-900 transition-all duration-300 ${position === "center"
                                                    ? "w-32 h-32"
                                                    : position === "adjacent"
                                                        ? "w-24 h-24"
                                                        : "w-16 h-16 mt-5"
                                                    }`}
                                            >
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                />
                                            </div>

                                            <div
                                                className={`text-orange-300 mb-2 transition-all duration-300 ${position === "center"
                                                    ? "h-8 mt-10"
                                                    : position === "adjacent"
                                                        ? "h-6 mt-5"
                                                        : "h-4 mt-2"
                                                    }`}
                                            >
                                            </div>

                                            <h3
                                                className={`font-bold mb-2 transition-all duration-300 ${position === "center"
                                                    ? "text-xl text-orange-300 dark:text-white"
                                                    : position === "adjacent"
                                                        ? "text-lg text-gray-900 dark:text-gray-100"
                                                        : "text-base text-gray-900 dark:text-gray-100"
                                                    }`}
                                            >
                                                {testimonial.name}
                                            </h3>

                                            <div className="mb-4 flex flex-col items-center">

                                                <div className="mt-1 flex items-center gap-1">
                                                    {renderStars(testimonial.rating ?? 5)}
                                                </div>
                                            </div>

                                            <p
                                                className={`text-center font-[500] overflow-hidden transition-all duration-300 ${position === "center"
                                                    ? "text-base text-gray-500 dark:text-gray-300 leading-relaxed"
                                                    : position === "adjacent"
                                                        ? "text-[12px] text-gray-500 dark:text-gray-400 leading-snug"
                                                        : "text-[10px] text-gray-500 dark:text-gray-400 leading-tight line-clamp-3"
                                                    }`}
                                            >
                                                {position === "center"
                                                    ? testimonial.quote
                                                    : position === "adjacent"
                                                        ? testimonial.quote.length > 120
                                                            ? `${testimonial.quote.substring(0, 120)}...`
                                                            : testimonial.quote
                                                        : testimonial.quote.length > 80
                                                            ? `${testimonial.quote.substring(0, 80)}...`
                                                            : testimonial.quote}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex justify-center  gap-4">
                        <button
                            onClick={handlePrev}
                            className="w-12 h-12 rounded-full text-white flex items-center justify-center bg-[#0F5B64] hover:bg-[#0a4448] border border-sky-100 transition-colors duration-300 disabled:opacity-50 cursor-pointer shadow-sm"
                            aria-label="Previous testimonial"
                            disabled={isAnimating}
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-12 h-12 rounded-full text-white flex items-center justify-center bg-[#0F5B64] hover:bg-[#0a4448] border border-sky-100 transition-colors duration-300 disabled:opacity-50 cursor-pointer shadow-sm"
                            aria-label="Next testimonial"
                            disabled={isAnimating}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;