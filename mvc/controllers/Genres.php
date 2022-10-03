<?php

class Genres extends Controller{
    public function index(){
        $this->loadModel("Genre");
        $Genre = $this->Genre->getAll();

        $this->render('index', compact('Genre'));
    }

    public function lire($id){
        $this ->loadModel('Genre');
        $genre = $this->Genre->findById($id);

        $this->render('lire', compact('genre'));
    }

    public function create(){
        // var_dump($_POST);
        // die();
        $this ->loadModel('Genre');
        $genre = $this->Genre->add();

        $this->render('create', compact('genre'));
    }

    public function update($id){
        $this ->loadModel('Genre');
        //$genre = $this->Genre->update();
        $genre = $this->Genre->findById($id);
        $this->render('update', compact('genre'));
    }
    public function delete($id){
     
        $this ->loadModel('Genre');
        $genre = $this->Genre->delete($id);
        $this->render('delete', compact('genre'));
    }
}
?>
