const analytics = { }
module.exports = {
  middleware: (options = { excludeEndpoints: [] , excludeActions: []}) => {
    options.excludeActions = options.excludeActions.map((action) => action.toLowerCase())
    return function(req, _res, next) {
      if (!options.excludeEndpoints.includes(req.path) 
        && !options.excludeActions.includes(req.method.toLowerCase()))
        analytics[req.path] ? analytics[req.path]++ : (analytics[req.path] = 1)
      next()
    }
  },
  analytics
}