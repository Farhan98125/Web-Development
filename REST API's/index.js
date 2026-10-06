// This is the main server file
// all routes are defined here
// all request handling is done here

const express=require('express');
const app=express();
const port=8080;

const path=require('path');
// middleware to parse incoming requests for post data
app.use(express.urlencoded({ extended: true }));

// uuid -v4 version 4
const { v4: uuidv4 } = require('uuid');
uuidv4();


// method-override to use http verbs like patch and delete
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


// set view engine
app.set('view engine', 'ejs');
// set views directory
app.set('views', path.join(__dirname, 'views'));
// set static files directory
app.use(express.static(path.join(__dirname, 'public')));


// we create an arr which works as a database 
let posts=[
  {
    id: uuidv4(),
    username: 'user1',
    content: 'This is the first post'
  },
  {
    id: uuidv4(),
    username: 'user2',
    content: 'This is the second post'
  },
  {
    id: uuidv4(),
    username: 'user3',
    content: 'This is the third post'
  },
];

// GET request api routes
// to see that server is working
app.get('/posts', (req, res) => {
  // we render this data in place of sending by ejs html
  // to show tha data we add posts
  res.render('index.ejs', { posts });
});


    // 2 first get then POST request api routes
    // this will show only get req
app.get('/posts/new', (req, res) => {
  res.render("new.ejs");
});
// to post to add new post
app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  // redirect to the posts page , not need to open extra page
  res.redirect("/posts");

});


// 3 get /posts/:id 
app.get('/posts/:id', (req, res) => {
  let {id}=req.params;
  let post=posts.find((p)=>id==p.id);
  if(post){
    res.render("show.ejs", { post });
  }else{
    res.status(404).send("Post not found");
  }
});


// patch request to update a post
// we will send req form hoppscotch instead of directly from browser
app.patch('/posts/:id', (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id == p.id);
  if (post) {
    post.content = newContent;
    res.send("Patch request working");
  } else {
    res.status(404).send("Post not found");
  }
});

// to show edit form
app.get('/posts/:id/edit', (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id == p.id); 
  if (post) {
    res.render("edit.ejs", { post });
  } else {
    res.status(404).send("Post not found");
  }
});

// delete request to delete a post
app.delete('/posts/:id', (req, res) => {
  let { id } = req.params;
   posts = posts.filter((p) => id == p.id);
   res.redirect("/posts");
  // if (post !== -1) {
  //   posts.splice(post, 1);
  //   res.redirect("/posts");
  // } else {
  //   res.status(404).send("Post not found");
  // }
});

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
}
);


