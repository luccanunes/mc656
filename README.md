Tema: Democratização do acesso a locais de lazer para P.C.D's.

Projeto: Aplicação web com o objetivo de avaliar e recomendar locais de lazer acessíveis para pessoas com deficiência, com uma comunidade que retroalimenta as informações.

Integrantes:
- 230554, Lucca Miranda Nunes
- 230888, Matheus Farias Barbosa
- 230977, Pablo Henrique Almeida Mendes
- 184031, Yvens Ian Prado Porto

Repositório: https://github.com/luccanunes/mc656

## Arquitetura (Avaliação A4)

### Diagrama em Nível de Componentes (C4 - Nível 3)
![image](https://github.com/user-attachments/assets/de940e62-1e34-4a24-8a45-86aa2ad97ff1)


### Estilo(s) Arquitetural(is) Adotado(s)
- *MVC (Model-View-Controller):* Separação das responsabilidades em Model, View e Controller.
- *Microsserviços:* Cada componente é um serviço independente, facilitando a escalabilidade e manutenção.

### Descrição dos Principais Componentes
- *Aplicação Web:* Responsável pela interface do usuário, captura de entradas e exibição de saídas.
- *Servidor de Aplicação:* Contém a lógica de negócios, processamento de dados e comunicação com o banco de dados.
- *Banco de Dados:* Armazena os dados de forma persistente.
- *Gateway de API:* Gerencia a comunicação entre o frontend e o backend, servindo como ponto de entrada único para as requisições.
- *Serviço de Autenticação:* Gerencia a autenticação e autorização dos usuários.
- *Serviço de Notificações:* Envia notificações para os usuários sobre atualizações e recomendações.

### Padrão de Projeto Adotado
- *Singleton:* Implementado no componente X para garantir que apenas uma instância da classe seja criada e fornecer um ponto de acesso global a essa instância.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
