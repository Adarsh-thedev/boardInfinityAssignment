## **Problem Statement**

Create a REST API in Nodejs with MongoDb as database for creating tasks with a duration (in minutes).

User can insert a todo record with a sample schema like:

- Task name
- Task description
- Creator
- Duration
- createdAt

There will be two endpoints:

- /add - POST endpoint which adds the data
- /list - GET endpoint which lists all the data

Now, the tricky part is, once a data is created with a duration, it should be automatically deleted after the assigned duration. That means if I create a task called "Interview Assignment" with duration set to 30 mins at 1:00pm on 1 January, the record in the database will be automatically removed at 1:30pm on 1st January.

## **Solution**

two apis have been created which can be accessed using /api/add and /api/list, to tackle the tricky part, i.e. to auto remove document from the collection an already available feature of MongoDB is used which is **expireAfterSeconds** and the number of seconds has been set as 60\*duration.

## **How to use**

- This project can directly be downloaded and used by installing the packages using the commands **npm install** or **yarn** followed by **npm start** or **yarn start**.
- You need to have MongoDB installed at your machine if you wish to access it locally or else you can visit the live URL *https://mysterious-forest-88717.herokuapp.com/api/list* using your browser only.
- To add a record you need to use _Postman_ as there is no UI, while adding four key value pairs are required to be passed by the user, the keys are _name, description, creator and duration_ failing which the app will throw error and won't store data in the DB.

## **Understanding the code and flow of the project**

- The code is pretty straight forward and self documenting, so no special efforts would be required to understand the code and hwo it works
- App.js is the entry point of the app
- Schema and DB related things are stored inside the _models_ folder
- Endpoints and related actions are defined inside the _routes_ folder
- Funtions that perform operations are written inside the _controllers_ folder
