<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.scss">
  <title>Solarys</title>
  

</head>
<body>

<div id = "header-component"></div>

<main>
    <?= $content ?>
</main>

<div id = "footer-component"></div>

<script src="https://kit.fontawesome.com/39a3a8866f.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script src = assets/Header.js type="text/babel"></script>
<script src = assets/Footer.js type="text/babel"></script>
</body>
</html>