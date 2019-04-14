const mongoose = require('mongoose');

const dbpath = 'mongodb://localhost/mean-users';

mongoose.connect(dbpath, { useNewUrlParser: true })
    .then(() => console.log('DB is connected'))
    .catch((err) => console.log('err', err));

module.exports = mongoose;

