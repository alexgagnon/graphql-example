const { gql } = require('apollo-server-express');

const typeDefs = gql`
  extend type Query {
    books: [Book]
  }

  type Book {
    title: String
    author: Author
  }
`;

const resolvers = {
  Query: {
    books(parent, _, ctx) {
      return ctx.books;
    }
  }
};

module.exports = {
  typeDefs,
  resolvers
};
