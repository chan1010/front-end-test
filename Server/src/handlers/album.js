const express = require("express");
const albumRouter = express.Router();
const { generator } = require("./utils");
const { faker } = require("@faker-js/faker");
// baseurl = /api/albums/
function createRandomAlbum() {
  return {
    id: faker.datatype.uuid(),
    slug: faker.lorem.slug(),
    thumnail: faker.image.image(),
    title: faker.lorem.lines(),
    numberVideos: faker.mersenne.rand(50, 0),
    numberPhotos:faker.mersenne.rand(200, 0),
    numberheart:  faker.mersenne.rand(30, 0),
    numberStar:  faker.mersenne.rand(10, 0),
    registeredAt: faker.date.past(),
    isMark: Math.random() < 0.1
  };
}
function createRandomAlbumDetail() {
  return {
    id: faker.datatype.uuid(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(2, "<br/>\n"),
    numberVideos: faker.mersenne.rand(50, 0),
    numberPhotos:faker.mersenne.rand(200, 0),
    numberMedias:faker.mersenne.rand(200, 0),
    numberheart:  faker.mersenne.rand(30, 0),
    numberStar:  faker.mersenne.rand(10, 0),
    registeredAt: faker.date.past(),
  };
}
function createRandomPhoto() {
  return {
    id: faker.datatype.uuid(),
    thumnail: faker.image.image(480,480),
    title: faker.lorem.sentence(),
    isHeart: Math.random() < 0.1,
    isMark: Math.random() < 0.1,
    numberheart:  faker.mersenne.rand(30, 0),
    numberStar:  faker.mersenne.rand(10, 0),
    registeredAt: faker.date.past(),
  };
}

// api/album/
albumRouter.get("/", (req, res) => {
  const page = parseInt(req.query.page);
  const size = parseInt(req.query.size);
  const listAlbum = generator(size, createRandomAlbum);
  res.json({
    listAlbum,
  });
});

// api/album/:id
albumRouter.get("/:id?", (req, res) => {
  const albumDetail = createRandomAlbumDetail();
  const listPhotosInAlbum = generator(albumDetail.numberPhotos, createRandomPhoto);
  albumDetail.photos = listPhotosInAlbum
  res.json({
    albumDetail
  });
});

module.exports = {
  albumRouter,
};
