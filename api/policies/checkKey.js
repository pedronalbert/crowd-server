module.exports = function(req, res, next) {
  if (req.query.key && req.query.key === '123123xdxd') {
    return next();
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.notFound();
};