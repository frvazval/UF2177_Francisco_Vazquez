SELECT c.id_curs, c.Nom, i.nom_idioma,i.nombre_idioma, c.Nivell, c.Tipus, c.Any, c.Hores, c.Preu, c.Places
FROM cursos c 
NATURAL JOIN idiomes i;