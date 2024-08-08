import { textBoxPage } from '../pages/text-box.page';

export const textBoxTestData = {
    pageTitle: 'Text Box',
    listOfAllInteractiveElements: [
        {
          isInputField: true,
          locator: textBoxPage.userNameInputSelector,
          placeholderAttr: 'Full Name',
        },
        {
          isInputField: true,
          locator: textBoxPage.userEmailInputSelector,
          placeholderAttr: 'name@example.com',
        },
        {
          isInputField: true,
          locator: textBoxPage.currentAddressInputSelector,
          placeholderAttr: 'Current Address',
        },
        {
          isInputField: true,
          locator: textBoxPage.permanentAddressInputSelector,
          placeholderAttr: 'Permanent Address',
        },
        {
          isInputField: false,
          locator: textBoxPage.submitButtonSelector,
          placeholderAttr: null,
        },
      ],
      listOfLabels: ['Full Name', 'Email', 'Current Address', 'Permanent Address'],
      listOfInputData: ['Any name', 'bla@bla.com', 'Some address', 'Another address'],
      incorrectEmail: 'bla@bla',
}

