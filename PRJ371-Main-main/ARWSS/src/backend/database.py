import sqlite3

def get_db_connection():
    """
    Create a database connection to the SQLite database.
    """
    conn = sqlite3.connect('simulation.db')
    conn.row_factory = sqlite3.Row  # Allows accessing columns by name
    return conn

def initialize_db():
    """
    Initialize the database by creating the necessary tables.
    """
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

def insert_sorting_result(year, plastic, metal, paper):
    """
    Insert a new sorting result into the database.
    
    :param year: The year of the sorting result.
    :param plastic: The amount of plastic sorted.
    :param metal: The amount of metal sorted.
    :param paper: The amount of paper sorted.
    """
    conn = get_db_connection()
    conn.execute('''
        INSERT INTO sorting_results (year, plastic, metal, paper)
        VALUES (?, ?, ?, ?)
    ''', (year, plastic, metal, paper))
    conn.commit()
    conn.close()

def insert_history(year, plastic, metal, paper):
    """
    Insert a new history record into the database.
    
    :param year: The year of the sorting result.
    :param plastic: The amount of plastic sorted.
    :param metal: The amount of metal sorted.
    :param paper: The amount of paper sorted.
    """
    conn = get_db_connection()
    conn.execute('''
        INSERT INTO history (year, plastic, metal, paper)
        VALUES (?, ?, ?, ?)
    ''', (year, plastic, metal, paper))
    conn.commit()
    conn.close()

def get_all_sorting_results():
    """
    Retrieve all sorting results from the database.
    
    :return: A list of sorting results.
    """
    conn = get_db_connection()
    results = conn.execute('SELECT * FROM sorting_results').fetchall()
    conn.close()
    return results

def get_all_history():
    """
    Retrieve all history records from the database.
    
    :return: A list of history records.
    """
    conn = get_db_connection()
    results = conn.execute('SELECT * FROM history').fetchall()
    conn.close()
    return results

# Initialize the database when the script is run
if __name__ == '__main__':
    initialize_db()