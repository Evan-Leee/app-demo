export default (app) => {
  app.use('/', require('./routers/listing'));
}