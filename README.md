

### INDEX

1. [Data structure](##Data-structure)
2. [Features](##Features)
3. [Information about](##Information-about)
4. [local Storage](##Local-Storage)


## Data structure
```
src
├─ components
| ├─ App.js
| ├─ Card.js
| ├─ CardFav.js
| ├─ CharactersList.js
| ├─ Details.js
| ├─ Favorite.js
| ├─ NotCharacters.js
| ├─ SearchPeople.js
|
├─ Services
| └─ Api.js
| └─ local-storage.js
|
├─ stylesheets
| └─ Components
|  ├─ Card.scss
|  ├─ Details.scss
|  ├─ Favorite.scss
|  ├─ SearchPeople.js
| └─ Core
| └─App.scss
└─ index.js

```

# Features

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Intital state of the aplication
![image](https://user-images.githubusercontent.com/81588630/146932064-353f61fe-b611-41b3-bf45-b06b600d1cc4.png)


## “Search people” box
● A search input that allows you to retrieve people from SWAPI (see below).

● Results are displayed in a list, each item can be saved or its details can be
shown into the “information about” box.

● A saved item doesn’t appear in results anymore

![image](https://user-images.githubusercontent.com/81588630/144421545-b441ee22-2853-4dba-844f-d6c9615b04d1.png)

## “Saved people” box
● This is the list of saved people.

![image](https://user-images.githubusercontent.com/81588630/144421851-27251bd5-0661-47f5-b018-74edd800742f.png)

● People can be removed from the list (and has to be displayed back into the
“search people” box if the item match the current search).

● People details can be displayed into the “Information about...” box.

● People can be filtered by gender.

![image](https://user-images.githubusercontent.com/81588630/144421979-cd016e2f-d39a-4a79-8b61-9e34c599167a.png)


## “Information about...” box
●  When you click on the Show details button, you should see all the simple information about the selected person.

![image](https://user-images.githubusercontent.com/81588630/146932174-cc2b0cb0-2f25-4109-9aa1-ce38c6276659.png)


## Local storage
●  Characters must continue to appear even if the user performs another quest.
Local storage The list of favorites must be stored in the localStorage. 
In this way, when reloading the page the list of favorites should be shown.


### SWAPI
All data have to be retrieved from SWAPI: https://swapi.co/api/ 

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
