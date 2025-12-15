--serial donc pas d'id
INSERT INTO themes (id, name, description)
VALUES 
(1, 'Frontend', 'interface utilisateur'), 
(2, 'Backend', 'couche logicielle accédant à des données'), 
(3, 'Base de données', 'ensemble d''informations'), 
(4, 'DevOps', 'développement et opérations'); 

INSERT INTO resources (id, title, url, description, type, is_ada, theme_id)
VALUES 
(1, 'Introduction à React', 'https://react.dev', 'Guide officiel React', 'guide', false, 1 ), 
(2, 'SQL pour débutants', 'https://example.com/sql', 'Cours SQL complet', 'video', true, 3), 
(3, 'Exercices JavaScript', 'https://example.com/js', 'Pratique JS', 'exercice', true, 1 ), 
(4, 'Créer une API en node', 'https://example.com/node', 'Projet node', 'projet', false, 2); 

INSERT INTO skills (id, name)
VALUES 
(1, 'JavaScript'), 
(2, 'React'), 
(3, 'SQL'), 
(4, 'PostgreSQL'), 
(5, 'Node.js'),
(6, 'HTML');

INSERT INTO resources_skills (resource_id, skill_id)
VALUES
(1, 1), 
(1, 2), 
(2, 3), 
(2, 4), 
(3, 1),
(4, 1), 
(4, 5);