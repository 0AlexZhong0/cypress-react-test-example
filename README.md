# Unit testing React code

A little React [Greeting.jsx](Greeting.jsx) component is tested (inside Cypress test runner) using:

- [cypress/integration/enzyme-spec.js](cypress/integration/enzyme-spec.js) using [Enzyme](https://airbnb.io/enzyme/)
  * import `enzyme` from `node_modules`.
  * extend chai assertions with [`chai-enzyme`](https://github.com/producthunt/chai-enzyme).
- [cypress/integration/react-testing-library-spec.js](cypress/integration/react-testing-library-spec.js) using [react-testing-library](https://github.com/kentcdodds/react-testing-library)
- [cypress/component/cypress-react-unit-test-spec.js](cypress/component/cypress-react-unit-test-spec.js) using [cypress-react-unit-test](https://github.com/bahmutov/cypress-react-unit-test)


The screenshot below shows how [cypress-react-unit-test](https://github.com/bahmutov/cypress-react-unit-test) mounts a React component as "mini" web application.

![Testing React component using cypress-react-unit-test](images/button-click.png)

Name | Description
--- | ---
[cypress-react-unit-test-spec.js](cypress/component/cypress-react-unit-test-spec.js) | Simple button click
[counter-spec.js](cypress/component/counter-spec.js) | Testing a counter component that uses React hook

## Quick Start

After you have installed all the dependencies by running `npm i`. There are 2 options to run the cypress tests.

1. `npm run cypress:run` will run the tests headlessly in the command console.
2. `npm run cypress:open` will open a cypress window where you can either execute individual tests or you can choose to run all tests. (Note: the "run all tests" option only execute the tests in the `cypress/integration` folder, whereas by doing `npm run cypress:run`, it executes all test files in the current directory)
