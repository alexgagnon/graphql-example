const { gql } = require('apollo-server-express');

const typeDefs = gql`
  extend type Query {
    authors: [Author]
    author(name: String!): Author
  }

  type Author {
    name: String
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    authors(parent, args, ctx) {
      return ctx.authors;
    },
    author(parent, args, context, info) {
      return find(context.authors, { name: args.name });
    }
  },

  Author: {}
};

module.exports = {
  typeDefs,
  resolvers
};
