# CodeForum

A Free HelpForum for Programmers and Developers

## API - Endpoints

### Authentication

| Type | Route  |     Path Parameters      |    Description     |
| :--: | :----: | :----------------------: | :----------------: |
| POST | /login | body :- req.body.googlId | loging in the User |
| POST | /logut |  body:- req.body.userId  |  logout the User   |

---

### Profile

---

| Type |              Route               |     Path Parameters      |           Description           |
| :--: | :------------------------------: | :----------------------: | :-----------------------------: |
| GET  |         /profile/:userid         |          userId          |   To get the Profile of User    |
| GET  | /profile/:userid/answer/show/:id |  userId , answerid = id  |     To get the User answers     |
| GET  |  /profile/:userid/question/:id   | userId , questionid = id | To get the User Asked Questions |

---

### Questions

---

| Type |                     Route                      |         Path Parameters         |                      Description                      |
| :--: | :--------------------------------------------: | :-----------------------------: | :---------------------------------------------------: |
| GET  |          /questions/:userid/smoothies          |             userId              |         To get All The Questions in the Forum         |
| GET  |     /questions/:userid/UpdateQuestionList      |             userId              |      display a form for creating a new Question       |
| GET  |             /questions/:userid/:id             |      userId ,id=questionId      |          shows more info about one Question           |
| GET  |       /questions/:userid/:id/answer/new        |       userId ,id=answerid       | show text-editor when someone wants to post a Answer  |
| GET  | /questions/:userid/:questionid/answer/show/:id | userId ,questionid, id=answerid |       show detail page for a pariticular answer       |
| POST |     /questions/:userid/UpdateQuestionList      |             userId              |      to add the new Question in database/WebSite      |
| POST |           /questions/:userid/delete            |             userId              |                 to delete a question                  |
| POST |            /:userid/:id/answer/new             |       userId, id=answerId       | to add the new Answer for a question in the Database. |

---

### Answer

---

| Type |              Route              |    Path Parameters    |                  Description                   |
| :--: | :-----------------------------: | :-------------------: | :--------------------------------------------: |
| GET  |    /answer/:userid/show/:id     | userId, id=questionId |   show detail page for a pariticular answer    |
| POST |     /answer/:userid/delete      |        userId         |        to delete a answer of a question        |
| POST |     /answer/:userid/upvote      |        userId         |        to Upvote a answer of a question        |
| POST | /answer/:userid/:id/comment/new |  userId,id=commentId  | to post a new comment for a particular answer. |

---

### Comment

---

| Type |          Route          | Path Parameters |          Description          |
| :--: | :---------------------: | :-------------: | :---------------------------: |
| GET  | /comment/:userid/delete |     userId      | To delete a Comment By a User |

## Tech Used

- NodeJs
- ExpressJs

---

### HomePage of Web-Application :

![snippet1](img/img1.png)

### All Question Screen

![Snippet2](img/AllquestionScreen.png)

### Adding Question Screen :

![snippet3](img/questionAdd.png)

### Display Questions and Related Answers :

![snippet4](img/questionAnswer.png)

### Adding Answer to a Question :

![snippet5](img/answer.png)

### Profile Page of a User :

![snippet6](img/profile.png)

---

### How To run the Project :

1. npm init
2. install all dependencies - npm install

```

body-parser
cookie-parser
ejs
express
mongoose

```

3. nodemon : npm install nodemon -g
4. changes to be made : in package.json file

```
"scripts": {
    "start": "node app.js",
    "devStart": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

5. to run server : npm run devStart

## Terms

```
1. requireAuth :
means Authentication is required before accessing any page.
user will not be allowed to enter any sort of information before loging the system

```

---

### Working Snippet of Project :

[LINK TO SNIPPET]

---

### Some Doubts that I face during working on this project:
