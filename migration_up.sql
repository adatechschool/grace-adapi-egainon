-- Create un type
CREATE TYPE resource_type AS ENUM (
    'guide',
    'video',
    'exercice',
    'projet'
);

-- Create a new table 'themes' with a primary key and columns
CREATE TABLE themes (
    id SERIAL PRIMARY KEY,
    name TEXT ,
    description VARCHAR(255) ,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create a new table 'ressources' with a primary key and columns
CREATE TABLE resources (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    url TEXT,
    description TEXT,
    type resource_type,
    is_ada BOOLEAN,
    theme_id INTEGER REFERENCES themes(id), 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create a new table 'skills' with a primary key and columns
CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    name TEXT 
);

-- Create a new table 'ressources_skills' with a primary key and columns
CREATE TABLE resources_skills (
    resource_id INTEGER REFERENCES resources(id), 
    skill_id INTEGER REFERENCES skills(id)
);

