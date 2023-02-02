module.exports = {
  siteMetadata: {
    title: `gear_land`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
};

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

// https://github.com/gatsbyjs/gatsby/issues/28495

// In production we are  railway sets our Port environment variable
// However, we have no env variables in our code because we also assume
// that they are set when deploying via gatsby/railway

// we are unsure if the error is starting with the database host or
// if it's currently defined PORT = 0.0.0.0:$PORT which is what railway says
// to set it to
