# 🔐📚 WDV353: Module 2 ⤑ Assignment Repo

![Repo Banner](https://www.dropbox.com/scl/fi/2tg9yj1my4tu4e6r3ryhq/repobanner.png?rlkey=u81eqfslsjercs9je5r13s52u&raw=1)

## 🔗 Student info

**♑ Full Name:** Emily Travo <br>
**🔑 Student ID:** 0005303522 <br>
**⌛ Timezone:** PST <br>
📬 Contact: EATravo@student.fullsail.edu

![Degree Program](https://img.shields.io/badge/Degree-Web%20Development-orange?logo=gnometerminal)
<br>

## 2.6 Assignment Checklist ✅✅

> You will create **_ALL_** the database functionality for both of your collections. Get, Post and Put have been demoed for you. Use Mongoose documentation to use **GET by ID**, and **Delete by ID**. You can find all the ways to query in the [Mongoose docs](https://mongoosejs.com/docs/queries.html).

- [x] Controller functions for both models
- [x] Separated route files with error handling
  - [x] `characterRoutes.js`
  - [x] `houseRoutes.js`
- [x] Monogoose Schema creation
  - [x] Two models that relate to each other
    - [x] Students at Hogwarts
    - [x] Hogwarts Houses
  - [x] 3-5 properties on each model
    - [x] **Characters Model**
      - [x] name
      - [x] age
      - [x] house
      - [x] year
      - [x] blood purity
      - [x] wand
    - [x] **House Model**
      - [x] name
      - [x] founder
      - [x] mascot
      - [x] motto
      - [x] colors
      - [x] ghost
  - [x] Use at least 4 different data types overall
    - [x] string
    - [x] enum
    - [x] number
    - [x] array
  - [x] Validate all necessary parts of your model

## 2.7 Assignment Checklist ✅✅


> You will create a Postman collection for your first Mongo DB collection. You will write **three GOOD** tests for each of the 5 methods. Testing must be meaningful. In other words, your testing statuses and returned payload.


- [x] GET method
   - [x] 200 status code check for successful retrieval 
   - [x] Checks if response is in an array
   - [x] Checks to see if the first returned character in the array has a name
- [x] GET by ID method
   - [x] 200 status code check for successful retrieval 
   - [x] Check to see if returned response contains an object
   - [x] Check to see if returned character has a name
- [x] POST method
   - [x] 201 status for successful character creation
   - [x] Check for that response contains an ID
   - [x] Response contains valid entries (payload validation)
- [x] DELETE by ID method
   - [x] 200 status for successful deletion of data
   - [x] Checks to make sure success message is returned
   - [x] Double checks that character ID is no longer present
- [x] PATCH/PUT by ID method
   - [x] 200 status for successful update/alternation of data
   - [x] Checks to see if all input fields have data
   - [x] Checks to see if the returned house has been changed to slytherin
