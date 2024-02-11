const passport = require('passport');
const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth');
const User = require('../models/user');

/**
 * OAuth Strategy Overview
 *
 * - User is already logged in.
 *   - Check if there is an existing account with a provider id.
 *     - If there is, return an error message. (Account merging not supported)
 *     - Else link new OAuth account with currently logged-in user.
 * - User is not logged in.
 *   - Check if it's a returning user.
 *     - If returning user, sign in and we are done.
 *     - Else check if there is an existing account with user's email.
 *       - If there is, return an error message.
 *       - Else create a new account.
 */

const callbackuri =
  process.env.NODE_ENV === 'production'
    ? process.env.CALLBACK_URL
    : 'http://localhost:8080/auth/google/callback';
const strategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    // callbackURL: "https://community-scrapeyard.herokuapp.com/auth/google/CS",
    callbackURL: callbackuri,
    userProfileUrl: 'https://www.googleapis.com.oauth2.v3.userinfo',
  },
  function (accessToken, refreshToken, profile, cb) {
    User.findOrCreate(
      { username: profile.id },
      {
        name: profile._json.name,
        pic: profile._json.picture,
        email: profile._json.email,
      },
      function (err, user) {
        console.log(profile.displayName);
        return cb(err, user);
      }
    );
  }
);

module.exports = strategy;

/**
 * Login Required middleware.
 */
exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};
