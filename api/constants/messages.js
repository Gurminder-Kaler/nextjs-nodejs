const S = "successfully";
module.exports = Object.freeze({
  SUCCESS: {
    TODO: {
      SAVED: "TODO saved " + S,
      UPDATED: "TODO updated " + S,
      DELETED: "TODO deleted " + S,
      FOUND: "TODO found " + S,
    },
    NEWSLETTER: {
      SUBSCRIBED: "Subscribed to newsletter " + S,
      UNSUBSCRIBED: "Un-subscribed to newsletter " + S,
      FETCHED: "Newsletter Emails fetched " + S,
    },
    AUTH: {
      LOGGEDIN: "User logged in " + S,
      PASSWORD_CHANGED: "Password changed " + S,
    },
  },
  FAILURE: {
    TODO_NOT_FOUND: "TODO not found",
    NO_EMAILS_FOUND: "No emails found in the db.",
    ALREADY_SUBSCRIBED: "The email is already subscribed to our newsletter",
    EMAIL_NOT_SUBSCRIBED_TO_NEWSLETTER:
      "The email not subscribed to out newsletter",
  },
});
