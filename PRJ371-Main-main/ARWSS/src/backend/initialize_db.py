import sqlite3

def get_db_connection():
    conn = sqlite3.connect('simulation.db')
    conn.row_factory = sqlite3.Row  # Allows accessing columns by name
    return conn

def initialize_db():
    conn = get_db_connection()
    conn.execute('''
        CREATE TABLE IF NOT EXISTS sorting_results (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            year INTEGER NOT NULL,
            plastic INTEGER NOT NULL,
            metal INTEGER NOT NULL,
            paper INTEGER NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.execute('''
        CREATE TABLE IF NOT EXISTS history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            year INTEGER NOT NULL,
            plastic INTEGER NOT NULL,
            metal INTEGER NOT NULL,
            paper INTEGER NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

initialize_db()