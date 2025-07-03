/* eslint-disable no-unused-vars */
// src/components/TestimonialsSlider.jsx
import React, { useRef } from 'react'
import Slider from 'react-slick'
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react'
import testimonialImg from "../../assets/num/img1.png"
import testimonialImg2 from "../../assets/num/img2.png"

const testimonials = [
    {
        id: 1,
        image: testimonialImg,
        quote:
            "Working with the team was seamless. They understood our brand vision from day one and translated it into an activation that exceeded our expectations. Their professionalism and attention to detail truly stood out.",
    },
    {
        id: 2,
        image: testimonialImg2,
        quote:
            "The creative process was collaborative and inspiring. Every detail was carefully considered, and the final result surpassed what we had imagined. Truly exceptional work.",
    },
    {
        id: 3,
        image: testimonialImg,
        quote:
            "From concept to execution, the team delivered beyond our expectations. Their innovative approach and dedication to quality made all the difference in our project's success.",
    },
]

const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
}

export default function Testimonial() {
    const sliderRef = useRef(null)

    const nextSlide = () => {
        if (sliderRef.current) sliderRef.current.slickNext()
    }

    const prevSlide = () => {
        if (sliderRef.current) sliderRef.current.slickPrev()
    }

    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-[150px] 4xl:px-[200px]">
            <div className="lg:max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left */}
                    <div className="space-y-8">
                        <span className="inline-block text-sm font-medium text-[#25295C] bg-white border-[#25295C] px-4 py-2 rounded-full border">
                            TESTIMONIALS
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#25295C] leading-tight">
                            Client <span className="text-orange-500">Experiences</span> That Speak for Themselves
                        </h2>
                    </div>

                    {/* Slider */}
                    <div className="relative">
                        <Slider
                            ref={sliderRef}
                            {...sliderSettings}
                            className="slick-slider overflow-hidden rounded-2xl"
                            style={{ height: 500 }}
                        >
                            {testimonials.map((t) => (
                                <div key={t.id} className="relative h-full">
                                    <img
                                        src={t.image}
                                        alt="Testimonial"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent p-8">
                                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 max-w-md flex flex-col min-h-[120px]">
                                            <p className="text-gray-800 text-sm leading-relaxed flex-1 mb-4">
                                                {t.quote}
                                            </p>
                                            <div className="flex justify-end gap-2 mt-auto">
                                                <button
                                                    onClick={prevSlide}
                                                    className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                                                    aria-label="Previous"
                                                >
                                                    <ArrowDownLeft className="w-4 h-4 text-gray-600" />
                                                </button>
                                                <button
                                                    onClick={nextSlide}
                                                    className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                                                    aria-label="Next"
                                                >
                                                    <ArrowUpRight className="w-4 h-4 text-gray-600" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
