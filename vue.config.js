module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://your-username.github.io/Task_Tracker_vue",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/Task_Tracker_vue/" : "/",
};
