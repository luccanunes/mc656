import { PlaceDetailsType } from "@/types";

export const Cities = [
    "São Paulo",
    "Rio de Janeiro",
    "Brasília",
    "Salvador",
    "Fortaleza",
    "Belo Horizonte",
    "Manaus",
    "Curitiba",
    "Recife",
    "Porto Alegre",
    "Belém",
    "Goiânia",
    "Guarulhos",
    "Campinas",
    "São Luís",
    "São Gonçalo",
    "Maceió",
    "Duque de Caxias",
    "Natal",
    "Teresina",
    "Campo Grande",
    "São Bernardo do Campo",
    "Nova Iguaçu",
    "João Pessoa",
    "Santo André",
    "Osasco",
    "Ribeirão Preto",
    "Jundiaí",
    "Uberlândia",
    "Sorocaba",
    "Contagem",
    "Aracaju",
    "Cuiabá",
    "Joinville",
    "Aparecida de Goiânia",
    "Londrina",
    "Ananindeua",
    "Niterói",
    "Belford Roxo",
    "Campos dos Goytacazes",
    "Vila Velha",
    "Serra",
    "Caxias do Sul",
    "Mauá",
    "Florianópolis",
    "Macapá",
    "São João de Meriti",
    "Piracicaba",
    "Cariacica",
    "Pelotas",
    "Olinda",
    "Vitória",
];

export const acessibility = [
    {
        title: "Acessibilidade",
        value: "",
    },
    {
        title: "Visual",
        value: "Visual",
    },
    {
        title: "Motora",
        value: "Motora",
    },
];
export const host = {
    name: "Murilo",
    image: "/murilo.jpg",
    role: "Cadeirante",
    experience: "2 anos na plataforma",
};
export const placesData: PlaceDetailsType = {
    "parque-ibirapuera": {
        cidade: "São Paulo",
        items: [
            {
                title: "História do Parque",
                description:
                    "Explore a rica história do Parque Ibirapuera e seus marcos.",

                className: "md:col-span-2",
                backgroundImage: "/ibirapuera2.jpg",
            },
            {
                title: "Arte e Cultura",
                description:
                    "Descubra os museus e eventos culturais no parque.",

                className: "md:col-span-1",
                backgroundImage: "/ibirapuera1.jpg",
            },
            {
                title: "Natureza Exuberante",
                description:
                    "Aprecie as belezas naturais e os jardins do parque.",

                className: "md:col-span-1",
                backgroundImage: "/Parque Ibirapuera.jpg",
            },
            {
                title: "Esportes na Praia",
                description: "Acompanhe o vôlei e outros esportes ao ar livre.",

                className: "md:col-span-2",
                backgroundImage: "/ibirapuera3.jpg",
            },
        ],
    },
    "praia-de-copacabana": {
        cidade: "Rio de Janeiro",
        items: [
            {
                title: "A Praia Mais Famosa",
                description:
                    "Saiba por que Copacabana é conhecida mundialmente.",

                className: "md:col-span-2",
                backgroundImage: "/Parque Ibirapuera.jpg",
            },
            {
                title: "Vida Noturna",
                description: "Explore bares, restaurantes e diversão noturna.",

                className: "md:col-span-1",
                backgroundImage: "/Parque Ibirapuera.jpg",
            },
            {
                title: "Esportes na Praia",
                description: "Acompanhe o vôlei e outros esportes ao ar livre.",

                className: "md:col-span-1",
                backgroundImage: "/Parque Ibirapuera.jpg",
            },
            {
                title: "Esportes na Praia",
                description: "Acompanhe o vôlei e outros esportes ao ar livre.",

                className: "md:col-span-2",
                backgroundImage: "/Parque Ibirapuera.jpg",
            },
        ],
    },
};
export const reviews = [
    {
        quote: "Uma experiência inesquecível! O parque é lindo e cheio de história.",
        name: "Carlos Silva",
        title: "Turista",
    },
    {
        quote: "Perfeito para passeios em família. Há muitas opções culturais e de lazer.",
        name: "Mariana Oliveira",
        title: "Mãe de dois",
    },
    {
        quote: "Ótimo lugar para relaxar e praticar esportes ao ar livre.",
        name: "João Pereira",
        title: "Atleta",
    },
    {
        quote: "A infraestrutura do parque é impecável e a natureza é exuberante.",
        name: "Ana Costa",
        title: "Engenheira Ambiental",
    },
    {
        quote: "O lugar ideal para quem busca tranquilidade no meio da cidade.",
        name: "Rafael Nunes",
        title: "Estudante",
    },
];
export const description = {
    string: "O Parque Ibirapuera é um exemplo de acessibilidade em espaços públicos. Com infraestrutura planejada para atender a todos os visitantes, o parque conta com rampas de acesso, banheiros adaptados e caminhos pavimentados que permitem a circulação de cadeirantes e pessoas com mobilidade reduzida. Além disso, as áreas de lazer, museus e outras instalações possuem entradas acessíveis e suporte adequado para atender às necessidades especiais. O parque também oferece estacionamentos próximos com vagas reservadas e sinalizadas para pessoas com deficiência, garantindo que todos possam aproveitar esse espaço icônico com conforto e segurança. A acessibilidade no Parque Ibirapuera reflete o compromisso em criar um ambiente inclusivo para todos os visitantes, independentemente de suas limitações.",
};
export const features = [
    {
        title: "Espaço de trabalho exclusivo",
        description: "Uma área comum com Wi-Fi adequada para trabalhar.",
        icon: {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            className: "w-6 h-6",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4 6h16M4 10h16M10 14h10M4 18h10",
        },
    },
    {
        title: "Self check-in",
        description: "Faça check-in sozinho com o cofre de chaves.",
        icon: {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            className: "w-6 h-6",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 11c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3zm0 4c-2.672 0-8 1.344-8 4v1h16v-1c0-2.656-5.328-4-8-4z",
        },
    },
    {
        title: "Cancelamento gratuito por 48 horas",
        description: "Receba um reembolso integral se mudar de ideia.",
        icon: {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            className: "w-6 h-6",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 8v4l3 3m-3-9a9 9 0 100 18 9 9 0 100-18z",
        },
    },
    {
        title: "Ambiente pet-friendly",
        description:
            "Traga seu amigo de quatro patas para aproveitar o passeio.",
        icon: {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            className: "w-6 h-6",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4.93 4.93a3 3 0 114.24 4.24 3 3 0 11-4.24-4.24zm10.14 10.14a3 3 0 114.24 4.24 3 3 0 11-4.24-4.24zm-6.36 3.72a4 4 0 118 0 4 4 0 11-8 0zM21 12a3 3 0 11-6 0 3 3 0 116 0zm-12-3a3 3 0 110-6 3 3 0 010 6z",
        },
    },
    {
        title: "Rampa de acessibilidade",
        description: "Acesso garantido para pessoas com mobilidade reduzida.",
        icon: {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            className: "w-6 h-6",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4 12h16M4 12l4-4m0 8l-4-4",
        },
    },
];

export const footerLinks = [
    {
        title: "Sobre",
        links: [
            { title: "Como funciona", url: "/" },
            { title: "Parcerias", url: "/" },
        ],
    },
    {
        title: "Empresa",
        links: [
            { title: "Eventos", url: "/" },
            { title: "Blog", url: "/" },
            { title: "Podcast", url: "/" },
            { title: "Convide um Amigo!", url: "/" },
        ],
    },
    {
        title: "Mídias",
        links: [
            { title: "Discord", url: "/" },
            { title: "Instagram", url: "/" },
            { title: "Twitter", url: "/" },
            { title: "Facebook", url: "/" },
        ],
    },
];
