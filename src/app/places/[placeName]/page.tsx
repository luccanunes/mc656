export const generateStaticParams = async () => {
  // Lista de locais que serão usados para gerar as páginas estáticas
  const allPlaces = [
    { nome: "Parque Ibirapuera", url: "parque-ibirapuera" },
    { nome: "Praia de Copacabana", url: "praia-de-copacabana" },
  ];

  // Retorne um array com os parâmetros dinâmicos
  return allPlaces.map((place) => ({
    placeName: place.url, // Correspondente ao [placeName]
  }));
};

interface PageProps {
  params: {
    placeName: string;
  };
}

const PlaceDetails = ({ params }: PageProps) => {
  const { placeName } = params;

  // Formata o nome do local (opcional)
  const formattedName = placeName.replace(/-/g, " ");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{formattedName}</h1>
      <p>Detalhes do local: {formattedName}</p>
    </div>
  );
};

export default PlaceDetails;
