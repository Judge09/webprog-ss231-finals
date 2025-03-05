from flask import Flask, render_template, jsonify, request
from supabase import create_client

app = Flask(__name__)

# 🔹 Supabase Configuration (Replace with your actual credentials)
SUPABASE_URL = "https://ozhimghgcynyhcmgyxbf.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96aGltZ2hnY3lueWhjbWd5eGJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExNzAzNDksImV4cCI6MjA1Njc0NjM0OX0.8Z5qjkKs4ibSJXcwsgo48fs1dJLU8yUBTU_fLqykJMk"

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

@app.route('/')
def intro():
    return render_template('intro.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/feedback')
def feedback():
    return render_template('feedback.html')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

@app.route('/sources')
def sources():
    return render_template('sources.html')

@app.route('/index')
def index():
    return render_template('index.html')

# 🔹 Fetch feedback from Supabase
@app.route('/get_feedback', methods=['GET'])
def get_feedback():
    try:
        response = supabase.table('feedback').select("*").execute()
        return jsonify(response.data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 🔹 Submit feedback to Supabase
@app.route('/submit_feedback', methods=['POST'])
def submit_feedback():
    try:
        data = request.get_json()
        supabase.table('feedback').insert({
            "name": data["name"],
            "section": data["section"],
            "message": data["message"]
        }).execute()
        return jsonify({"success": True})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
