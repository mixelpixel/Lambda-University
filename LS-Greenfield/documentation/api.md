# LS-Server-Testing

### [Jump to the /user Route's HTTP Methods](#user)
1. [GET](#get-all-database-entries)
2. [POST](#post-a-new-entry-into-the-database)
3. [PUT](#put-a-modification-into-one-database-record)
4. [DELETE](#delete-a-single-database-record-by-unique-name)

<details><summary>CLICK THE TRIANGLE FOR AN EXPANDED NOTES SECTION</summary><p>

# AWESOME DOCUMENTATION AND TESTING FOR AN AMAZING C.R.U.D. API & SERVER
## REST API v1 OVERVIEW
> a simple RESTful API for a database with collections of your choosing.

## NOTES:

| ACRONYM | EXPANSION |
|:--- |:---:|
| **C.R.U.D.** | Create Read Update Destroy |
| **RE.S.T.** | REpresentational State Transfer |
| **A.P.I.** | Application Programming Interface |

1. Starting with the basic User database

### TESTING
> at least one test written for each route. DONE √

> Write your tests BEFORE you write the actual routes. OKAY √

1. Babel & ESLinter AirBnB is ACTIVE
2. NOTE: mongoose
  - Some adjustments per deprecation warnings.
  - set up for `npm run watch` and NYAN CAT!
  - not sure if this will cause problems for future test scenarios where db needs to be persistent?
  - per: https://groups.google.com/forum/?fromgroups=#!topic/mongoose-orm/PXTjqqpaDFk
  ```js
  mongoose.models = {};
  mongoose.modelSchemas = {};
  ```

  - also configured for mongoose vs. Promises per http://mongoosejs.com/docs/promises.html
  ```js
  mongoose.Promise = global.Promise;
  ```

  - and `{ useMongoClient: true }` per: See http://mongoosejs.com/docs/connections.html#use-mongo-client
  ```js
  mongoose.connect('mongodb://localhost/food', { useMongoClient: true }, (err) => {...});
  ```
  &
  ```js
  mongoose.connect('mongodb://localhost/test', { useMongoClient: true }, (err) => {...});
  ```

3. mocha, chai ~sinon~
  - http://chaijs.com/plugins/chai-http/
4. TBD: configure with jest?

> need to have tests for your routes and for your models. - DONE √

### SCHEMA
> models should have some methods/statics that are tested. - DONE √

http://mongoosejs.com/docs/guide.html#methods
http://sinonjs.org/releases/v3.2.1/stubs/

### ROUTES
> routes that use the following HTTP verbs: GET, PUT, POST, and DELETE. - DONE √

HTTP METHODS: https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html

### TODO:
1. Input exception handling
2. GET single DB entry by name
3. params and query routes
4. PUT modification in all records?

[Back to the TOP](#ls-server-testing)

</p></details>

***
# /
## GET root confirmation
- curl localhost:3000
- ROUTE: **GET /**
- RESPONSE: `STATUS 200 OK` https://http.cat/200
- RETURN: `String`
- RETURN EXAMPLE:
```console
$  curl localhost:3000
Hello World!
```

# /version
## GET project version number
- curl localhost:3000/version
- ROUTE: **GET /version**
- RESPONSE: `STATUS 200 OK` https://http.cat/200
- RETURN: `String`
- RETURN EXAMPLE:
```console
$  curl localhost:3000/version
1.0.0
```


# /user
## GET all database entries
- `curl http://localhost:3000/users`
- ROUTE: **GET /users**
- RESPONSE: `STATUS 200 OK` https://http.cat/200
- RETURN: `Array` of food items and reactions
- RETURN EXAMPLE:
```json
[
  {
    "_id":"59b073a6d33f9f7d3d49fb9f",
    "name":"Hot Dog",
    "__v":0,
    "reaction":"yum"
  },
  {
    "_id":"59b07931df08da801d606731",
    "name":"Pizza",
    "__v":0,
    "reaction":"yum"
  },
  {
    "_id":"59b0d4f15ae07fa6f1a46b8b",
    "name":"Brussel Sprouts",
    "__v":0,
    "reaction":"yum"
  }
]
```

[Back to the TOP](#ls-server-testing)

## POST a new entry into the database
- `curl -X POST -H "Content-Type: application/json" -d '{"name":"Hot Dog"}' localhost:8080/food`
- ROUTE: **POST /food**
- PARAMETERS: {name:"food item"}

| NAME | TYPE | DESCRIPTION | UNIQUE | REQUIRED | DEFAULT |
|:---:|:---:|:---:|:---:|:---:|:---:|
| name | `String` | *kind of food* | **YES** | **YES** | none |

- OPTIONAL PARAMETERS: {reaction: "yum"}

| NAME | TYPE | DESCRIPTION | UNIQUE | REQUIRED | DEFAULT |
|:---:|:---:|:---:|:---:|:---:|:---:|
| reaction | `String` | *"yum"* or *"yuck"* | no | no | *"yum"* |

- EXAMPLE INPUT: {"name":"Brussel Sprouts",reaction:"yuck"}
- REPONSE: `STATUS 201 Created` https://http.cat/201
- RETURN: Input `Object`
- RETURN EXAMPLE:
```json
{
  "__v":0,
  "name":"ban chan",
  "_id":"59b0e12933377aad73c225cf",
  "reaction":"yum"
}
```

[Back to the TOP](#ls-server-testing)

## PUT a modification into one database record
- `curl -X PUT -H "Content-Type: application/json" -d '{"name":"Brussel Sprouts","reaction":"yuck"}' localhost:8080/food`
- ROUTE: **PUT /food**
- PARAMETERS: {name:"food item","reaction":"yuck"}

| NAME | TYPE | DESCRIPTION | UNIQUE | REQUIRED | DEFAULT |
|:---:|:---:|:---:|:---:|:---:|:---:|
| name | `String` | *kind of food* | **YES** | **YES** | none |
| reaction | `String` | *"yum"* or *"yuck"* | no | no | *"yum"* |

- RESPONSE: `STATUS 200 OK` https://http.cat/200
- RETURN: Modified `Object` of food items and reactions
- RETURN EXAMPLE:
```json
{
  "_id":"59b0d4f15ae07fa6f1a46b8b",
  "name":"Brussel Sprouts",
  "__v":0,
  "reaction":"yuck"
}
```

[Back to the TOP](#ls-server-testing)

## DELETE a single database record by unique name
- `curl -X DELETE -H "Content-Type: application/json" -d '{"name":"Hot Dog"}' localhost:8080/food`
- ROUTE: **DELETE /food**
- PARAMETERS: {name:"food item"}

| NAME | TYPE | DESCRIPTION | UNIQUE | REQUIRED |
|:---:|:---:|:---:|:---:|:---:|
| name | `String` | *kind of food* | **YES** | **YES** |

- RESPONSE: `STATUS 200 OK` https://http.cat/200
- RETURN: Confirmation `Object`
- RETURN EXAMPLE, DELETING ONE UNIQUE RECORD:
```json
{
  "n":1,
  "ok":1
}
```

- RETURN EXAMPLE, NO RECORDS FOUND:
```json
{
  "n":0,
  "ok":1
}
```

[Back to the TOP](#ls-server-testing)
