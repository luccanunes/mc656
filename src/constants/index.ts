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
    "museu-do-louvre": {
        cidade: "Paris",
        items: [
            {
                title: "Coleções de Arte",
                description: "Explore obras famosas como a Mona Lisa e a Vênus de Milo.",
                className: "md:col-span-2",
                backgroundImage: "https://ogimg.infoglobo.com.br/in/23770337-e3e-a6e/FT1086A/Mona-Lisa-no-Louvre.jpg",
            },
            {
                title: "Exposições Temporárias",
                description: "Descubra exposições exclusivas de artistas renomados.",
                className: "md:col-span-1",
                backgroundImage: "https://mus3ums.com/media/Museum/1336.jpg",
            },
        ],
    },
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
                title: "Esportes",
                description: "Acompanhe esportes ao ar livre.",

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
                backgroundImage: "https://tourb.com.br/img/lugares/rio-de-janeiro/praia-de-copacabana.jpg",
            },
            {
                title: "Vida Noturna",
                description: "Explore bares, restaurantes e diversão noturna.",

                className: "md:col-span-1",
                backgroundImage: "https://cariocaria.com.br/wp-content/uploads/2016/11/cobertura-pestana-rio-atlantica-noite-1170x658.jpg",
            },
            {
                title: "Esportes na Praia",
                description: "Acompanhe o vôlei e outros esportes ao ar livre.",

                className: "md:col-span-1",
                backgroundImage: "https://i0.wp.com/prdnetshoes.wpcomstaging.com/wp-content/uploads/2021/11/esportesnaareia_20211115.png?fit=1256%2C500&ssl=1",
            },
            {
                title: "Comércio",
                description: "Aproveite o comércio na praia!",

                className: "md:col-span-2",
                backgroundImage: "https://images.squarespace-cdn.com/content/v1/517e9335e4b0847823500845/1371227402305-JNJ08NTR37WSEGTKNWVO/quiosque-orla-de-copacabana.jpg?format=1000w",
            },
        ],
    },
    "central-park": {
        cidade: "New York",
        items: [
            {
                title: "Um Ícone de Nova York",
                description: "Explore o Central Park, um dos parques mais famosos do mundo.",
                className: "md:col-span-2",
                backgroundImage: "https://olmsted.org/wp-content/uploads/2023/06/Park-Aerial_20190604_04-1-scaled.jpg",
            },
            {
                title: "Passeios de Barco",
                description: "Navegue nos lagos icônicos do Central Park.",
                className: "md:col-span-1",
                backgroundImage: "https://www.viajenaviagem.com/wp-content/uploads/2013/10/nova-york-central-park-thelake-1920x1080-1.jpg.webp",
            },
        ],
    },
    "sydney-opera-house": {
        cidade: "Sydney",
        items: [
            {
                title: "Arquitetura Icônica",
                description: "Conheça um dos edifícios mais famosos do século XX.",
                className: "md:col-span-2",
                backgroundImage: "https://cdn-imgix.headout.com/tour/20072/TOUR-IMAGE/d85280d5-3c4f-4f54-bd7a-6fc5cc68597f-10732-sydney-sydney-and-bondi-tour-with-sydney-opera-house-tour-01.jpg",
            },
            {
                title: "Espetáculos",
                description: "Assista a óperas, balés e concertos de renome internacional.",
                className: "md:col-span-2",
                backgroundImage: "https://www.digitalavmagazine.com/wp-content/uploads/2013/05/Opera-House-Sydney-3.jpg",
            },
        ],
    },

    "museu-de-arte-de-sao-paulo": {
        cidade: "São Paulo",
        items: [
            {
                title: "Exposição Permanente",
                description: "Admire obras de artistas renomados como Van Gogh e Monet.",
                className: "md:col-span-2",
                backgroundImage: "https://www.vounajanela.com/wp-content/uploads/2020/10/masp-saopaulo-9-1024x584.jpg",
            },
            {
                title: "Atividades Educativas",
                description: "Participe de oficinas e palestras sobre história da arte.",
                className: "md:col-span-1",
                backgroundImage: "https://assets.masp.org.br/images/es3.jpg",
            },
        ],
    },

    "jardim-botanico-do-rio-de-janeiro": {
        cidade: "Rio de Janeiro",
        items: [
            {
                title: "Coleção de Plantas",
                description: "Explore a vasta coleção de plantas tropicais e exóticas.",
                className: "md:col-span-2",
                backgroundImage: "https://freewalkertours.com/wp-content/uploads/Orquid%C3%A1rio_Jardim_Bot%C3%A2nico_2-1030x687.jpg",
            },
            {
                title: "Observação de Aves",
                description: "Descubra espécies de aves em seu habitat natural.",
                className: "md:col-span-1",
                backgroundImage: "https://institucional.ufrrj.br/jardimbotanico/files/2024/10/Imagem-1.jpg",
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
