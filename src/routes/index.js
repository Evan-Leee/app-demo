import listingRouter from './routers/listing';
import userRouter from './routers/user';

export default (app) => {
  app.use('/user', userRouter);
  app.use('/', listingRouter);
}