const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const compression = require("compression");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use((req, res, next) => {
  if (req.body) mongoSanitize.sanitize(req.body);
  if (req.params) mongoSanitize.sanitize(req.params);
  next();
});
// app.use(xss());
app.use(hpp());
app.use(compression());
app.use(morgan("dev"));

// Mount routes directly on app
app.use("/auth", require("./routes/auth"));
app.use("/chat", require("./routes/chat"));
app.use("/analytics", require("./routes/analytics"));
app.use("/api/assessment",require("./routes/assessment"));

// Error Handler
app.use(errorHandler);

module.exports = app;
