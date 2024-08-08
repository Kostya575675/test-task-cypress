## Test task by Bublyk Kostianyn

### Description
This simple UI test automation project covers the following checklist`s points of [Text Box](https://demoqa.com/text-box) functionality:
* Check that header displays correct title
* Check that all interactive elements are presents and available
* Check that all labels of input fields are present and have correct text
* Check that all input fields have placeholders
* Check that all submitted data with titles are present and have correct text
* Check validation of email field
* Check that only input data displays after submitting

### Caution
    The following tests are failed expectedly:
* Check that all input fields have placeholders -> Due to absense of one placeholder
* Check that all submitted data with titles are present and correct -> Due to incorrect title that does not fit the label
* Check that only input data displays after submitting -> unstable because of potential issue mentioned above

### Tech Stack
* [NodeJS](https://nodejs.org/)
* [Cypress](https://www.cypress.io/)
* [MochaJS](https://mochajs.org/)

### How to run
Before starting check that NodeJs with NPM manager has already been installed
1. Clone the repo with command:
   ```sh
   git clone <link to current repo>
   ```
2. Install npm packages by running:
   ```sh
   npm install
   ```
3. For execution test on headed mode run:
   ```sh
   npm run cy:run-headed
   ```
4. For execution test on headless mode run:
   ```sh
   npm run cy:run-headless
   ```
5. For getting configs of Cypress run:
   ```sh
   npm run cy:open
   ```

### Project structure:
- [ ] config
    - [x] cypress.config.js
- [ ] cypess
    - [ ] downloads
    - [ ] fixture
    - [ ] support
    - [ ] tests
        - [ ] data
            - [x] text-box.data.js
        - [ ] pages
            - [x] text-box.page.js
        - [ ] specs
            - [x] text-box.spec.js
- [x] package.json
