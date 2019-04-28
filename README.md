## Usage

```
yarn install
yarn start
open http://localhost:3000
```

## Tasks

- Please add pagination support to the list when there are more than 2 entries
- Please add option to select sex of a friend male/female and display it
- Please add tests using your preferred testing tool (jest, mocha, should.js ...)

## Objectives

- You have received a working example so please do not upgrade any packages unless you really have to.
- Please check for small things like syntax errors, since details matter.
- Please deliver something that works, non working project is an automatic disqualification

## Remarks
- Completed all the tasks.
- Added `react-test-renderer` package for snapshot testing of the components.
- As one of the recent versions of `react-test-renderer` was installed by yarn it wasn't working
  unless `react` and `react-dom` was updated. Tried to stick with major version 15. However, snapshot
  testing was not working untill updated to a `react` major version 16 and that's why `react-dom` also
  needed an update.
- No other packages were used.