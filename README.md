# MyReads Project

## Description
This is a simple web app that displays a list of books coming from a server and displaying it to three different shelves. Users can move the books between shelves as well as search for books not currently on the shelves and assign the book to a shelf.

## File Structure
App.js - root of the app
Book.js - Represents a book object
Bookshelf.js - Represents a collection of ```Book``` objects for a specific shelf
BookCase.js  - Contains the ```Bookshelf``` objects
SearchButton.js - Represents the search button asset
SearchPage.js - Seperate page that deals with searching all the books given a query

## Installation
run ```npm install```
run ```npm install --save react-router-dom```
run ```npm start```