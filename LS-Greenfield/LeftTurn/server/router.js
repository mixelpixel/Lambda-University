//server router.js

//import dependencies
const express = require('express');

// import controllers
const _ticketController = require('./controllers/_ticket-control');

module.exports = function(app) {

  const ticketRoutes = express.Router();

//==================
// TICKET ROUTES
//==================
  apiRoutes.use('/tickets', ticketRoutes);

  ticketRoutes.post('/create-new-ticket', requireAuth, _ticketController.createTicket);

  app.use('/api', apiRoutes);
}
