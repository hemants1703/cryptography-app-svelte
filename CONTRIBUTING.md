# Contributing

We welcome contributions from the community and are happy to have them. Please follow this guide when logging issues or making changes.

## Project Structure

The project is organized as follows:

- `src/routes` contains the main pages of the app
- `src/routes/cipher/[route]` the slug `[route]` represents different pages for the ciphers that are mentioned in the `README.md` file
- each cipher is a component present in the `src/lib/ciphers` route and is brought in the `+page.svelte` file for each `src/routes/cipher/[route]` of the cipher routes and are placed appropriately just as a single component whereas for each sub-route within the `cipher` route, there is a +layout.svelte present that gives the initial layout to the routes after `cipher` that is the cipher alogrithm.

## Reporting Issues

If you find any issues with the app, please feel free to log them in the issues tab. When logging an issue, please provide a detailed description of the problem, including information about your setup. If possible, please provide a screenshot or code snippet to demonstrate the problem. Your help is much appreciated! 🙏

## Contributing Code

If you want to contribute to the codebase, please follow these steps:

1. Fork the repository and clone it to your local machine
2. Create a new branch for your feature or bug fix
3. Make changes in your fork and rebase them if you need to
4. Run `npm install` to install the dependencies
5. Run `npm run dev` to start the development server
6. Once you've made your changes, run `npm run build` to create a production version of your app
7. Commit your changes and push your branch to your fork
8. Open a pull request in the original repository and describe the changes you made
9. Wait for a maintainer to review your PR and merge it
10. Celebrate your success 🎉

## General Guidelines

1. If you have any questions, feel free to ask in the PR
2. If you want to contribute to the documentation, please feel free to do so
3. Please be respectful to other contributors and maintainers
