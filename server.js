import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// server.use(cors());
server.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3004;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
