**Open Source Starter**

A starter template for a TypeScript, React & Tailwind package.

Extended from https://www.totaltypescript.com/how-to-create-an-npm-package by @mattpocock.

## Make it your own and publish to npm

Copy this template, rename the package and start building your own React & Tailwind package.

1.Make a new branch

1. Add your changes
1. Run `npx changeset` to create a changeset.
1. Push your changes
1. Merge your changes to `main` - this will create a new Version Packages PR.
1. Review the Version Packages PR and merge it - this will publish your package to npm.

### Installation

Install the package with pnpm/npm/yarn.

```bash
npm i my-new-package
```

Add it to your Tailwind config.

```js
// tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    // Add this line
    './node_modules/my-new-package/**/*.{js,jsx,ts,tsx}',
  ],
  // ... rest of config
};
```

### Usage

Quick start

```tsx
import { MyComponent } from 'my-new-package';

function MyApp() {
  return <MyComponent />;
}
```
