# TestTask


Friends Api


1.
Create nodeJS server on localhost.
Create route and request with 3 parameters: name, surname, age.
If age > 18. Send response: "Hello <name> <surname>"

2.
To previous server add another route and request with 4 parameters:
email, name, surname, age. If age > 18 save email, name and surname in database(you can use any DB). Send response: "Done" if true, otherwise send error.

3.
Add ability to find all users by email. Send request with email. Return list of full names.


4. 
Create node.js script that will call https://reqres.in/api/users API and generate .csv file with response data.
Headers should be - [ID, Email, First Name, Last Name]


I give the necessary information on the REST request:

●/api/checkage route that executes the first task;

●/api/users route that executes the second and third tasks;

Built With:

●Node.js;

●MongoDB;

Getting Started

●Start the server

npm run server

●Install NPM packages

npm install

●Script that will call https://reqres.in/api/users

npm run reqresScript

● Tests

npm run test

