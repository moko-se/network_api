# My Social Network API 🌐

Welcome to the My Social Networks api.


## Dependency uses ⚒️

```"dependencies": {
    "bcryptjs": "^2.4.3",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "express-session": "^1.17.3",
    "http-errors": "^2.0.0",
    "mongoose": "^6.3.5",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.16",
    "validator": "^13.7.0"
  }
```

## Requirement ✅

- [NodeJS](https://nodejs.org/en/)
- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose)

## Configuration
To install and set up the development environment, run this command in your terminal :

`npm install`

To configure your MongoDB url and PORT `.env` 

```PORT = 3000
MONGO_URI_DEV =  mongodb://localhost:27017/yourDatabaseName
MONGO_URI_PROD =  mongodb://localhost:27017/yourDatabaseName
```
To configure your MongoDB parameter go to ` config/db.js` 

```
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
```

## Features

### - [Users](#user-collection-user)
### - [Events](#event-collection-event)
### - [Groups](#group-collection-group)
### - [threads](#threads-collection-threads)
### - [Albums](#album-collection-album)
### - [surveys](#survey-collection-survey)
### - [Ticketings](#Ticketings-collection-Ticketings)

## API Users [/users]

  ## Structure

### [POST] Create user
Allows the creation of a single user.
|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : POST → http://localhost:3000/api/users/create

#### Parameters :
```javascript
{
  'firstname': String, // Optional  
  'lastname': Number, // Optional  
  'age': Number, // Optional  
  'password': String // Optional
  'email': String // Optional
}
```
#### Response :
```javascript  
{
    _id: Object_ID,
    firstname: String,
    lastname: String,
    age: Number,
    password: String
    email: String 
}
```
### [GET] Read all users
Allows the read of everything users.
|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : POST → http://localhost:3000/api/users/read

#### Parameters :

Nothing

#### Response :
```javascript  
{
  "users": [
    {
      _id: Object_ID,
      firstname: String,
      lastname: String,
      age: Number,
      password: String
      email: String 
    },
    {
      _id: Object_ID,
      firstname: String,
      lastname: String,
      age: Number,
      password: String
      email: String 
    },
  ]
}
```

### [GET] Read all users
Allows the read of everything users.
|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : POST → http://localhost:3000/api/users/read

#### Parameters :

Nothing

#### Response :
```javascript  
user : {
  {
    _id: Object_ID,
    firstname: String,
    lastname: String,
    age: Number,
    password: String
    email: String 
  }
}
```

# API Event
# API Group