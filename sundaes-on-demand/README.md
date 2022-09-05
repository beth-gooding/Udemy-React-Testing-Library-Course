# Sundaes on demand - RTL Learning Repo

## not wrapped in act() error

- Testing library actually already wraps things in an act statement
- To fix this, work out what is changing asyncronously (i.e. something isn't changing until after the test has finished)
- Then you can await this change and assert on the result, so that the change is given time to happen
