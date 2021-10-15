const { MongoClient } = require('mongodb');
require('dotenv').config()

const url = process.env.MONGO_URL
const client = new MongoClient(url)

async function inser_data() {
    await client.connect();
    const db = client.db("MONGO")
    const collection = db.collection('users');
    const insertResult = await collection.insertMany([{ "name": "Pratik", "password": "872004" }]);
    console.log('Inserted users =>', insertResult);
}


async function update_data() {
    await client.connect();
    const db = client.db("MONGO")
    const collection = db.collection('users');
    const updateResult = await collection.updateOne({ "name": "Pratik", "password": "872004" }, { $set: { "name": "Tikaram", "password": "872004" } });
    console.log('Updated users =>', updateResult)
}


async function list_data() {
    await client.connect();
    const db = client.db("MONGO")
    const collection = db.collection('users');
    const findResult = await collection.find({}).toArray();
    console.log('Found users =>', findResult);
}


async function delete_data() {
    await client.connect();
    const db = client.db("MONGO")
    const collection = db.collection('users');
    const deleteResult = await collection.deleteMany({ "name": "Pratik", "password": "872004" });
    console.log('Deleted users =>', deleteResult);}


const command = process.argv
if (command[2] == "list"){
    list_data()
}else if (command[2] == "insert"){
    inser_data()
}else if (command[2] == "update"){
    update_data()
}else if (command[2] == "delete"){
    delete_data()
}else{
    console.log('\x1b[31m%s\x1b[0m', "Welcome to MONGO CRUD!\n\x1b[0m");
    console.log('\x1b[33m%s\x1b[0m',"Run Following Commands...\n\n\x1b[0m");
    console.log('\x1b[34m%s\x1b[0m',"1. For Insert: node server.js insert\n2. For Update: node server.js update\n3. For List: node server.js list\n4. For Delete: node server.js delete\n");
}
