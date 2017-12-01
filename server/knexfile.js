module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_NAME || 'youtube-favorites',
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_NAME_TEST,
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_NAME
  }

};
