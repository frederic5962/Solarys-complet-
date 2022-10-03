CREATE LOGIN admin_bdd WITH PASsWORD = 'admin_bdd123', DEFAULT_DATABASE = Solarys;
GO

USE Solarys;
go

CREATE USER admin_bdd for login [admin_bdd];
GO

CREATE ROLE Administrateur;
ALTER ROLE Administrateur ADD MEMBER admin_bdd;
GRANT SELECT ON DATABASE::Solarys TO Administrateur;
GRANT INSERT ON DATABASE::Solarys TO Administrateur;
GRANT UPDATE ON DATABASE::Solarys TO Administrateur;
GRANT DELETE ON DATABASE::Solarys TO Administrateur;
GO