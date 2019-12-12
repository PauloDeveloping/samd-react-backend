DROP USER IF EXISTS 'samdUser'@'localhost';
CREATE USER IF NOT EXISTS 'samdUser'@'localhost' IDENTIFIED BY 'samd123';
GRANT ALL PRIVILEGES ON SAMDDB.* TO 'samdUser'@'localhost';