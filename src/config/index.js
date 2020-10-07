let PORT = null;
if (process.env.NODE_ENV === "production") {
  PORT = "http:/localhost:8080";
} else {
  PORT = "/api";
}
export default PORT;
