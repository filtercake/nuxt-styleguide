# Getting Started

If you want to start from scratch we've got you covered with [an Example Styleguide](https://github.com/sumcumo/nuxt-styleguide-example)

## Install nuxt-styleguide

`npm install @sum.cumo/nuxt-styleguide --save-dev`

## Add as nuxt module

In your projects [`nuxt.config.js`](https://nuxtjs.org/guide/configuration)
add `'@sum.cumo/nuxt-styleguide'` to the `modules` array.

```js
// nuxt.config.js
module.exports = {
  // other options ...
  modules: [
    '@sum.cumo/nuxt-styleguide',
    // other modules ...
  ],
};
```

## Start developing

Depending on your [setup](#create-a-nuxt-project), `npm start`, `npm run dev` or
`$(npm bin)/nuxt` will start a development environment.

Now [`http://localhost:3000`](http://localhost:3000)

You can now add components by following the [guide on how to work with components](~/docs/working-with-components).

## Embedded Styleguide

The entry route of the styleguide is customizable using the `path` config option.

You also might not intent to deploy the styleguide to production, in which case
it's recommended to conditionally only use the module under specific circumstances.

```js
// nuxt.config.js

const modules = [
  // other modules ...
];

/* only use the module in non-production environment */
if (process.env.NODE_ENV !== 'production') {
  modules.push([
    '@sum.cumo/nuxt-styleguide',
    {
      /* change the entry route of nuxt-styleguide */
      path: '/styleguide',
      /* make import paths of components relative to project root */
      importFrom: 'local',
      // other config ...
    },
  ]);
}
module.exports = {
  // other options ...
  modules,
};
```
