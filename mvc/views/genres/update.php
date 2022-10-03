<h2> 
<a href="/genres/lire<?= $genre['gen_id'] ?>"> 
</h2>

<h1>
<a href="/genres/lire<?= $genre['gen_id'] ?>"><?= $genre['gen_nom']?></a>
</h1>

<p> 
<?= $genre['gen_desc']?> 
</p>


<form>
    <textarea rows="1" cols="20" wrap="physique" name="nom"><?= $genre['gen_nom']?></textarea><br />
    <textarea rows="5" cols="60" wrap="physique" name="description"><?= $genre['gen_desc']?></textarea><br />
    <input type="button" name="submit" value="Valider les modifications">
</form>