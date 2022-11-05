const { gql } = require('apollo-server');

// gql is a tagged template literal function, used for wrapping GraphQL schema strings like the schema definition.
const typeDefs = gql`
  # Schema definitions go here. Track is a GraphQL object type.
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    # Fields go here.
    "The ID of the track."
    id: ID!
    "The track's title."
    title: String!
    "The track's main author."
    author: Author!
    "The track's main illustration to display in track card or track page detail."
    thumbnail: String
    "The track's approximate length to complete, in minutes."
    length: Int
    "The number of modules this track contains."
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    # Fields go here.
    "ID of the author - should match the ID of the user in the database"
    id: ID!
    "Name of the author"
    name: String!
    "Photo of the author"
    photo: String
  }

  # Query is a special type that defines the entry point of every GraphQL query.
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }
`;

module.exports = typeDefs;