# Relevant information
# About
A Simplebut Dynamic Working Login page using React,Node JS,Mysql

### Database name : user_data

### Table name : users

### Table columns

- id
- username
- password
- referral

# Queries used

### Creating the database

- CREATE DATABASE user_data;

### Creating the table

- CREATE TABLE user_data ( <br />
  id INT PRIMARY KEY, <br />
  username VARCHAR(50) UNIQUE, <br />
  password VARCHAR(50), <br />
  referral INT DEFAULT 0 <br />
  );

### Selecting the username and password for login / registration

- SELECT username, password FROM users WHERE username="user input"

### Inserting data for registering a new user

- INSERT INTO users SET username='user input',password='user input', referral='user input'

### Adding referral points

- UPDATE users SET referral=referral+1 WHERE username='user input'
