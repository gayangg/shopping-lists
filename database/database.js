import postgres from "https://deno.land/x/postgresjs@v3.4.4/mod.js";

let sql;
if (Deno.env.get("DATABASE_URL")) {
  sql = postgres(Deno.env.get("DATABASE_URL"));
} else {
  sql = postgres({});
  // sql = postgres({
  //   hostname: <dbUrl>,
  //   database: <dbname>,
  //   user: <user>,
  //   password: <pass>,
  //   port: <port>,
  // });
}

export { sql };