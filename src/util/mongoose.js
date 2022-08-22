module.exports = {
  multipleMongoose: function (obj) {
    return obj.map((obj) => obj.toObject());
  },
  singleMongoose: function (obj) {
    return obj ? obj.toObject() : obj;
  },
};
