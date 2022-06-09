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

  ## Structure

### [POST] Create group
Allows the creation of a single group.

* HTTP request : POST → http://localhost:3000/api/groups/create

#### Parameters :
```javascript
{
    "title":"my new group 2",
    "description":"my description group 2",
    "members":["629dc2fc3c465a5fd718e2b6"]
}
```
#### Response :
```javascript  
{
  "group": 
      {
        "myevents": [],
        "title": "my new group 2",
        "description":"my description group 2",
        "icon": "icon.jpg",
        "picture": "picture.jpg",
        "status": "public",
        "publish": true,
        "createEvent": true,
        "events": [],
        "members": [
            "629dc2fc3c465a5fd718e2b6",
        ],
        "id": "629fd0cbdd56dc27f6a64930"
    }
}
```

### [GET] Read all groups
Allows the read of everything groups.

* HTTP request : POST → http://localhost:3000/api/groups/read

#### Parameters :

NOTHING

#### Response :
```javascript  
{
    "groups": [
        {
            "myevents": [],
            "title": "my new group 2",
            "description":"my description group 2",
            "icon": "icon.jpg",
            "picture": "picture.jpg",
            "status": "public",
            "publish": true,
            "createEvent": true,
            "events": [],
            "members": [
                "629dc2fc3c465a5fd718e2b6",
                "629e8f0b734b1eca733f8c8f"
            ],
            "id": "629fd0cbdd56dc27f6a64930"
        }?
        {
            "myevents": [],
            "title": "my new group 3",
            "description":"my description group 3",
            "icon": "icon.jpg",
            "picture": "picture.jpg",
            "status": "private",
            "publish": true,
            "createEvent": true,
            "events": [],
            "members": [
                "629dc2fc3c465a5fd718e2b6",
                "629e8f0b734b1eca733f8c8f"
            ],
            "id": "629fd0cbdd56dc27f6a64930"
        }
    ]
}
```

### [GET] Read group
Allows the read of a single group.

* HTTP request : POST → http://localhost:3000/api/groups/read/:id

#### Parameters :
NOTHING
#### Response :
```javascript  
{
    "myevents": [],
    "title": "my new group 3",
    "description":"my description group 2",
    "icon": "icon.jpg",
    "picture": "picture.jpg",
    "status": "private",
    "publish": true,
    "createEvent": true,
    "events": [],
    "members": [
        "629dc2fc3c465a5fd718e2b6",
        "629e8f0b734b1eca733f8c8f"
    ],
    "id": "629fd0cbdd56dc27f6a64930"
}
```

### [PUT] Update group
Allows the update of a single group.

* HTTP request : POST → http://localhost:3000/api/groups/update/:id

#### Parameters :
```javascript
{
    "title":"my new group 4",
    "description":"my description group 2",
    "members":["629dc2fc3c465a5fd718e2b6"]
}
```
#### Response :
```javascript  
{
    "msg": "group updated",
    "docs": {
        "title": "my new group 4",
        "description":"my description group 2",
        "icon": "icon.jpg",
        "picture": "picture.jpg",
        "status": "public",
        "publish": false,
        "createEvent": true,
        "myevents": [],
        "members": [
            "629dc2fc3c465a5fd718e2b6"
        ],
        "id": "62a1a1d9c029763a2b983379"
    }
}
```

### [DELETE] Delete group
Allows the delete of a single group.

* HTTP request : POST → http://localhost:3000/api/groups/delete/:id

#### Parameters :

NOTHING

#### Response :
```javascript  
{
    "msg": "group deleted",
    "docs": {
        "title": "my new group 2",
        "icon": "icon.jpg",
        "picture": "picture.jpg",
        "status": "public",
        "publish": false,
        "createEvent": true,
        "myevents": [],
        "members": [
            "629dc2fc3c465a5fd718e2b6"
        ],
        "id": "62a1a1d9c029763a2b983379"
    }
}
```

### [POST] add member in group
Allows the add new member group.

* HTTP request : POST → http://localhost:3000/api/groups/read/:id/member

#### Parameters :

```javascript
{
    "id":"629dc2fc3c465a5fd718e2b6"
}
```

#### Response :
```javascript  
{
    "group": {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
    }
}
```

## API Survey [/thread]

  ## Structure

### [POST] Create thread
Allows the creation of a single thread.

* HTTP request : POST → http://localhost:3000/api/threads/create

#### Parameters :
```javascript
{
    "author": "6290d9e743550e139005b81f",
    "message": "my first message"
}
```
#### Response :
```javascript  
{
    "link": {
        "id": "629c6fb096ba7fb213248db5",
        "type": "group"
    },
    "messages": [
        {
            "author": "6290d9e743550e139005b81f",
            "message": "my first message",
            "date": "2012-04-23T18:25:43.511Z"
        }
    ]
}
```

### [GET] Read all thread
Allows the read of everything thread.

* HTTP request : POST → http://localhost:3000/api/threads/read/id

#### Parameters :

#### Response :


### [PUT] Update thread
Allows the update of a single thread.

* HTTP request : POST → http://localhost:3000/api/threads/update/:id

#### Parameters :
#### Response :

### [DELETE] Delete thread
Allows the delete of a single thread.

* HTTP request : POST → http://localhost:3000/api/surveys/delete/:id

#### Parameters :
#### Response :

## API Album [/album]

  ## Structure

### [POST] Create album
Allows the creation of a single album.

* HTTP request : POST → http://localhost:3000/api/albums/create/:eventid

#### Parameters :
```javascript
{
    "pictures": ["img1.jpg", "img2.jpg", "img4.jpg"],
    "user_id": "62a1017d155695d06babab25"
}
```
#### Response :
```javascript  
{
    "album": {
        "pictures": [
            "img1.jpg",
            "img2.jpg",
            "img4.jpg"
        ],
        "event_id": "62a13374b83cbc33033fa8eb",
        "id": "62a1a978c029763a2b98338b"
    }
}
```

### [GET] Read all album
Allows the read of everything albums.

* HTTP request : GET → http://localhost:3000/api/albums/read

#### Parameters :

NOTHING

#### Response :
```javascript  
{
    "album": {
        "pictures": [
            "img1.jpg",
            "img2.jpg",
            "img4.jpg"
        ],
        "event_id": "62a13374b83cbc33033fa8eb",
        "id": "62a1a978c029763a2b98338b"
    }
}
```

### [GET] Read album
Allows the read of a single album.

* HTTP request : GET → http://localhost:3000/api/album/read/:id

#### Parameters :
NOTHING
#### Response :
```javascript  
{
    "albums": [
        {
            "pictures": [
                "img1.jpg",
                "img2.jpg",
                "img4.jpg"
            ],
            "event_id": "62a13374b83cbc33033fa8eb",
            "id": "62a1a978c029763a2b98338b"
        },
        {
            "pictures": [
                "img1.jpg",
                "img2.jpg"
            ],
            "event_id": "62a13374b83cbc33033fa8eb",
            "id": "62a1a978c029763a2b9833jf5d"
        }
    ]
}
```

### [PUT] Update album
Allows the update of a single album.

* HTTP request : PUT → http://localhost:3000/api/album/update/:id

#### Parameters :
```javascript
{
    "pictures": ["img1.jpg", "img2.jpg"]
}
```
#### Response :
```javascript  
{
    "msg": "album update",
    "docs": {
        "pictures": [
            "img1.jpg",
            "img2.jpg"
        ],
        "event_id": "62a13374b83cbc33033fa8eb",
        "id": "62a1a978c029763a2b98338b"
    }
}
```

### [DELETE] Delete survey
Allows the delete of a single survey.

* HTTP request : POST → http://localhost:3000/api/surveys/delete/:id

#### Parameters :

NOTHING

#### Response :
```javascript  
{
    "msg": "Deleted album: ",
    "docs": {
        "pictures": [
            "img1.jpg",
            "img2.jpg"
        ],
        "event_id": "62a13374b83cbc33033fa8eb",
        "id": "62a1a978c029763a2b98338b"
    }
}
```

## API Survey [/surveys]

  ## Structure

### [POST] Create survey
Allows the creation of a single survey.

* HTTP request : POST → http://localhost:3000/api/surveys/create/:eventid

#### Parameters :
```javascript
{
    "title":"my first survey",
    "user_survey_id": "62a1017d155695d06babab25"
}
```
#### Response :
```javascript  
{
    "survey": {
        "title": "my first survey",
        "user_survey_id": "62a1017d155695d06babab25",
        "questions": [],
        "event_id": "62a13374b83cbc33033fa8eb",
        "id": "62a1a3b3c029763a2b983380"
    }
}
```

### [GET] Read all groups
Allows the read of everything groups.

* HTTP request : POST → http://localhost:3000/api/groups/read

#### Parameters :

NOTHING

#### Response :
```javascript  
{
    "surveys": [
        "survey": {
        "title": "my first survey",
        "user_survey_id": "62a1017d155695d06babab25",
        "questions": [],
        "event_id": "62a13374b83cbc33033fa8eb",
        "id": "62a1a3b3c029763a2b983380"
        },
        "survey": {
        "title": "my first survey 2",
        "user_survey_id": "62a1017d155695d06babab25",
        "questions": [],
        "event_id": "62a13374b83cbc33033fa8eb",
        "id": "62a1a3b3c029763a2b983380"
      }
    ]
}
```

### [GET] Read survey
Allows the read of a single survey.

* HTTP request : POST → http://localhost:3000/api/survey/read/:id

#### Parameters :
NOTHING
#### Response :
```javascript  
{
    "survey": {
        "title": "my first survey",
        "user_survey_id": "62a1017d155695d06babab25",
        "questions": [],
        "event_id": "62a13374b83cbc33033fa8eb",
        "id": "62a1a3b3c029763a2b983380"
    }
}
```

### [PUT] Update survey
Allows the update of a single survey.

* HTTP request : POST → http://localhost:3000/api/surveys/update/:id

#### Parameters :
```javascript
{
    "title":"serge"
}
```
#### Response :
```javascript  
{
    "survey": "survey updated",
    "docs": {
        "title": "serge",
        "user_survey_id": "62a1017d155695d06babab25",
        "questions": [],
        "event_id": "62a13374b83cbc33033fa8eb",
        "id": "62a1a3b3c029763a2b983380"
    }
}
```

### [DELETE] Delete survey
Allows the delete of a single survey.

* HTTP request : POST → http://localhost:3000/api/surveys/delete/:id

#### Parameters :

NOTHING

#### Response :
```javascript  
{
    "survey": "survey deleted",
    "docs": {
        "title": "serge",
        "user_survey_id": "62a1017d155695d06babab25",
        "questions": [],
        "event_id": "62a13374b83cbc33033fa8eb",
        "id": "62a1a3b3c029763a2b983380"
    }
}
```

### [POST] create question
Allows the add new member group.

* HTTP request : POST → http://localhost:3000/api/groups/read/:id/question

#### Parameters :

```javascript
{
    "question":"Comment ça va ?"
}
```

#### Response :
```javascript  
{
    "question": {
        "question": "Comment ça va 2 ?",
        "id": "62a1a50dc029763a2b983384"
    }
}
```

### [POST] create answer
Allows the add new member answer.

* HTTP request : POST → http://localhost:3000/api/surveys/read/:id/question/:questionid

#### Parameters :

```javascript
{
    "answer":"my answser",
    "user_id":"62a1017d155695d06babab25"
}
```

#### Response :
```javascript  
{
    "answer": {
        "answer": "my answser",
        "user_id": "62a1017d155695d06babab25",
        "id": "62a1a570c029763a2b983387"
    }
}
```

## API Survey [/ticketings]

  ## Structure

### [POST] Create ticketing
Allows the creation of a single ticketing.

* HTTP request : POST → http://localhost:3000/api/ticketings/create/:eventid

#### Parameters :
```javascript
{
    "title":"my first ticketing",
    "user_id":"62a1017d155695d06babab25"
}
```
#### Response :
```javascript  
{
    "ticketing": {
        "title": "my first ticketing",
        "user_id": "62a1017d155695d06babab25",
        "event_id": "62a13374b83cbc33033fa8eb",
        "id": "62a1b47d0c7f0f470b1d676d"
    }
}
```

### [GET] Read all groups
Allows the read of everything ticketings.

* HTTP request : GET → http://localhost:3000/api/ticketings/read

#### Parameters :

NOTHING

#### Response :
```javascript  
{
    "ticketings": [
        {
            "title": "new title",
            "user_id": "62a1017d155695d06babab25",
            "event_id": "62a13374b83cbc33033fa8eb",
            "id": "62a1b47d0c7f0f470b1d676d"
        }
    ]
}
```

### [GET] Read ticketing
Allows the read of a single ticketing.

* HTTP request : GET → http://localhost:3000/api/ticketing/read/:id

#### Parameters :
NOTHING
#### Response :
```javascript  
{
    "ticketing": {
        "title": "my first ticketing",
        "user_id": "62a1017d155695d06babab25",
        "event_id": "62a13374b83cbc33033fa8eb",
        "id": "62a1b6000c7f0f470b1d6774"
    }
}
```

### [PUT] Update ticketing
Allows the update of a single ticketing.

* HTTP request : PUT → http://localhost:3000/api/ticketings/update/:id

#### Parameters :
```javascript
{
    "title":"new title"
}
```
#### Response :
```javascript  
{
    "msg": "ticketing updated",
    "docs": {
        "title": "new title",
        "user_id": "62a1017d155695d06babab25",
        "event_id": "62a13374b83cbc33033fa8eb",
        "id": "62a1b47d0c7f0f470b1d676d"
    }
}
```

### [DELETE] Delete survey
Allows the delete of a single survey.

* HTTP request : POST → http://localhost:3000/api/surveys/delete/:id

#### Parameters :

NOTHING

#### Response :
```javascript  
{
    "survey": "survey deleted",
    "docs": {
        "title": "serge",
        "user_survey_id": "62a1017d155695d06babab25",
        "questions": [],
        "event_id": "62a13374b83cbc33033fa8eb",
        "id": "62a1a3b3c029763a2b983380"
    }
}
```

### [POST] create question
Allows the add new member group.

* HTTP request : POST → http://localhost:3000/api/groups/read/:id/question

#### Parameters :

```javascript
{
    "question":"Comment ça va ?"
}
```

#### Response :
```javascript  
{
    "question": {
        "question": "Comment ça va 2 ?",
        "id": "62a1a50dc029763a2b983384"
    }
}
```

### [POST] create answer
Allows the add new member answer.

* HTTP request : POST → http://localhost:3000/api/surveys/read/:id/question/:questionid

#### Parameters :

```javascript
{
    "answer":"my answser",
    "user_id":"62a1017d155695d06babab25"
}
```

#### Response :
```javascript  
{
    "answer": {
        "answer": "my answser",
        "user_id": "62a1017d155695d06babab25",
        "id": "62a1a570c029763a2b983387"
    }
}
```

