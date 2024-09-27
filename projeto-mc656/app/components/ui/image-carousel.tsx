import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

interface ImageSliderProps {
    slides: { image: string; title: string, subtitle: string }[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
    return (
        <Swiper modules={[Navigation, Pagination]} spaceBetween={50} slidesPerView={1} loop={true} pagination={{ clickable: true }} navigation>
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="slide-content" style={{
                        display: "flex", flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <img src={slide.image} alt={`Slide ${index}`} style={
                            {
                                width: "900px", /* Ajuste a largura conforme necessário */
                                height: "auto", /* Mantém a proporção da imagem */
                                margin: "0 auto",
                                marginBottom: "5px"
                            }
                        } />
                        <div className="slide-text" style={{

                            width: "47%"
                        }}>
                            <h4 className="slide-title">{slide.title}</h4>
                            <p className="slide-subtitle"> <b>Acessibilidade:</b> {slide.subtitle}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ImageSlider;