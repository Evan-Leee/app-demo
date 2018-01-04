export default (app) => {
  app.use('/user', require('./routers/user'));
  app.use('/', require('./routers/listing'));
}