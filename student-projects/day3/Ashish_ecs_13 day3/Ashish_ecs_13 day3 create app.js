<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learning Async js with example</title>
    <style>
        body{
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .example{
            margin-bottom: 20px;
        }
        .button{
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <h1>Asynchronous JavaScript Example</h1>
    <div class="example">
        <h2>Call back Example</h2>
        <button onClick="runCallbackExample()">Fetch Data with Callback</button>
        <p id="callback-output"></p>
    </div>
    <div class="example">
        <h2>Promise Example</h2>
        <button onClick="runPromiseExample()">Fetch Data with Promise</button>
        <p id="promise-output"></p>
    </div>
    <div class="example">
        <h2>Async Await Example</h2>
        <button onClick="runAsyncAwaitExample()">Fetch Data with Async</button>
        <p id="async-output"></p>
    </div>
    <div class="example">
        <h2>fetch Api Example With Promise</h2>
        <button onClick="fetchWithPromise()">Fetch posts</button>
            <ul id="fetch-api-promise"></ul>
    </div>
    <script src="app.js"></script>
</body>
</html>
