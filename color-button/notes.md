# Course notes

- Better to use roles than text, as screen readers use roles
- Go to [this page](w3.org/TR/wai-aria/#role_definitions) for the list of role definitions
- Can look online to see a list of all the roles available to you
- If you have multiple elements with the same role, you can use name to find the text on that specific element
- If you can't find an element in the way a screenreader does, then it won't be accessible for a user

- Always you have the option to give a role that does not exist
- This will give an error from RTL, but it will tell you all the roles that are available in your component
- RTL is smart enough to link inputs and labels with the same id/htmlFor together

- Unit test separate functions (used in multiple places or complex logic) if:

  - The logic is complicated so it's hard to use functional tests (e.g. clicking the color button)
  - Could be because there are too many edge cases for the function, so saves you firing up the component multiple times
  - Determines what causes the functional tests to fail
  - Functional tests are high level which makes them resistant to refactoring (so the code can be refactored to change the underlying behaviour, but the tests still pass because the button still turns red)
  - Being high level also means that it is hard to tell exactly what is making the functional tests fail

- eslint can enforce standards on your test files!
- for example, it will make sure that you are using the preferred assertion method
- There are plugins for testing library and jest dom
