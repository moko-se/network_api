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
  "user": {
    _id: Object_ID,
    firstname: String,
    lastname: String,
    age: Number,
    password: String,
    email: String 
  }
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
      password: String,
      email: String 
    },
    {
      _id: Object_ID,
      firstname: String,
      lastname: String,
      age: Number,
      password: String,
      email: String 
    },
  ]
}
```

### [GET] Read single user
Allows the read of a single user.
|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : POST → http://localhost:3000/api/users/read/:id

#### Parameters :

Nothing

#### Response :
```javascript  
{
  "user" : {
      _id: Object_ID,
      firstname: String,
      lastname: String,
      age: Number,
      password: String
      email: String 
  }
}
```

### [PUT] Update user
Allows the update of a user.
|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : POST → http://localhost:3000/api/users/update/:id

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
  "msg": "user updated",
  "docs": {
    _id: Object_ID,
    firstname: String,
    lastname: String,
    age: Number,
    password: String,
    email: String 
  }
}
```

### [DELETE] Delete user
Allows the delete of a user.
|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : POST → http://localhost:3000/api/users/delete/:id

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
  "msg": "user deleted",
  "docs": {
    _id: Object_ID,
    firstname: String,
    lastname: String,
    age: Number,
    password: String,
    email: String 
  }
}
```
## API Event [/events]

  ## Structure

### [POST] Create event
Allows the creation of a single event.
|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : POST → http://localhost:3000/api/events/create

#### Parameters :
```javascript
{
    "title":"soirée à theme ange",
    "description":"my description",
    "location":"Dammarie-les-lys",
    "members":["629dc2fc3c465a5fd718e2b6"]
}
```
#### Response :
```javascript  
{
    "event": {
        "title": "soirée à theme ange",
        "begin": "2022-06-08T23:37:32.000Z",
        "end": "2022-06-08T23:37:32.000Z",
        "location": "Dammarie-les-lys",
        "picture": "cover.jpg",
        "status": "public",
        "surveys": [],
        "members": [
            "629dc2fc3c465a5fd718e2b6"
        ],
        "messages": [],
        "id": "62a13374b83cbc33033fa8eb"
    }
}
```

### [GET] Read all event
Allows the read of everything events.
|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : POST → http://localhost:3000/api/events/read

#### Parameters :
```javascript
{
    "title":"soirée à theme ange",
    "description":"my description",
    "location":"Dammarie-les-lys",
    "members":["629dc2fc3c465a5fd718e2b6"]
}
```
#### Response :
```javascript  
{
    "events": [
        {
            "title": "soirée à theme ange",
            "begin": "2022-06-08T23:37:32.000Z",
            "end": "2022-06-08T23:37:32.000Z",
            "location": "Dammarie-les-lys",
            "picture": "cover.jpg",
            "status": "public",
            "surveys": [],
            "members": [
                "629dc2fc3c465a5fd718e2b6"
            ],
            "messages": [],
            "id": "62a13374b83cbc33033fa8eb"
        },
        {
            "title": "soirée à theme black",
            "begin": "2022-06-08T23:37:32.000Z",
            "end": "2022-06-08T23:37:32.000Z",
            "location": "Paris",
            "picture": "cover.jpg",
            "status": "public",
            "surveys": [],
            "members": [
                "629dc2fc3c465a5fd718e2b6",
                "629dc2fc3c465adjdhdhjd45"
            ],
            "messages": [],
            "id": "62a13374b83cbc33033fa8eb"
        }
    ]
}
```

### [GET] Read event
Allows the read of a single event.
|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : POST → http://localhost:3000/api/events/read/:id

#### Parameters :
NOTHING
#### Response :
```javascript  
{
    "event": {
        "title": "soirée à theme ange",
        "begin": "2022-06-08T23:37:32.000Z",
        "end": "2022-06-08T23:37:32.000Z",
        "location": "Dammarie-les-lys",
        "picture": "cover.jpg",
        "status": "public",
        "surveys": [],
        "members": [],
        "messages": [],
        "id": "62a13374b83cbc33033fa8eb"
    }
}
```

### [PUT] Update event
Allows the update of a single event.
|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : POST → http://localhost:3000/api/events/update/:id

#### Parameters :
```javascript
{
    "title":"soirée à theme ange",
    "description":"my description",
    "location":"Dammarie-les-lys",
    "members":["629dc2fc3c465a5fd718e2b6"]
}
```
#### Response :
```javascript  
{
    "msg":"event updated",
    "event": {
        "title": "soirée à theme ange",
        "begin": "2022-06-08T23:37:32.000Z",
        "end": "2022-06-08T23:37:32.000Z",
        "location": "Dammarie-les-lys",
        "picture": "cover.jpg",
        "status": "public",
        "surveys": [],
        "members": [
            "629dc2fc3c465a5fd718e2b6"
        ],
        "messages": [],
        "id": "62a13374b83cbc33033fa8eb"
    }
}
```

### [DELETE] Delete event
Allows the delete of a single event.
|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : POST → http://localhost:3000/api/events/delete/:id

#### Parameters :

NOTHING

#### Response :
```javascript  
{
    "msg":"event deleted",
    "event": {
        "title": "soirée à theme ange",
        "begin": "2022-06-08T23:37:32.000Z",
        "end": "2022-06-08T23:37:32.000Z",
        "location": "Dammarie-les-lys",
        "picture": "cover.jpg",
        "status": "public",
        "surveys": [],
        "members": [],
        "messages": [],
        "id": "62a13374b83cbc33033fa8eb"
    }
}
```

### [POST] add member in event
Allows the add new member event.
|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : POST → http://localhost:3000/api/events/read/:id/member

#### Parameters :

```javascript
{
    "id":"629dc2fc3c465a5fd718e2b6"
}
```

#### Response :
```javascript  
{
    "msg":"event deleted",
    "event": {
        "title": "soirée à theme ange",
        "begin": "2022-06-08T23:37:32.000Z",
        "end": "2022-06-08T23:37:32.000Z",
        "location": "Dammarie-les-lys",
        "picture": "cover.jpg",
        "status": "public",
        "surveys": [],
        "members": [
            "629dc2fc3c465a5fd718e2b6"
        ],
        "messages": [],
        "id": "62a13374b83cbc33033fa8eb"
    }
}
```
## API Group [/groups]