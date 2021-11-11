# Features

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## “Search people” box
● A search input that allows you to retrieve people from SWAPI (see below).
● Results are displayed in a list, each item can be saved or its details can be
shown into the “information about” box.
● A saved item doesn’t appear in results anymore
![image](https://user-images.githubusercontent.com/81588630/141351684-82afd400-37c0-4bbf-87fb-30d31fec8417.png)


## “Information about...” box
●  Display the picture and all the simple information about the selected person.

## “Saved people” box
● This is the list of saved people.
● People can be removed from the list (and has to be displayed back into the
“search people” box if the item match the current search).
● People details can be displayed into the “Information about...” box.
● People can be filtered by gender.
The gender filter has to contain only the existing gender of the saved list (if there are
two different genders at least)

![image](https://user-images.githubusercontent.com/81588630/141351733-3a4bfc16-c23c-484f-a5e6-627891b94946.png)

## SWAPI
All data have to be retrieved from SWAPI: https://swapi.co/api/ Check the
documentation to learn more about the available endpoints and returned data
Components of the character list

src
├─ components
| ├─ App.js
| ├─ Card.js
| ├─ CardFav.js
| ├─ CharactersList.js
| ├─ Informationabout.js
| ├─ Savedpeople.js
| ├─ SearchPeople.js
|
├─ Services
| └─ Api.js
| └─ local-storage.js
|
├─ stylesheets
| └─ Components
|  ├─ Card.scss
|  ├─ Characters.scss
|  ├─ Informationabout.scss
|  ├─ SavedPeople.js
| └─ Core
| └─App.scss
└─ index.js
In the detail screen it will appear in addition to the photo, name and species, the planet of origin, the number of episodes in which it appears and if it is alive or dead.

## Technologies:

React / JS / SCSS

## START IN LOCAL

### Clone this repository on your computer.

Install the package and its dependencies using:

### npm install

Once the installation is complete you will find that a folder named node_modules / has been added.
Finally, run the following command to load a local server and be able to do the visualization:

### npm start

### NOTE: It is necessary to have installed NodeJS

## Do you think I can apply any improvement?

If you have come this far, and you have detected a problem or you consider that something can be improved, I would be delighted if you open a new issue and know your opinion, each improvement is important and necessary for me, thank you very much for your time.
