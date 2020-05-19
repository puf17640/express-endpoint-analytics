const analytics = { }
module.exports = {
  middleware: (options) => {
    return function(req, _res, next) {
      analytics[req.path] ? analytics[req.path]++ : (analytics[req.path] = 1)
      next()
    }
  },
  analytics
}