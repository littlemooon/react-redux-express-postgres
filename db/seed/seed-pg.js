const pg = require('pg')

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/fred'

const client = new pg.Client(connectionString)
client.connect()

const query = client.query(
  'CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(255) not null)')

query.on('end', () => client.end())
