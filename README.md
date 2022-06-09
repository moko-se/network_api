# My Social Network API 🌐

Welcome to the My Social Networks api, it is thanks to this api that the Facebook services you use will work perfectly. Follow the documentation below and everything will be in order.


## Dependency uses ⚒️

## Requirement ✅

# API Users

## OverviewThe 
API allows users to retrieve all of the users of the application in micro service through a REST architecture. This API will be mainly used for registed Accounts.

It will also create own users to recover data to the platform but is in no way related to the users collected via the crawling of profiles on Social Networks.

### [POST] Create user
Allows the creation of a single user.
|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : POST → user/create

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

# API Event
# API Group