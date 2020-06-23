const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  "mongodb://localhost/bookSearcher"
  );

const bookSeed = [
    {
        title: 'A Bad Day for Dre',
        author: 'Thomas Quinn',
        description: 'A bad day only seems to get worse as Dre attempts to navigate his day.',
        photo: '',
        link: '#'
    }
]

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });