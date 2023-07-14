# User CRUD Application

This is a simple user CRUD (Create, Read, Update, Delete) application built with React. It allows you to add, view, update, and delete user data.

## Features

- Add a new user with a name.
- View a list of users.
- Update the name of an existing user.
- Delete a user from the list.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Context: Used for state management and providing data to components.
- React Hooks: Used the `useReducer` hook for managing state and actions.
- Vite: A fast and minimalistic build tool for modern web development.

## Folder Structure

The project has the following folder structure:

```
- src
  - components
    - UserForm.js
    - UserList.js
    - UserItem.js
  - context
    - UserContext.js
    - UserReducer.js
  - App.js
  - index.js
  - index.css
```

- `components`: Contains the individual components for the user form, user list, and user item.
- `context`: Contains the user context and user reducer for managing state and actions.
- `App.js`: The main component that renders the user form and user list components.
- `index.js`: The entry point of the application.
- `index.css`: Contains the CSS styles for the application.

## Usage

1. Clone the repository: `git clone https://github.com/vipulchandan/ReactUserCRUD.git`
2. Navigate to the project directory: `cd ReactUserCRUD`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm run dev` or `yarn dev`
5. Open your browser and visit `http://localhost:3000` to see the application.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
