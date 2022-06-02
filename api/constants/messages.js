const S = "successfully";
module.exports = Object.freeze({
  SUCCESS: {
    TODO: {
      SAVED: "TODO saved " + S,
      UPDATED: "TODO updated " + S,
      DELETED: "TODO deleted " + S,
      FOUND: "TODO found " + S,
    }
  },
  FAILURE: {
    TODO_NOT_FOUND: "TODO not found ",
  },
});
