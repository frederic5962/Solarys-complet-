<h1>Liste des rôles</h1>

<form action = "/Roles/create/" method= "post" class = "formAjout">
    <div class = "form-example">
        <label for = "rol_libelle"> Nom du rôle : </label>
        <input type = "text" name = "rol_libelle" required>
    </div>
    <div class = "form-example">
        <input type = "submit" name = "rolSubmit" value = "Ajouter le rôle" class = "btnAjout"> </br>
    </div>



<?php foreach($Role as $Role): ?>

<h2>
<a 
href="/mvc/Roles/lire/<?=$Role['rol_id']?>">
<?=$Role['rol_libelle']?> 
</a>
</h2>

<?php endforeach;?>