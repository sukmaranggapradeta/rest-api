# REST API - TODO


### SignUp :
For register user:
```sh
URL: api/signup
```
##### Data Input :
    {
        full_name: "your full_name",
        email: "your email",
        password: "your password"
    }

### SignIn :
For login user:
```sh
URL: api/signin
```
##### Data Input :
    {
        email: "your email",
        password: "your password"
    }

# Features!

| Route            | HTTP   | Description                                                |
|:-----------------|:-------|:-----------------------------------------------------------|
| `/api/todos`     | GET    | Get all user's todos                        |
| `/api/todos/:id` | GET    | Get a single todo (Owner only)      |
| `/api/todos`     | POST   | Create a todo (Authenticated users only)                                 |
| `/api/todos/:id` | DELETE | Delete a todo (Owner only)                                 |
| `/api/todos/:id` | PUT    | Update a todo with new info (Owner only) |
| `/api/todos/:id` | PATCH  | Update a todo with new info (Owner only) |


License
----

**Free Software, Yeah!**
