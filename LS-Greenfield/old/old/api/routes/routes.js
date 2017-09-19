module.exports = (app) => {
  //add your new routes here
  // TODO: import in all the user controllers
  const userControllers = require('../controllers/userControllers');
  const postControllers = require('../controllers/postControllers');

  app.route('/new-user')
  .post(userControllers.createUser);
  
  app.route('/login')
    .post(userControllers.login);
  
  app.route('/new-post')
    .post(postControllers.createNewPost);
  
  app.route('/posts')
    .get(postControllers.getAllBlogPosts);

  app.route('/posts/:id')
    .get(postControllers.getPostById)
    .put(postControllers.addCommentsToPost);
};
