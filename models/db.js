import mongoose from 'mongoose';

const url = process.env.MONGODB_URI;
const db_name = process.env.DB_NAME;

const database = {

    connect: function () {
        mongoose.connect(url + db_name).then(function() {
            console.log('Connected to: ' + url);
        }).catch(function(error) {
            console.log(error)
        });
    },


}

export default database;