# HNG Stage 0 API creation

This is a public api that returns basic information like email, current datetime in ISO format, and github repository.
It is built using Expressjs, a Nodejs minimalistic framework for building apis fast.
It only accepts a `GET` request.

## Local Setup
To run this application locally, follow the following instructions and run the commands in a terminal of your choice.

1. **Clone repository**
   - *This creates a version of the repository on your local machine.*

*Using SSH*
```bash
git clone ...
```

*Using HTTPS*
```bash
git clone ...
```

2. **Running the App**
   - *This allows you to run the app locally after successfully cloning.*
```bash
# change directory into cloned repo
cd hng_stage_0

# install dependencies
npm install

# run application
npm start
```

- *Console response if all runs successfully*
```bash
Server is up and running on port 3000!!!
```

## BASE URL
`https://blabla.com`
## USAGE
The only possible request is a `GET` request.
### Fetching API
#### Getting Basic Information
`[GET] /api/v1/info`
- Method: `GET`

**Code Snippet**
```javascript
app.get("/api/v1/info", (req, res) => {
  res.status(200).json({
    email: "myemail@email.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/myUsername/github_url"
  });
});
```

**Data Response**
```json
{
   "email": "myemail@email.com",
   "current_datetime": "2025-01-29T06:01:53.022Z",
   "github_url": "https://github.com/myUsername/github_url"
}
```

With the above, all things work well and fine 😌. *Keep Hacking!*

### Technologies Used
- [Nodejs](https://nodejs.org)
- [Expressjs](https://expressjs.com)
