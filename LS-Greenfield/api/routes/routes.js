module.exports = (app) => {

  const userControllers = require('../controllers/userControllers');
  const postControllers = require('../controllers/postControllers');
  // const commentControllers = require('../controllers/commentControllers');

  app.route('/new-user')
      .post(userControllers.createUser);

  app.route('/login')
      .post(userControllers.login);

  app.route('/new-post')
      .post(postControllers.createPost);

  app.route('/posts')
      .get(postControllers.listPosts);
      // .delete(postControllers.deletePostById);

  // plural or single? I think the plural is just for the list of posts?
  // app.route('/post/:id')
  app.route('/posts/:id')
      .get(postControllers.getPostById)
      .put(postControllers.updatePostById)
      .put(postControllers.addComment);

  // app.route('/posts/:id/comments')
  //     .post(commentControllers.postComment);
  //     .delete(commentControllers.deleteComment);
};
