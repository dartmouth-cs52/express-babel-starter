import Post from '../models/post_model';


// this cleans the posts because we use id instead of dangling _id
// and we purposefully don't return content here either
const cleanPosts = (posts) => {
  return posts.map(post => {
    return { id: post._id, title: post.title, tags: post.tags.toString(), category: post.category };
  });
};

export const createPost = (req, res) => {
  res.send('post should be created here');
  const post = new Post();
  post.title = req.body.title;
  post.tags = req.body.tags;
  post.category = req.body.category;
  post.author = req.user.username;
  post.save()
  .then(result => {
    res.json({ message: 'Post created!' });
  })
  .catch(error => {
    res.json({ error });
  });
};

export const getPosts = (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) {
      console.log(err);
    }
    res.send(cleanPosts(posts));
  });
};

export const getPost = (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (err) {
      console.log(err);
    }
    res.send(post);
  });
};

export const deletePost = (req, res) => {
  Post.findByIdAndRemove(req.params.id, (err, doc) => {
    if (err) {
      console.log(err);
    }
  });
  res.send('deleted a post');
};


export const updatePost = (req, res) => {
  Post.update({ _id: req.params.id }, { title: req.body.title, tags: req.body.tags, category: req.body.category }, (err, post) => {
    if (err) {
      console.log(err);
    }
    Post.findById(req.params.id, (err, doc) => {
      if (err) {
        console.log(err);
      }
      const update = { id: doc._id, title: doc.title, tags: doc.tags, category: doc.category };
      res.json(update);
    });
  });
};
