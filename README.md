# Workout App

![](public/thumbnail.png)

Workout App is a web application that connects personal trainers with their clients. It allows trainers to create customized workout plans for each client and provides an exercise library for reference. The app is built with Vue3, Vite, and Unocss and uses several Vue plugins, including vite-plugin-pages, unplugin-vue-components, vite-plugin-vue-layouts, vite-plugin-pwa, vite-plugin-inspect, vite-ssg, unplugin-vue-macros, and @vueuse/head.

---

- [Workout App](#workout-app)
  - [Features](#features)
    - [Customized Workout Plans](#customized-workout-plans)
    - [Exercise Library](#exercise-library)
    - [Integration with Vue Plugins](#integration-with-vue-plugins)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
      - [Clone the repository to your local machine](#clone-the-repository-to-your-local-machine)
      - [Navigate to the project directory](#navigate-to-the-project-directory)
      - [Install the dependencies](#install-the-dependencies)
    - [Usage](#usage)
    - [Building](#building)
    - [Deploying](#deploying)
    - [Contributing](#contributing)
  - [License](#license)
  - [Credits](#credits)

## Features

### Customized Workout Plans

With Workout App, personal trainers can create customized workout plans for each of their clients. The app allows trainers to set specific goals, create routines, and track progress for each client.

### Exercise Library

Workout App provides an exercise library that trainers can use for reference when creating workout plans. The library includes a wide variety of exercises, with detailed descriptions and instructional videos.

### Integration with Vue Plugins

Workout App uses several Vue plugins to enhance its functionality and improve the development experience. The app integrates with:

- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)(allows for dynamic route generation)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)(provides automatic component registration)
- [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)(simplifies layout management)
- [vite-plugin-pwa](https://github.com/vite-pwa/vite-plugin-pwa)(adds progressive web app capabilities)
- [vite-plugin-inspect](https://github.com/antfu/vite-plugin-inspect)
- [vite-ssg](https://github.com/antfu/vite-ssg)(allows for static site generation)
- [unplugin-vue-macros](https://github.com/sxzz/unplugin-vue-macros)(which provides a set of useful macros);
- [@vueuse/head](https://github.com/vueuse/head#api)(simplifies managing the document head for better SEO).

## Getting Started

### Prerequisites

Before you can run Workout App, you'll need to have the following installed on your computer:

> Node.js
> npm

### Installation

To install Workout App, follow these steps:

#### Clone the repository to your local machine

```bash
git clone <https://github.com/your-username/workout-app.git>
```

#### Navigate to the project directory

```bash
cd workout-app
```

#### Install the dependencies

```bash
npm install
```

### Usage

To run the development server, use the following command:

```bash
npm run dev
```

This will start the development server and open the app in your default web browser at <http://localhost:3000>.

### Building

To build the app for production, use the following command:

```bash
npm run build
```

This will build the app in the dist directory.

### Deploying

To deploy the app to a web server, copy the contents of the dist directory to your server.

### Contributing

If you'd like to contribute to Workout App, please follow these steps:

- Fork the repository.

- Create a new branch:

   ```bash
   git checkout -b my-feature-branch
   ```

- Make your changes and commit them:

   ```bash
   git commit -am "Add some feature"
   ```

- Push your changes to your fork:

   ```bash
   git push origin my-feature-branch
   ```

- Create a pull request.

## License

Workout App is licensed under the [MIT License](LICENSE).

## Credits

Workout App was created by [Douglas Ochner](https://github.com/dochner).
