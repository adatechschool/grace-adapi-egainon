-- -- Récupérer la liste des thèmes
-- SELECT * 
-- FROM themes;

-- -- Récupérer toutes les ressources triées par date de mise à jour
-- SELECT * 
-- FROM resources 
-- ORDER BY updated_at DESC;

-- -- Récupérer uniquement le nom et l'url des ressources de type exercice
-- SELECT title, url 
-- FROM resources 
-- WHERE type = 'exercice';

-- -- Récupérer le titre et la description des ressources d'Ada uniquement
-- SELECT title, description 
-- FROM resources 
-- WHERE is_ada = true;

-- -- Récupérer les ressources qui ont la compétence JavaScript associée
-- SELECT *  
-- FROM resources
-- JOIN resources_skills ON resources.id = resources_skills.resource_id
-- WHERE resources_skills.skill_id = 1;

-- SELECT *  
-- FROM resources
-- JOIN resources_skills ON resources.id = resources_skills.resource_id
-- JOIN skills ON resources_skills.skill_id = skill.id
-- WHERE skills.name = "JavaScript";

-- -- Récupérer les ressources dont le titre contient le mot "react" (avec ou sans majuscules)
-- SELECT * 
-- FROM resources
-- WHERE title LIKE '%eact';

-- SELECT * 
-- FROM resources
-- WHERE title LIKE '%react%' OR title LIKE '%React%';

-- SELECT * 
-- FROM resources
-- WHERE title ILIKE '%react%';

-- -- Récupérer la liste des thèmes avec le nombre de ressources par thème
SELECT 
themes.name, 
COUNT(theme_id) AS total
FROM resources
JOIN themes ON resources.theme_id=themes.id
GROUP BY name;

-- -- Récupérer le nom et l'url de toutes les ressources avec un tableau/liste 
-- -- contenant l'ensemble de leurs skills associés
-- SELECT 
-- resources.title,
-- resources.url,
-- STRING_AGG(skills.name, ', ')
-- FROM resources 
-- JOIN resources_skills ON resources_skills.resource_id = resources.id
-- JOIN skills ON resources_skills.skill_id = skills.id
-- GROUP BY resources.title, resources.url;

-- -- string_agg(expression, delimiter)

-- -- Récupérer les 5 ressources les plus récentes avec leur thème
-- SELECT title, themes.name
-- FROM resources
-- JOIN themes ON resources.theme_id = themes.id
-- ORDER BY resources.created_at DESC 
-- LIMIT 3;

-- -- Récupérer toutes les compétences qui ne sont associées à aucune ressource
-- SELECT 
-- skills.name 
-- FROM resources
-- JOIN resources_skills ON resources_skills.resource_id = resources.id
-- RIGHT JOIN skills ON resources_skills.skill_id = skills.id
-- WHERE resources_skills.resource_id IS NULL;

