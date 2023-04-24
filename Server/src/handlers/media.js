const express = require("express");
const mediaRouter = express.Router();
const { generator } = require("./utils");
const { faker } = require("@faker-js/faker");
// baseurl = /api/media/
function createRandomMedia() {
  return {
    id: faker.datatype.uuid(),
    media: faker.image.people(),
    numberheart:  faker.mersenne.rand(30, 0),
    numberStar:  faker.mersenne.rand(10, 0),
    registeredAt: faker.date.past(),
  };
}

// api/media/
mediaRouter.get("/", (req, res) => {
  const page = parseInt(req.query.page);
  const size = parseInt(req.query.size);
  const listMedia = generator(size, createRandomMedia);
  res.json({
    listMedia,
  });
});

module.exports = {
  mediaRouter,
};
