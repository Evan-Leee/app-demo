export default (app) => {
  app.use('/', require('./routers/listing'));
  app.use('/user', require('./routers/user'));
}