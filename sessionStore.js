const session = require('express-session');
const MemoryStore = session.MemoryStore;  // Correct way to access MemoryStore

const store = new MemoryStore();

module.exports = store;