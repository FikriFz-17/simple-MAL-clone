# Simple Mal

MAL ( My Anime List ) simple clone using jikan API

## Features
- **Routing Implementation** for navigating between pages.
- **React Hooks** usage for state management and side effects.
- **Fetching data from Jikan API** to display anime information.

## Technologies Used
- **React**: The main framework for building the UI.
- **React Router**: For managing page navigation.
- **Fetch API**: To fetch data from the Jikan API.
- **CSS**: For styling.

## Installation & Running the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/username/simple-mal.git
   cd simple-mal
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the project:
   ```sh
   yarn dev
   ```

## API
This application uses [Jikan API](https://jikan.moe/) to retrieve anime data. Example endpoints used:
- **Popular Anime List**: `https://api.jikan.moe/v4/top/anime`
- **Anime Details**: `https://api.jikan.moe/v4/anime/{id}`
- **Search Anime** : `https://api.jikan.moe/v4/anime?q=${query}`

## Demo
visit this link 👉 : https://simple-mal.vercel.app/


