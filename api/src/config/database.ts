import sqlite3 from 'sqlite3';
import { Database } from 'sqlite3';

class DatabaseManager {
  private db: Database;

  constructor() {
    this.db = new sqlite3.Database('./expert-o.db', (err) => {
      if (err) {
        console.error('Error opening database:', err);
      } else {
        console.log('Connected to SQLite database');
        this.initializeDatabase();
      }
    });
  }

  private initializeDatabase(): void {
    // Create users table
    this.db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        name TEXT NOT NULL,
        password_hash TEXT NOT NULL,
        role TEXT NOT NULL CHECK(role IN ('ADMIN', 'CLIENT', 'TALENT')),
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create password reset tokens table
    this.db.run(`
      CREATE TABLE IF NOT EXISTS password_reset_tokens (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL,
        token TEXT NOT NULL UNIQUE,
        expires_at DATETIME NOT NULL,
        used BOOLEAN DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (email) REFERENCES users(email)
      )
    `);

    // Create indexes
    this.db.run('CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)');
    this.db.run('CREATE INDEX IF NOT EXISTS idx_reset_tokens_token ON password_reset_tokens(token)');
    this.db.run('CREATE INDEX IF NOT EXISTS idx_reset_tokens_email ON password_reset_tokens(email)');
  }

  public get(): Database {
    return this.db;
  }

  public close(): void {
    this.db.close((err) => {
      if (err) {
        console.error('Error closing database:', err);
      } else {
        console.log('Database connection closed');
      }
    });
  }
}

export const db = new DatabaseManager();