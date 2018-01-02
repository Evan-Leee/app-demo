export default (app) => {
  app.use('/', require('./routers/homepage'));
  app.use('/users', require('./routers/users.js'));
}