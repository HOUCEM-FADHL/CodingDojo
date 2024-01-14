// Importing necessary modules
const express = require("express");
const { faker } = require('@faker-js/faker');

// Creating an instance of Express
const app = express();

// Setting the port for the server to listen on
const port = 8000;

// Function to create a fake user using the faker library
const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.database.mongodbObjectId(),
    };
    return newFake;
};

// Creating a new fake user
const newFakeUser = createUser();
console.log(newFakeUser);

// Function to create a fake company using the faker library
const createCompany = () => {
    const newFake = {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        country: faker.location.country(),
        zipCode: faker.location.zipCode(),
        street: faker.location.street(),
    };
    return newFake;
};

// Creating a new fake company
const newFakeCompany = createCompany();
console.log(newFakeCompany);

// Route to get a new fake user
app.get("/api/users/new", (req, res) => {
    res.json(newFakeUser);
});

// Route to get a new fake company
app.get("/api/user/company", (req, res) => {
    res.json(newFakeCompany);
});

// Route to get an array containing both a fake user and a fake company
app.get("/api/users/company", (req, res) => {
    res.json([newFakeUser, newFakeCompany]);
});

// Starting the server and listening on the specified port
app.listen(port, () => console.log(`Listening on port: ${port}`));
