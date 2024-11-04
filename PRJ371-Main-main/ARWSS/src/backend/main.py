from flask import Flask, jsonify, request
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Database connection function
def get_db_connection():
    conn = sqlite3.connect('simulation.db')
    conn.row_factory = sqlite3.Row  # Allows accessing columns by name
    return conn

# Endpoint to get sorting results
@app.route('/results', methods=['GET'])
def get_results():
    try:
        conn = get_db_connection()
        results = conn.execute('SELECT * FROM sorting_results').fetchall()
        conn.close()
        return jsonify([dict(result) for result in results])  # Convert rows to dict
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Endpoint to get history
@app.route('/history', methods=['GET'])
def get_history():
    try:
        conn = get_db_connection()
        results = conn.execute('SELECT * FROM history').fetchall()
        conn.close()
        return jsonify([dict(result) for result in results])  # Convert rows to dict
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Endpoint to add a new sorting result
@app.route('/results', methods=['POST'])
def add_result():
    try:
        new_result = request.get_json()
        year = new_result['year']
        plastics = new_result['plastics']
        paper = new_result['paper']
        metals = new_result['metals']
        
        conn = get_db_connection()
        conn.execute('''
            INSERT INTO sorting_results (year, plastic, metal, paper)
            VALUES (?, ?, ?, ?)
        ''', (year, plastics, metals, paper))
        conn.commit()
        conn.close()
        
        return jsonify({'status': 'success', 'year': year, 'plastics': plastics, 'paper': paper, 'metals': metals}), 201
    except KeyError as e:
        return jsonify({'error': f'Missing key: {str(e)}'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Endpoint to add a new history record
@app.route('/history', methods=['POST'])
def add_history():
    try:
        new_result = request.get_json()
        year = new_result['year']
        plastics = new_result['plastics']
        paper = new_result['paper']
        metals = new_result['metals']
        
        conn = get_db_connection()
        conn.execute('''
            INSERT INTO history (year, plastic, metal, paper)
            VALUES (?, ?, ?, ?)
        ''', (year, plastics, metals, paper))
        conn.commit()
        conn.close()
        
        return jsonify({'status': 'success', 'year': year, 'plastics': plastics, 'paper': paper, 'metals': metals}), 201
    except KeyError as e:
        return jsonify({'error': f'Missing key: {str(e)}'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Endpoint to get real-time sorting results
@app.route('/realtime-results', methods=['GET'])
def get_realtime_results():
    try:
        conn = get_db_connection()
        results = conn.execute('SELECT year, SUM(plastic) as plastic, SUM(metal) as metal, SUM(paper) as paper FROM sorting_results GROUP BY year ORDER BY year DESC LIMIT 10').fetchall()
        conn.close()
        return jsonify([dict(result) for result in results])  # Convert rows to dict
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
