<h1 align="center">♨️ React Monorepo Boilerplate</h1>

<div align="center">
  <p>
    A React boilerplate with opinionated setup to help you quickly kickstart your monorepo project.
  </p>
  <img src="https://img.shields.io/github/license/boilertowns/react-monorepo-boilerplate?style=flat-square" alt="MIT license" >
</div>

## Introduction

**react-monorepo-boilerplate** is the first production-ready boilerplate from [Boilertowns][boilertowns-url] creations.

The goal of this boilerplate is to maximize your effectiveness by present you:

- 🚀 A good application structure which is simple, scalable and easy to maintain.
- 🔥 Give you best and hot tools in the ecosystem to manage the workflows.
- ⚡️ Easy to customize your workflows. You will have all the granular control over all the operations.
- 🧑‍💻 Improve your Developer eXperience (DX). You can just focus on coding and press Save button.

This setup is _opinionated_ as it is based on my experience of working with difference React projects. It works very well to me and my team and I hope I can make you feel the same.

## The Setup

- [React v18][react-url]
- [React Router v6][react-router-url]
- [TypeScript][typescript-url]
- UI development with [Storybook][storybook-url]
- Unit test with [Testing-library][testing-library-url]
- Linting with [Eslint][eslint-url] and code formatting with [Prettier][prettier-url]
- Conventional commit messages with [Commitlint][commitlint-url]
- Monorepo codebase management with [Turborepo][turbo-url]
- Automated release with [changesets][changesets-url]

## Get Started

- Use [Boilertowns](https://github.com/boilertowns/create-boilertowns) CLI.

  ```sh
  # npm
  npm create boilertowns@latest -- -b react-monorepo-boilerplate

  # yarn
  yarn create boilertowns -b react-monorepo-boilerplate

  # pnpm
  pnpm create boilertowns -b react-monorepo-boilerplate

  # bun
  bun create boilertowns/react-monorepo-boilerplate [project-name]
  ```

- Click the green "Use this template" button to generate a new repository with the same structure and files.

  <img src="https://docs.github.com/assets/cb-36544/images/help/repository/use-this-template-button.png" alt="Use this template button" width="500">

  [Ref: Github Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)

## Development

- Bootstrap project and get the repo ready to be developed on:

  ```sh
  # Run build commands from all workspaces.
  pnpm build

  # or build internal packages from `packages/*` workspace only.
  pnpm build:packages
  ```

- Run the `apps/*` in development environment:

  ```sh
  pnpm dev
  ```

- Run all test commands from all workspaces:

  ```sh
  pnpm test
  ```

## Contributing

**react-monorepo-boilerplate** ❤️ your contributions. If you have any ideas, suggestions, fixes, feel free to contribute.

[boilertowns-url]: https://github.com/boilertowns
[react-url]: https://beta.reactjs.org
[react-router-url]: https://reactrouter.com
[typescript-url]: https://www.typescriptlang.org
[babel-url]: https://babeljs.io
[webpack-url]: https://webpack.js.org
[storybook-url]: https://storybook.js.org
[eslint-url]: https://eslint.org
[commitlint-url]: https://github.com/conventional-changelog/commitlint
[prettier-url]: https://prettier.io
[testing-library-url]: https://testing-library.com
[turbo-url]: https://turborepo.org/
[changesets-url]: https://github.com/changesets/changesets
