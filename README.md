# REST API - TODO

HEROKU :https://ancient-brook-85580.herokuapp.com
### SignUp :
```sh
URL: https://ancient-brook-85580.herokuapp.com/api/signup
METHOD : POST
Authenticated Required : NO
Authorized Required : NO
Data Input :
    {
        full_name: "your full_name",
        email: "your email",
        password: "your password"
    }
Response Status : 201
Data Output :
    {
    "id": 3,
    "full_name": "sasuke",
    "email": "sasuke@gmail.com",
    "password": "$2a$10$vw3q9IKFEr6w6dj5tWSAC.IbEZ7UdFAVU60djMbRcLeKdeBtIdo9W",
    "updatedAt": "2019-04-29T14:24:38.511Z",
    "createdAt": "2019-04-29T14:24:38.511Z"
    }
Response Status : 201
```


### SignIn :

```sh
URL: https://ancient-brook-85580.herokuapp.com/api/signin
METHOD : POST
Authenticated Required : NO
Authorized Required : NO
Data Input :
    {
        email: "your email",
        password: "your password"
    }
Response Status : 200
```

### Get all user’s todos :

```sh
URL: https://ancient-brook-85580.herokuapp.com/api/todos
METHOD : GET
Authenticated Required : NO
Authorized Required : NO
Response Status : 200
```

### Get a single todo (Owner only) :

```sh
URL: https://ancient-brook-85580.herokuapp.com/api/todos/:id
METHOD : GET
Authenticated Required : YES
Authorized Required : YES
Response Status : 200
```

### Create a todo (Authenticated users only) :

```sh
URL: https://ancient-brook-85580.herokuapp.com/api/todos
METHOD : POST
Authenticated Required : YES
Authorized Required : NO
Data Input :
    {
        title: "todo title",
        description: "todo description"
    }
Response Status : 201
```

### Delete a todo (Owner only) :

```sh
URL: https://ancient-brook-85580.herokuapp.com/api/todos/:id
METHOD : DELETE
Authenticated Required : YES
Authorized Required : YES
Response Status : 200
```
### Update a todo with new info (Owner only) :

```sh
URL: https://ancient-brook-85580.herokuapp.com/api/todos/:id
METHOD : PUT
Authenticated Required : YES
Authorized Required : YES
Response Status : 200
```
### Update a todo with new info (Owner only) :

```sh
URL: https://ancient-brook-85580.herokuapp.com/api/todos/:id
METHOD : PATCH
Authenticated Required : YES
Authorized Required : YES
Response Status : 200
```

License
----

**Free Software, Yeah!**