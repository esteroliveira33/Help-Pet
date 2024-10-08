import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "helppet",
  entities: ["./database/*.entity/*.ts"],
  migrations: ["./database/migrations/*.ts"],
  synchronize: true,
});
