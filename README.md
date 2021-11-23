

### INDEX

1. [Data structure](##Data-structure)
2. [Features](##Features)
3. [Information about](##Information-about)
4. [Detalle de personajes](##Detalle-de-personajes)


## Data structure
```
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

```

# Features

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## “Search people” box
● A search input that allows you to retrieve people from SWAPI (see below).

● Results are displayed in a list, each item can be saved or its details can be
shown into the “information about” box.

● A saved item doesn’t appear in results anymore

![image](https://user-images.githubusercontent.com/81588630/143016698-ffa5a790-2316-481e-8324-b70d0e8b1a0a.png)

## “Saved people” box
● This is the list of saved people.

![image](https://user-images.githubusercontent.com/81588630/143018201-444f7dff-9054-4ff7-b34f-ae86a8b1b740.png)


● People can be removed from the list (and has to be displayed back into the
“search people” box if the item match the current search).

● People details can be displayed into the “Information about...” box.

● People can be filtered by gender.
The gender filter has to contain only the existing gender of the saved list (if there are
two different genders at least)

![image](https://user-images.githubusercontent.com/81588630/143018550-3a0c9b43-354a-415c-bfde-c663d9eea598.png)


## “Information about...” box
●  Display the picture and all the simple information about the selected person.


### SWAPI
All data have to be retrieved from SWAPI: https://swapi.co/api/ Check the

### Technologies:
React / JS / SCSS

# START IN LOCAL

### Clone this repository on your computer.

Install the package and its dependencies using:

### npm install

Once the installation is complete you will find that a folder named node_modules / has been added.
Finally, run the following command to load a local server and be able to do the visualization:

### npm start

### NOTE: It is necessary to have installed NodeJS



## Do you think I can apply any improvement?

If you have come this far, and you have detected a problem or you consider that something can be improved, I would be delighted if you open a new issue and know your opinion, each improvement is important and necessary for me, thank you very much for your time.
