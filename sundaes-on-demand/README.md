# Sundaes on demand - RTL Learning Repo

This React App is made for learning about React Testing Library, including using Mock Service Worker

## not wrapped in act() error

- Testing library actually already wraps things in an act statement
- To fix this, work out what is changing asyncronously (i.e. something isn't changing until after the test has finished)
- Then you can await this change and assert on the result, so that the change is given time to happen

## Mock Service worker

- [documentation here](https://mswjs.io/docs/getting-started/mocks/rest-api)
- Used to intercept network calls and return specified responses
- Prevent the network calls from happening during the tests, and set up the test conditions based on the server response
- Test: If the API returns what we've specified, what would we expect the UI to be like
- We have to do some setup of Mock Service Worker:
  - Create handlers
  - Create a test server
  - Make sure the server is listening during all of our tests and resets after each test
