const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
     // target: "http://host.docker.internal:5000",
     // target: "http://localhost:4000",
      target: "http://ec2-44-203-242-177.compute-1.amazonaws.com:5000",


      secure: false,
    })
  );
};
