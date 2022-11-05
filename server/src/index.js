const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const mocks = {
  Query: () => ({
    // Get 6 mocked tracks for the homepage grid.
    tracksForHome: () => [...new Array(6)],
  }),
  Track: () => ({
    id: () => "track_01",
    title: () => "Astro Kitty, Space Explorer",
    author: () => ({
      name: "Grumpy Cat",
      photo:
        "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
    }),
    thumbnail: () =>
      "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: () => 1210,
    modulesCount: () => 6,
  }),
};

// Shorthand property notation. {typeDefs: typeDefs} is the same as {typeDefs}.
const server = new ApolloServer({
  typeDefs: typeDefs,
  mocks: mocks,
});

server.listen().then(() => {
  console.log(`
    🚀 Server is running!
    🔉 Listning on port 4000
    📪 Query at http://localhost:4000
  `);
});
