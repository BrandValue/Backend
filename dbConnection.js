const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const new_connection = () => {
    const db = mongoose.createConnection(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
    db.on('connected', function () {
        mongoose.set('debug', function (col, method, query, doc) {
            console.log(`MongoDB :: ${this.conn.name} ${col}.${method}(${JSON.stringify(query), JSON.stringify(doc)})`);
        });
        console.log(`MongoDB :: connected ${this.name}`);
    });
    db.on('disconnected', function() {
        console.log(`MongoDB :: disconnected ${this.name}`);
    });
    db.on('error', function (err) {
        console.log(`MongoDB :: error ${err.message}`);
    });
    return db;
}
module.exports = {new_connection};
