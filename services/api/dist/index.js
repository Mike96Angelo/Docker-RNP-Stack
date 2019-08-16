var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as os from "os";
import * as Hapi from "@hapi/hapi";
import { Pool } from "pg";
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});
const init = () => __awaiter(this, void 0, void 0, function* () {
    const server = new Hapi.Server({
        port: 8080,
        host: "0.0.0.0"
    });
    server.route({
        method: "GET",
        path: "/",
        handler: (request, h) => __awaiter(this, void 0, void 0, function* () {
            const users = pool.query("SELECT * from users", []);
            return users;
        })
    });
    server.route({
        method: "GET",
        path: "/host",
        handler: (request, h) => __awaiter(this, void 0, void 0, function* () {
            return os.hostname();
        })
    });
    yield server.start();
    console.log("Server running on %s", server.info.uri);
});
process.on("unhandledRejection", err => {
    console.log(err);
    process.exit(1);
});
init();
//# sourceMappingURL=index.js.map