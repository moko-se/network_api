const mongoose = require('mongoose');

/* mongoose */
//options object
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose
    .connect(process.env.MONGO_URI_DEV, options)
    .then(()=> console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB', err))