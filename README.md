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

Este proyecto es parte del reto Bootcamp 2, consiste en una aplicación web que muestra una lista de usuarios generados aleatoriamente utilizando la API de RandomUser. La aplicación está construida con Next.js para el backend y frontend, y Tailwind CSS para los estilos.

## Tecnologías Utilizadas

- **Next.js**: Framework de React para aplicaciones web con renderizado del lado del servidor (SSR) y generación estática de sitios (SSG). [Documentación de Next.js](https://nextjs.org/docs).
- **Tailwind CSS**: Un framework CSS de utilidad para crear interfaces de usuario modernas y responsivas. [Documentación de Tailwind CSS](https://tailwindcss.com/docs).
- **React Icons**: Biblioteca para incluir iconos en aplicaciones React. [Documentación de React Icons](https://react-icons.github.io/react-icons/).

## Estructura del Proyecto

- `pages/api/generateUser.js`: Endpoint de API que obtiene 10 usuarios de RandomUser y los formatea para su uso en la aplicación.
- `pages/index.js`: Interfaz principal de la aplicación que muestra los usuarios en un formato de tarjetas.
- `styles/globals.css`: Archivo de estilos globales, configurado para importar Tailwind CSS.

## Instrucciones para Ejecutar el Proyecto

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias necesarias ejecutando `npm install`.
3. Inicia el servidor de desarrollo con `npm run dev`.
4. Abre `http://localhost:3000` en tu navegador para ver la aplicación en funcionamiento.

## Contribución Personal

En este proyecto, implementé la lógica de la API, la interfaz de usuario y la funcionalidad de búsqueda. También me aseguré de integrar y configurar Tailwind CSS para el diseño visual y `react-icons` para los iconos de la aplicación. La estructura base del proyecto, incluyendo Next.js, es proporcionada por el framework, pero toda la lógica específica de la aplicación fue desarrollada por mí.

## Experiencia con las Tecnologías

- **Next.js**: Tengo experiencia en el desarrollo de aplicaciones con Next.js, aprovechando su capacidad para SSR y SSG, lo que me ha permitido crear aplicaciones rápidas y optimizadas para SEO.
- **Tailwind CSS**: Utilizo Tailwind CSS regularmente para crear diseños personalizados sin la necesidad de escribir CSS desde cero. Este enfoque me permite desarrollar interfaces rápidamente y con una alta consistencia visual.
- **React Icons**: La integración de iconos en aplicaciones React ha sido parte de mis proyectos, y `react-icons` ofrece una solución sencilla y efectiva para manejar iconos SVG.

## Enlaces a Documentación

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Icons Documentation](https://react-icons.github.io/react-icons/)
- [RandomUser API Documentation](https://randomuser.me/documentation)


