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
    USER: { 
      FETCHED: "User(s) fetched " + S,
    },
    AUTH: {
      LOGGEDIN: "Welcome! You have logged in!",
      PASSWORD_CHANGED: "Password changed " + S,
    },
  },
  FAILURE: {
    TODO_NOT_FOUND: "TODO not found",
    NO_USERS_FOUND: "Users not found",
    AUTH_FAILED: "Check Email/Password",
    NO_USER_FOUND: "User not found",
    NO_EMAILS_FOUND: "No emails found in the db.",
    ALREADY_SUBSCRIBED: "The email is already subscribed to our newsletter",
    EMAIL_NOT_SUBSCRIBED_TO_NEWSLETTER:
      "The email not subscribed to out newsletter",
  },
});
