import sqlite3

def new_player():
    try:

        conn  = sqlite3.connect('hockey.db')
        cur = conn.cursor()

        cur.execute('''
           INSERT INTO players (number, name, position, games, goals, assists, points, penalties, plusMinus)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', ('7', 'Булфинч', 'Защитник', '24', '3', '8', '11', '12', '8'))

        conn.commit()
        print('запись выполнена')
    except:
        print('ошибка')
    finally:
        if conn:
            conn.close()

new_player()