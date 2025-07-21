CREATE TABLE institutes (
    id SERIAL PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    registration_details JSONB NOT NULL
);

CREATE TABLE boards (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE mediums (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE class_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE standards (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    class_category_id INT REFERENCES class_categories(id)
);

CREATE TABLE subjects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    standard_id INT REFERENCES standards(id)
);

CREATE TABLE schools (
    id SERIAL PRIMARY KEY,
    institute_id INT REFERENCES institutes(id),
    board_id INT REFERENCES boards(id),
    medium_id INT REFERENCES mediums(id),
    class_category_id INT REFERENCES class_categories(id)
);

CREATE TABLE colleges (
    id SERIAL PRIMARY KEY,
    institute_id INT REFERENCES institutes(id),
    university VARCHAR(100) NOT NULL,
    degree_type VARCHAR(50) NOT NULL
);

CREATE TABLE competitive_exam_centers (
    id SERIAL PRIMARY KEY,
    institute_id INT REFERENCES institutes(id),
    exam_type VARCHAR(100) NOT NULL
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    role VARCHAR(50) NOT NULL
);