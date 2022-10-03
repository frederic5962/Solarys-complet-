<?php

class Roles extends Controller{
    public function index(){
        $this->loadModel("Role");
        $Role = $this->Role->getAll();
        
        $this->render('index', compact('Role'));
    }

    public function lire($id){
        $this ->loadModel('Role');
        $role = $this->Role->findById($id);

        $this->render('lire', compact('Role'));
    }

    public function create(){
       
        $this ->loadModel('Role');
        
        $role = $this->Role->add();

        $this->render('create', compact('Role'));
    }

}
?>