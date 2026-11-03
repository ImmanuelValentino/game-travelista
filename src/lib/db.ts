import mysql from "mysql2/promise";

let pool: mysql.Pool | null = null;

export function getDbPool(): mysql.Pool {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST || "localhost",
      port: Number(process.env.DB_PORT) || 3306,
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_NAME || "immanuel_travelista_game",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      connectTimeout: 4000,
    });
  }
  return pool;
}

export async function queryDb<T = any>(sql: string, params?: any[]): Promise<T[]> {
  try {
    const p = getDbPool();
    const [rows] = await p.execute(sql, params);
    return rows as T[];
  } catch (error) {
    console.warn("[Database Connection Warning]:", (error as Error).message);
    return [];
  }
}

