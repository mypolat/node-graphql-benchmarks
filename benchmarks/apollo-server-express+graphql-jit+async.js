'use strict'

const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const { createAsyncApolloSchema } = require('../lib/schemas/createApolloSchema')
const { parse } = require('graphql')
const { compileQuery } = require('graphql-jit')

const cache = {}

const app = express()
const schema = createAsyncApolloSchema()
const server = new ApolloServer({
  schema,
  executor: ({ source, context }) => {
    if (!(source in cache)) {
      const document = parse(source)
      cache[source] = compileQuery(schema, document)
    }

    return cache[source].query({}, context, {})
  }
})
server.applyMiddleware({ app })
app.listen(4001)
