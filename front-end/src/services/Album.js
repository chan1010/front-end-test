import Api from "./Api";

export const getListAlbum = async (page, size) => {
  try {
    const res = await Api.get("/api/album", { page, size });
    if (res.status === 200) {
      return res.data.listAlbum;
    }
  } catch (err) {
    return console.log(err);
  }
};

export const getListAlbumDetail = async (id) => {
  try {
    const res = await Api.get(`/api/album/${id}`);
    if (res.status === 200) {
      return res.data.albumDetail;
    }
  } catch (err) {
    return console.log(err);
  }
};
