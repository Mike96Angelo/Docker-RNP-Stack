import * as Hapi from '@hapi/hapi'
// import { Pool } from "pg";

// const pool = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.POSTGRES_USER,
//   database: process.env.POSTGRES_DB,
//   password: process.env.POSTGRES_PASSWORD,
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000
// });

const init = async () => {
  const server = new Hapi.Server({
    port: 80,
    host: '0.0.0.0',
  })

  server.route({
    method: 'GET',
    path: '/api',
    handler: async (request, h) => {
      return 'Hello, World'
    },
  })

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
