export const crashReporter = (store) => (next) => (action) => {
    try {
      return next(action);
    } catch (error) {
      console.error("error cached >>", error);
      // api.call(e)
    }
  };