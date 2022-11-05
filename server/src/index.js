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
  playground: true,
  // Options go here.
  // Schema:
  typeDefs: typeDefs,
  // Mock data or resolvers:
  mocks: mocks,
});

server.listen({ port: 8000 }).then(({ url }) => {
  console.log(`
    🚀 Server is running at ${url}
    🔉 Listning on port 8000
    📪 Query at http://localhost:8000
  `);
});
