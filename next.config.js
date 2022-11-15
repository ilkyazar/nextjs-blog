const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: process.env.MONGODB_DEV_USERNAME,
        mongodb_password: process.env.MONGODB_DEV_PASSWORD,
        mongodb_clustername: process.env.MONGODB_DEV_CLUSTER,
        mongodb_database: process.env.MONGODB_DEV_DATABASE,
        mongodb_collection: process.env.MONGODB_DEV_COLLECTION,
      },
    };
  }

  return {
    env: {
      mongodb_username: process.env.MONGODB_USERNAME,
      mongodb_password: process.env.MONGODB_PASSWORD,
      mongodb_clustername: process.env.MONGODB_CLUSTER,
      mongodb_database: process.env.MONGODB_DATABASE,
      mongodb_collection: process.env.MONGODB_COLLECTION,
    },
  };
};
