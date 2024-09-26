'use client';

import ImageSlider from "./ui/image-carousel";

export default function HomeMain() {
    const slides = [
        {
            image: 'images/images.jpeg', title: 'Parque Taquaral - Campinas',
            subtitle: "Locomotora, Visual, Auditiva"
        },
        {
            image: 'images/restaurante_coco-bambu-jk_.webp', title: 'Restaurante Coco Bambu',
            subtitle: "Locomotora, Visual"
        },
        {
            image: 'images/passagens-aereas-sao-paulo-capa2019-04-820x430.jpg', title: 'Parque Ibirapuera - São Paulo',
            subtitle: "Locomotora, Visual, Auditiva"
        },
    ];
    return (
        <div>
            {/* <h1>Descubra Lugares de Lazer Inclusivos</h1> */}
            <ImageSlider slides={slides} />
        </div>
    );
}