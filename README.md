# Projeto Integrador Digital House - ProjetoOPA

Figma: https://www.figma.com/file/XQJdAmq4x7CK38fIJGB6kH/Projeto-Integrador?node-id=0%3A1

# Running

To run project, follow these steps:
- ```npm install``` 
- ```npm start``` 

The project will gonna be available in address localhost:3000.

# Database

Para rodar o banco de dados em ambiente local:
1. Execute o XAMPP ou LAMPP
2. Execute o comando ```sequelize db:migrate```
3. Adicione os itens base manualmente, como a categoria de produtos, por exemplo.

Para criar migrations, execute: ```npx makemigration --name <nome da migração>```