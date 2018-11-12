const loggingMiddleware = (store) => (next) => (action) => {
  console.log('Redux log:', action)
  next(action);
}

export default loggingMiddleware
