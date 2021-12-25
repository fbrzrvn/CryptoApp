import config from './config';
import app from './server';

app.listen(config.app.port, () =>
  console.log(`Server is listening on port ${config.app.port}!`),
);
