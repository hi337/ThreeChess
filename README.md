# ThreeChess

This is a Chess Game implemented with ThreeJS. It doesn't restrict player movement and features like castling and pawn promotion are not implemented.

## Dependencies
1. NodeJS
2. Git

## Installation

This is the Front-end built with ThreeJS. You will need to run the Colyseus multiplayer server as well (check my repository [ThreeChess-Backend](https://github.com/hi337/ThreeChess-Backend)).

Clone the backend repository and initialize it as follows:

```
git clone https://github.com/hi337/ThreeChess-Backend
cd ThreeChess-Backend
npm i
npm run start
```

Then clone this repository in the parent folder:

```
cd ..
git clone https://github.com/hi337/ThreeChess
cd ThreeChess
npx vite --host 0.0.0.0
```

The command line should output to you the network link, which you can use to access the site with all computers on the LAN. For the sever to work, go the the "js/main.js" file and change the ip address on the 11th line to the address listed as the address link without changing the port. 

Then your done. Enjoy!
