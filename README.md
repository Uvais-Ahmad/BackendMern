# Depo24 Mern
This is the server side system of OOrder product and generating Invoice

## Introduction

Here we create all REST APIs for Login,Signup , Order product and Generate the Invoice 

<br/>

## Features
- It stored Hashed password
- We use JWT Auth
- When the user successfully logIn It got the token.
- All input value must be valid its check by npm package Express-validator
- To order product and Generate The Invoice
 

<br/>

## MERN Hosted Url : - **https://luminous-mermaid-ab6803.netlify.app**
###ReactJs :: - **https://github.com/Uvais-Ahmad/Auth_Frontend**
## Hosted (Deployed ) URL
 - **https://mernauth.onrender.com**
 This is the main Home deployed URL link.

## Routes & URL

- **https://mernauth.onrender.com/api/v1/add-user**
  <p>To register as a new user</p>
  **we need to paas some values**
  *name , phone , pass , confirm_pass*
  *Please make sure or field value must valid*


- **https://mernauth.onrender.com/api/v1/login-user**
  <p>To login as a existing user</p>
  **we need to paas some values**
  *phone , pass*
  *Please make sure or field value must valid*
  <br/>
  
  - **https://mernauth.onrender.com/api/v1/order**
  <p>To add a new orderr</p>
  *Please make sure or field value must valid*
  <br/>
  
  - **https://mernauth.onrender.com/api/v1/logout**
  <p>to loggin out</p>
  **we don't to paas authToken if you test on postman**
  <br/>
  
  - **And Many more routes present used inside Reactjs**

## Tools Used
- Create server : *Express*
- Puppteer package : for Generating pdf
- Mongodb for storing user details
- Data validation : *Express-validator*
- Private url or data : *ENV*
- Postman for testing
- Version Control System: *Git*
- VCS Hosting: *GitHub*
- Integrated Development Environment: *VSCode*
  <br/>
  <br/>

## Requirements

For development, you will only need Node.js and a node global package installed in your environement and mongodb for database.

### Node

- Node Installtion on Windows
  Go on to the [official Node.js website](https://nodejs.org/en/) and download the installer. Also, be sure to have `.git` available in your PATH,
  `npm` might need it (You can find [git](https://git-scm.com/)).
- Other operating System
  You can find more information about the installation on the official [Node.js website](https://nodejs.org/en/) and the official [NPM website](https://www.npmjs.com/).

If the installation was successful, you should be able to run the following command.

```
$ node --version
v16.13.0

$ npm --version
8.2.0
```

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

```
$ npm install npm -g

```

<br/>

## To run the project on your local machine:

1. Open terminal.

2. Change the current working directory to the location where you want the cloned directory.

   ```
   $ git clone https://github.com/Uvais-Ahmad/Auth-Authorization-API

   ```

3. Install all the dependencies by running :

   ```
   npm install

   ```

4. Run npm start to run the project at local host, port 8000:

   ```
   $ npm start

   ```

<br/>
