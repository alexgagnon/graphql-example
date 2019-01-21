const { makeExecutableSchema } = require('graphql-tools');
const { gql } = require('apollo-server-express');
const { merge } = require('lodash');
const {
  typeDefs: AuthorTypes,
  resolvers: AuthorResolvers
} = require('./Author');
const { typeDefs: BookTypes, resolvers: BookResolvers } = require('./Book');

// together, type definitions and resolvers make up a schema
const schema = makeExecutableSchema({
  // typedefs are just strings, so we can concat them together
  // the 'typeDefs' property allows us to provide an array of them and
  // it will do it for us
  // a Query type is always required in a schema, and cannot be empty, so that's
  // why we need to prepend with a Query with a bogus property
  typeDefs: [
    gql`
      type Query {
        _init: String
      }
    `,
    AuthorTypes,
    BookTypes
  ],

  // in graphql.js, we can define resolvers as objects, so we can
  // use lodashes 'merge' to turn them into a single object
  resolvers: merge(AuthorResolvers, BookResolvers)
});

module.exports = { schema };
