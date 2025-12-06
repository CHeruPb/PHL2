import sqlite3

def create_tables():
    conn  = sqlite3.connect('hockey.db')
    cursor = conn.cursor()
    create_table_players = '''
    CREATE TABLE IF NOT EXISTS players (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        number TEXT NOT NULL,
        name TEXT NOT NULL,
        position TEXT NOT NULL,
        games TEXT NOT NULL,
        goals TEXT NOT NULL,
        assists TEXT NOT NULL,
        points TEXT NOT NULL,
        penalties TEXT NOT NULL,
        plusMinus TEXT NOT NULL
    )'''
    cursor.execute(create_table_players)
    conn.commit()
    conn.close()

create_tables()
