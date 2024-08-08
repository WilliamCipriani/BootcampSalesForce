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


