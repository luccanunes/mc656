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
            <h1 style={{ fontSize: "60px", textAlign: 'center', marginBottom: "-30px" }}>Descubra Lugares de Lazer</h1>
            <h1 style={{ fontSize: "60px", textAlign: 'center', color: '#18ACFE' }}>Inclusivos</h1>
            <ImageSlider slides={slides} />
        </div>
    );
}