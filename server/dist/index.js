"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const cors_1 = __importDefault(require("cors"));
const index_1 = require("./Schema/index");
const typeorm_1 = require("typeorm");
const Users_1 = require("./Entities/Users");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const AppDataSource = new typeorm_1.DataSource({
        type: "mysql",
        host: "localhost",
        port: 80,
        username: "root",
        password: "4234",
        database: "graphql",
        synchronize: true,
        logging: true,
        entities: [Users_1.Users],
        subscribers: [],
        migrations: [],
    });
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
        schema: index_1.schema,
        graphiql: true,
    }));
    app.listen(5000, () => console.log("все норм"));
});
main().catch((err) => console.log(err));
