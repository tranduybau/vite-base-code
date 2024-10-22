# Coding Style

The code will follow the coding style of Eslint, including some rules:

## 1. Import Order:

Follow rules from [eslint-plugin-simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort) and the config is from [This Article](https://dev.to/julioxavierr/sorting-your-imports-with-eslint-3ped)..

## 2. Storing and API Calling:

  1. Use Axios with React Query. For example: `useQuery("pokemon", getPokemonList)`. The config is from [Tanstack Query](https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates?from=reactQueryV5).

  2. Use consistent structure for API calls. Example: Define `getPokemonList` for fetching data.

## 3. Component's Styling:

We will use SCSS Modules to style our components. The reason is that we can use the same class name in different components without worrying about the conflict.

  1. Use the SCSS module.

  2. Global is only allowed to be used in the following cases:

    a. Custom class of NPM Package.

    b. Custom class of other modules.

  3. Naming rules:

    a. Name the class using Pascal case (`styles.MyClass`)

    b. Use CSS Modules exclusively. Do not use global CSS for self-written code. Global CSS should only be used when referencing a class from another module outside of the component, or when using a class generated by a package.

    c. The style file should be named [component-name].module.scss.

## 4. Function utils naming:

For normal function, we will use this structure, that will allow us not to modify the function on other files when we need to add more parameters.

   ```js
   function action(props) {
    const { values, options } = props;
   	const { x, y } = values;
   	const { isShowWarning, isXXX } = options;
   	...
   	return { value }
   }
   ```

## 5. Commenting:

We use a consistent commenting style throughout our codebase. There are three prefixes that we use for comments:

* TODO: Use this prefix when there is something that needs to be done in the code, but you haven't had a chance to tackle it yet.
* FIXME: Use this prefix when there is a bug or error in the code that needs to be fixed.
* EX: Use this prefix when you want to provide an example or additional context in your code comments.
