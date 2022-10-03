<?php
class Role extends Model{
    public function __construct(){
        $this->table = "Genre";
        $this->getConnection();
    }

    public function findById(string $id){
        $sql = "SELECT * FROM Genre WHERE gen_id = :gen_id";
        $query = $this->_connexion->prepare($sql);
        
        $query->bindValue(':gen_id', $id, PDO::PARAM_INT); 
        // $query->bindValue(':gen_nom', $gen_nom, PDO::PARAM_STR); 
        // $query->bindValue(':gen_desc', $gen_desc, PDO::PARAM_STR); 
        
        $query->execute();
        return $query->fetch(PDO::FETCH_ASSOC);
    }


    public function add(){
            if(isset($_POST["rolSubmit"])){
                
                if(!empty($_POST["rol_libelle"])){
                    
                    $rol_libelle = $_POST["rol_libelle"];
                    
                    $req = "INSERT INTO Roles (rol_libelle) VALUES (:rol_libelle)";
                    
                    $RequestStatement = $this->_connexion->prepare($req);

                    $RequestStatement->bindValue(':rol_libelle', $rol_libelle, PDO::PARAM_STR);
                    
                    $RequestStatement->execute();
                    
                    // on vérifie si le statement =/ false
                    if($RequestStatement){
                        // la bdd rep 00000 si c'est un succès
                        if( $RequestStatement ->errorCode()=='00000'){
                            echo "Réussite de l'insertion ";
                            echo "le rôle ".$rol_libelle." a bien été ajouté. ";
                        }else{
                            echo "Erreur N°".$RequestStatement->errorCode()." lors de l'insertion.";
                        }
                    }else{
                        echo "Erreur dans le format de la requête";
                    }
                }
            }
        }
}

?>