# README - Next.js Project with Prisma and SQLite

This is a generic README that provides basic instructions for running a project developed with Next.js, Prisma, and SQLite. Below are the steps required to set up the development environment and run the application.

### Prerequisites
Make sure you have the following tools installed before starting:

- Node.js: Download and install Node.js
- npm package manager (automatically installed with Node.js)
- Prisma CLI: Run npm install -g prisma to globally install the Prisma Command Line Interface (CLI).

### Project Setup

- Clone or download this repository to your local machine.
- Open a terminal and navigate to the project's root folder.
- Installing Dependencies
- Run the following command to install project dependencies:

```bash
npm install
```

### Database Configuration

In the project's root folder, open the prisma/schema.prisma file.

Replace the datasource block with the following code to configure SQLite:

```prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
```

This will create an SQLite database named dev.db in the project's root folder.

### Database Migrations
Run the following command to apply database migrations:

```bash
npx prisma migrate dev --name init
```

This will create the necessary tables and initial structure in the SQLite database.

### Running the Project

Once you have completed all the previous steps, run the following command to start the development server:

```bash
npm run dev
```

The application will be available at http://localhost:3000. You can open this URL in your browser to see the application in action.

### Other Useful Commands

- npm run build: Builds the application for production.
- npm start: Starts the application in production mode.
- npm run prisma:studio: Opens Prisma Studio, a graphical interface for managing the database.

### Contribution

If you would like to contribute to this project, feel free to send pull requests or report issues in the repository's issue section.

Enjoy developing your Next.js project with Prisma and SQLite! If you have any additional questions, feel free to ask.