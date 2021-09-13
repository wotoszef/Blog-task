const dev = {
  baseUrl: "http://localhost:8080",
};

const prod = {
  baseUrl: "https://add-later",
};

const config = process.env.NODE_ENV === "production" ? prod : dev;

export default {
  ...config,
};
