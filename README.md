# NextJS Server Auth Starter

Welcome to the NextJS Server Auth Starter template! 🚀

This starter template is crafted to provide you with a solid foundation for building web applications with the latest and greatest technologies. It seamlessly integrates Next.js for a powerful React framework, Server Actions for server-side logic, AuthJS for authentication, Auth0 for secure authentication flows, Prisma for database access, Zod for schema validation, and React Hook Form for easy and efficient form handling.

## Features

-   **Next.js App Router:** A React framework for building fast and scalable web applications.
-   **Auth0:** A robust authentication setup for secure user authentication and authorization.
-   **Prisma:** A modern database toolkit for TypeScript and Node.js, simplifying database access and management.
-   **Zod:** A TypeScript-first schema declaration and validation library for runtime safety.
-   **React Hook Form:** An efficient library for managing forms in React applications.
-   **Mantine UI Library:** Accessible fully featured React component library
-   **PDF-LIB:** Create and modify PDF documents

## Getting Started

To get started with this template, follow these simple steps:

1. Clone the repository: `git clone https://github.com/janrembold/next-fullstack.git`
2. Install dependencies: `npm install` or `yarn install` or `pnpm install`
3. Configure environment variables by copying `.env.example` to `.env.local` and updating the values.
4. Initially create and migrate database schema `npm run prisma.migrate`, `yarn prisma.migrate` or `pnpm prisma.migrate`
5. Start the development server: `npm run dev` or `yarn dev` or `pnpm dev`
6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

The project structure is organized for scalability and maintainability. Key folders include:

-   `prisma`: Database schema and migrations.
-   `src/actions`: Next.js server actions
-   `src/app`: Next.js app and API routes.
-   `src/components`: React UI components
-   `src/containers`: Logical components that handle data fetching/mutation logic
-   `src/hooks`: Custom hooks
-   `src/layouts`: UI layout components

Feel free to explore and customize the structure according to your project needs.

## TODOs

-   Full i18n integration (next-intl OR simple i18n translation without routing...) - currently next-intl is not stable with next-auth v5

## Contributing

I welcome contributions! If you have suggestions, bug reports, or would like to add new features, please create an issue or submit a pull request.

Happy coding! 🚀
