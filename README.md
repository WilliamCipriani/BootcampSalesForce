This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# BootcampSalesForce


# Proyecto de Lista de Usuarios

Este proyecto consiste en una aplicación web que muestra una lista de usuarios generados aleatoriamente utilizando la API de RandomUser. La aplicación está construida con Next.js para el backend y frontend, y Tailwind CSS para los estilos.

## Tecnologías Utilizadas

- **Framework Web**: [Next.js](https://nextjs.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **API de Usuarios**: [RandomUser](https://randomuser.me/)

## Estructura del Proyecto

- `pages/api/generateUser.js`: Endpoin de API que obtiene 10 usuarios de RandomUser y los formatea para su uso en la aplicación.
- `pages/index.js`: Interfaz principal de la aplicación que muestra los usuarios en un formato de tarjetas.
- `styles/globals.css`: Archivo de estilos globales, configurado para importar Tailwind CSS.

## Instrucciones de Uso

1. Clona este repositorio.
2. Instala las dependencias con `npm install`.
3. Ejecuta el servidor de desarrollo con `npm run dev`.
4. Accede a `http://localhost:3000` para ver la aplicación en acción.

## Contribución Personal

Toda la lógica de la API, la estructura de componentes de React, y los estilos personalizados fueron implementados por mí. La configuración inicial del proyecto y las dependencias como Next.js y Tailwind CSS son parte del framework utilizado.
