<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Human vs AI Text Detection</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/styles.css') }}">
</head>
<body>
    <div class="container">
        <h1>Human vs AI Text Detection</h1>
        <form id="text-form">
            <label for="text">Enter the text to analyze:</label>
            <textarea name="text" id="text" placeholder="Paste your text here..."></textarea>
            <button type="button" id="analyze-button">Analyze</button>
        </form>

        <div id="result-container" class="result">
            <!-- Result will be displayed here -->
        </div>
    </div>

    <script src="{{ url_for('static', filename='js/script.js') }}"></script>
</body>
</html>
