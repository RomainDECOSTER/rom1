const app = require("./src/config/express")();

import config from "./src/config/application";

const server = app.listen(config.PORT, () => {
  console.log(`Express server listening on port ${config.PORT}.`);
});
