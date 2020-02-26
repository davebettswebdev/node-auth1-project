module.exports = (req, res, next) => {
    const path = req.url;
    const loggedIn = req.session && req.session.loggedIn;
    if (path && path.includes('restricted') && !loggedIn ) {
      res.status(400).json({
        message: "Please log in!"
      });
    } else {
      next();
    }
  }