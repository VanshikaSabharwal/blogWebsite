import express from "express";

const app = express();
const port = 660;


app.set('view engine', 'ejs');
app.use(express.static("public"));

const blogPosts = [
    { id: 1, title: 'First Post', content: 'This is the content of first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of second post.' }
];

app.get('/', (req, res) =>
    res.render('index', { blogPosts }));

app.get('/post/:id', (req, res) => {
    const postId = req.params.id;
    const post = blogPosts.find(post => post.id === parseInt(postId));
    res.render('post', { post });
});

app.get('/new', (req, res) =>
    res.render('new'));

app.post('/create', express.urlencoded({ extended: true }), (req, res) => {
    const { title, content } = req.body;
    const newPost = { id: blogPosts.length + 1, title, content };
    blogPosts.push(newPost);
    res.redirect('/');
});
app.post('/post/:id/delete', (req, res) => {
    const postId = req.params.id;
    const postIndex = blogPosts.findIndex(post => post.id === parseInt(postId));

    if (postIndex !== -1) {
        blogPosts.splice(postIndex, 1);
    }

    res.redirect('/');
});
app.get('/search', (req, res) => {
    const searchTerm = req.query.q.toLowerCase();

    const searchResults = blogPosts.filter(post => post.title.toLowerCase().includes(searchTerm));
    res.render('search', { searchResults, searchTerm });
});

app.listen(port, () => {
    console.log(`Listening to server at port ${port}`);
});
