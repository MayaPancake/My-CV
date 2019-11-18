# This is an example on how you could implement an SPA and make some HTTP requests 🚀

## This example aims to help the students at foo-coding find some inspiration for their portfolio projects.

### This project aims to let you create a single page application that talks with the web for your own portfolio 📚.

### **To run this demo on your machine follow this steps**:

    - Clone this repo to your computer
    - Navigate on the terminal to the root of the project
    - Run on the terminal: npx parcel index.html

### **Requirements**:

    - Single page application with at least 3 pages (example: Home, Project and Add Project).
    - The Project page should make http requests to get and write some data on an API.

### **Guidelines and tips**:

    - Choose a team (optional) 🙋
    - Create a repository on github for your portfolio. 🐎
    - Create a trello, or similar for your portfolio. Write down tasks. 🚜
    - Create wireframes for your application, responsive design! 🚚

### **Optional**:

    - The JS code should be splitted through multiple files
    - Think on a strategy for folder structure
    - Create a db for the project (Firebase, see below a suggestion on how to set it up)
    - Use a bundler (like Parcel)
    - Hosting

### Firebase setup (the quicky way)

    - Go to https://firebase.google.com/ and create an account
    - After creating an account navigate to the firebase console and click on Add Project
    - Follow all the steps to create a new project, no particular configuration for our project is needed.
    You can choose all the defaults.
    - When you're project is created you'll have a sidebar with several options, one of them is database.
    Click on that option and then create a database. Again choose all the defaults.
    - After the database is created you can choose 2 types, Cloud Firestore or Realtime database.
    I find the Realtime database a bit simpler to setup, so I reccomend choosing that one for our project.
    - Select the rules tab and make sure read and write are set to true.
    - That's it, now you can use the endpoint that firebase provides you to make your http requests.
