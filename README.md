# Milk Product API
An API for admin to manage product inventory <br />
Tech Stack: Node.js &amp; Mongo DB <br />

API to add Order to the database :: URL **(POST)** : 
> &emsp; **/add** <br />

API to update quantity of a order :: URL **(POST)** : 
> &emsp; **/update/_:id_/** <br />

API to update status of a order :: URL **(POST)** : 
> &emsp; **/updateStatus/_:id_/** <br />

API to delete Order :: URL **(DELETE)** : 
> &emsp; **/delete/_:id_/**  <br />

API to check order capacity for a particular day:: URL **(POST)** : 
> &emsp; **/checkCapacity/_:date_/**  <br />

_Note: DATE FORMAT YYYY-MM-DD_

## Requirements
For development, you will only need Node.js and a node global package installed in your environement and mongodb for database.<br />

## Node
Node Installtion on Windows Go on to the official Node.js website and download the installer. Also, be sure to have .git available in your PATH, npm might need it (You can find git).<br />

Other operating System You can find more information about the installation on the official Node.js website and the official NPM website.<br />

If the installation was successful, you should be able to run the following command.<br />

> &emsp; node --version

> &emsp; npm --version

## Install
Clone this repository from my git repo

Install all dependencies using: 
> &emsp; npm install

## Running the Project
> &emsp; node index.js
