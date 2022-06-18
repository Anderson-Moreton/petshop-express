// UNNUSED: SEARCH HOW TO GET ENV VARIABLES
// const devDbUser = process.env.DEVELOPMENT_DATABASE_USER
// const devDbPassword = process.env.DEVELOPMENT_DATABASE_PASSWORD
// const devDbName = process.env.DEVELOPMENT_DATABASE_NAME

module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "db_dev_opa",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
