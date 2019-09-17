import app from './app';

export const startServer = port => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
};
