# cs340Project
##Step 1, part c description:
c) A URL
Include a link to a website that demonstrates accessing a MySQL or MariaDB database and runs queries on it.

If you follow the NodeJS guide (Links to an external site.)Links to an external site. in this module, the queries you need to run are already present in the sample code.

As you are already aware, you can use any web technology platform for your CS340 project so long as 1) you do not use ORMs, (Links to an external site.)Links to an external site. and 2) you write all your SQL queries yourself. The class will officially host content on NodeJS but I am happy to help with Python, PHP, or Ruby.

So, if you decide to use anything other than the NodeJS sample app, the queries to run, in the right order, are

DROP TABLE IF EXISTS diagnostic;
CREATE TABLE diagnostic(id INT PRIMARY KEY, text VARCHAR(255) NOT NULL);
INSERT INTO diagnostic (text) VALUES ("MySQL is working");
SELECT * FROM diagnostic;
