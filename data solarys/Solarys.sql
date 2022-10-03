CREATE DATABASE Solarys;
GO 

Use Solarys; 

Create TABLE Acteurices
(
    act_id INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
    act_nom VARCHAR(50) NOT NULL,
    act_prenom VARCHAR(50) NOT NULL,
    act_sex VARCHAR(50) NOT NULL,
    act_date_naissance DATE NOT NULL,
    act_bio TEXT NOT NULL,
);

CREATE TABLE Realisateur(
    rea_id INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    rea_nom VARCHAR(50) NOT NULL,
    rea_prenom VARCHAR(50) NOT NULL,
    rea_sex VARCHAR(50) NOT NULL,
    rea_bio TEXT NOT NULL,
    rea_date_naissance DATE NOT NULL,
    );

CREATE TABLE Genre
(
    gen_id INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
    gen_nom VARCHAR(50) NOT NULL,
    gen_desc VARCHAR(500) NOT NULL,
);

CREATE TABLE Roles(
rol_id INT PRIMARY KEY IDENTITY (1,1) NOT NULL, 
rol_libelle VARCHAR(50) NOT NULL, 
);

CREATE TABLE Articles(
art_id INT PRIMARY KEY IDENTITY (1,1) NOT NULL, 
art_titre VARCHAR(50) NOT NULL, 
art_description TEXT NOT NULL, 
art_restriction_age VARCHAR(30) NOT NULL,
art_affiche    VARCHAR(255) NOT NULL,
art_bande_annonce VARCHAR(255) NOT NULL,
art_moyenne DECIMAL(2,1) NOT NULL, 
);

CREATE TABLE Utilisateurs(
uti_id        INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
uti_pseudo  VARCHAR(15) NOT NULL,
uti_mdp        VARCHAR(30) NOT NULL,
uti_email   VARCHAR(255) NOT NULL,
uti_sign    VARCHAR(255) NOT NULL,
uti_pp      VARCHAR(255) NOT NULL,
uti_rol_id      INT NOT NULL,
CONSTRAINT FK_ROLES_UTILISATEURS FOREIGN KEY (uti_rol_id) REFERENCES Roles (rol_id)
);

CREATE TABLE Ticket(
tic_id INT PRIMARY KEY IDENTITY (1,1) NOT NULL, 
tic_message TEXT NOT NULL, 
tic_date DATE NOT NULL,
tic_suj VARCHAR(255) NOT NULL,
tic_uti_id INT NOT NULL, 
CONSTRAINT FK_UTILISATEURS_TICKET FOREIGN KEY (tic_uti_id) REFERENCES Utilisateurs(uti_id),
); 

CREATE TABLE Commentaire
(
com_id INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
com_date DATE NOT NULL,
com_uti_id INT NOT NULL,
com_art_id INT NOT NULL,
CONSTRAINT FK_UTI_COM FOREIGN KEY (com_uti_id) REFERENCES Utilisateurs (uti_id),
CONSTRAINT FK_ART_COM FOREIGN KEY (com_art_id) REFERENCES Articles (art_id),
); 

CREATE TABLE Evaluer(
CONSTRAINT PK_EVALUER PRIMARY KEY (eva_uti_id, eva_art_id),
    eva_uti_id INT NOT NULL,
    eva_art_id INT NOT NULL,
    note DECIMAL(2,1) NOT NULL,
    CONSTRAINT FK_UTI_EVA FOREIGN KEY (eva_uti_id) REFERENCES Utilisateurs (uti_id),
    CONSTRAINT FK_ART_EVA FOREIGN KEY (eva_art_id) REFERENCES Articles (art_id),
    );

CREATE TABLE Mettre_en_sc�ne
(
CONSTRAINT PK_MES PRIMARY KEY (mes_art_id, mes_rea_id),
mes_art_id INT NOT NULL,
CONSTRAINT FK_ART_MES FOREIGN KEY (mes_art_id) REFERENCES Articles (art_id),
mes_rea_id INT NOT NULL,
CONSTRAINT FK_REA_MES FOREIGN KEY (mes_rea_id) REFERENCES Realisateur (rea_id),
);

CREATE TABLE Aimer(
CONSTRAINT PK_AIMER PRIMARY KEY (aim_uti_id, aim_art_id),
aim_uti_id INT NOT NULL, 
aim_art_id INT NOT NULL, 
CONSTRAINT FK_UTILISATEURS_AIMER FOREIGN KEY (aim_uti_id) REFERENCES Utilisateurs(uti_id),
CONSTRAINT FK_ARTICLES_AIMER FOREIGN KEY (aim_art_id) REFERENCES Articles(art_id),
); 

CREATE TABLE Participer
(
CONSTRAINT PK_PARTICIPER PRIMARY KEY (par_art_id, par_act_id),
par_art_id INT NOT NULL,
par_act_id INT NOT NULL,
CONSTRAINT FK_ARTICLES_PARTICIPER FOREIGN KEY (par_art_id) REFERENCES Articles (art_id),
CONSTRAINT FK_ACTEURICES_PARTICIPER FOREIGN KEY (par_act_id) REFERENCES ACTEURICES (act_id),
)

CREATE TABLE Appartenir(

CONSTRAINT PK_APPARTENIR PRIMARY KEY (app_art_id, app_gen_id),
app_art_id INT NOT NULL,
app_gen_id INT NOT NULL,
CONSTRAINT FK_ARTICLES_APPARTENIR FOREIGN KEY (app_art_id) REFERENCES Articles (art_id),
CONSTRAINT FK_GENRE_APPARTENIR FOREIGN KEY (app_gen_id) REFERENCES Genre (gen_id),
);
