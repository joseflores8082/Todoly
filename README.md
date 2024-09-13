# Todoly App

![todfo](https://github.com/user-attachments/assets/2d2ca16d-a6ca-4d72-9a2b-804fbae2a81d)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Todo storage

Use local state, context, or local storage to store todo items

### Planning

Plan out your steps and get started. Focus on functionality not styling for now.

### Todo object

{ id: someUniqueIdOnCreation, text: 'finish studying' }

for the id we can use the package uuid. Its already been installed.
You will need to import it and then run it where a UUID is needed.

import { v4 as uuidv4 } from 'uuid'

uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

example:
{id: 1, text: 'finish studying' }

### Styling

Move onto styling and try to replicate the image above

### Testing

Move onto testing out your components

Add in tests for example

- Clicking on add
- Adding to list
- Clicking on delete
- Clicking on edit
- etc.
