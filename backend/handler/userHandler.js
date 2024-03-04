const { connect } = require('http2');
const { MongoClient, ObjectId } = require('mongodb');

class UserHandler {
    constructor(connectionString, dbName= 'Daxoppgave', collectionName= 'tests') {
        this.client = new MongoClient(connectionString)
        this.dbName = dbName;
        this.collectionName = collectionName;
    }
}

async connect() {
    await this.client.connect();
    this.db = this.client.db(this.dbName);
    this.collection = this.db.collection(this.collectionName);
}