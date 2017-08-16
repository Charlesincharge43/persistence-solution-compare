- PUT/DELETE sent through params instead of body
  - PUT: body is fine
  - DELTE: body is usually not needed
- DELETE requests not sending anything back
  Model.destroy({ where: {}, returning: true})



- Application loads for the first time
  - GET all of our stuff from the database

- After we load, event listeners are attached, and the user interacts with something
  - make POST/PUT/DELETE request to the database
  - update the view
