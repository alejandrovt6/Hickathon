function helloworld(){
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const jwt = require('jsonwebtoken');
    const { Pool } = requir('pg');


    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'database',
        password: '1234',
        port: 5432, 
    });

    pool.query('SELECT * FROM USERS', (err, res) => {
        if (err){
            console.error(err);
            res.status(500).send('Error connection');
        }
        else {
            res.send(result.rows);
        }
        // console.log(err, res);
        // pool.end();
    });

}


// const form = document.querySelector('form');
// const usernameInput = document.querySelector('#username');
// const passwordInput = document.querySelector('#password');
// const submitButton = document.querySelector('button[type="submit"]');

// form.addEventListener('submit', (event) => {
//     event.preventDefault(); 

//     submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';

//     setTimeout(() => {
//     const usernameValue = usernameInput.value.trim();
//     const passwordValue = passwordInput.value.trim();
//     if (usernameValue === '' || passwordValue === '') {
//         alert('Please enter both a username and password.');
//         submitButton.innerHTML = 'Log in'; 
//         return;
//     }

//     form.submit();
//     }, 2000); 
// });
