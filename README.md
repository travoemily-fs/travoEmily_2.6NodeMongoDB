# 🔐📚 WDV353: Module 2 ⤑ Assignment Repo

![Repo Banner](https://www.dropbox.com/scl/fi/2tg9yj1my4tu4e6r3ryhq/repobanner.png?rlkey=u81eqfslsjercs9je5r13s52u&raw=1)

## 🔗 Student info

**♑ Full Name:** Emily Travo <br>
**🔑 Student ID:** 0005303522 <br>
**⌛ Timezone:** PST <br>
📬 Contact: EATravo@student.fullsail.edu

![Degree Program](https://img.shields.io/badge/Degree-Web%20Development-orange?logo=gnometerminal)
<br>

## Repo Directory:

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
  - [x] 404 status: no characters found in DB
  - [x] 200 status: request sent to Character endpoint
  - [x] 500 status: server-side error processing request; no character data returned
- [x] GET by ID method
  - [x] 404 status: no character found with corresponding ID
  - [x] 200 status: specific character found by ID
  - [x] 500 status: server-side error processing request; no character data returned
- [x] POST method
  - [x] 201 status: new character was successfully created
  - [x] 404 status: user-input error, recheck character input fields
  - [x] 500 status: server-side error processing request; character not created
- [x] DELETE by ID method
  - [x] 404 status: character by ID was not found
  - [x] 200 status: character successfully deleted
  - [x] 500 status: server-side error processing request; character not deleted
- [x] PATCH/PUT by ID method
  - [x] 404 status: character by ID was not found
  - [x] 200 status: character updated successfully
  - [x] 500 status: server-side error processing request; character not updated

