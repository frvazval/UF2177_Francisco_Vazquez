-- Todos los datos de los cursos
SELECT c.id_curs, c.Nom, i.nom_idioma,i.nombre_idioma, c.Nivell, c.Tipus, c.Any, c.Hores, c.Preu, c.Places
FROM cursos c 
NATURAL JOIN idiomes i;

-- Cursos filtrados por añOPTIMIZE
SELECT c.Nom, i.nom_idioma,i.nombre_idioma, c.Nivell, c.Tipus, c.Any, c.Hores, c.Preu, c.Places
FROM cursos c 
NATURAL JOIN idiomes i
WHERE c.Any = 2016;
