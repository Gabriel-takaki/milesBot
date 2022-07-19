const needle = require('needle');
const fs = require('fs');
const cronJob = require('cron').job;
// using promises





cronJob('00 35 17 * * *', () => {
	
    needle('post', 'https://hotmilhas.com.br/obrigado/', {email: ' fgcadv@gmail.com', cia: 1, points: 100})
    .then(res => {
        console.log(res.body);
    })
    .catch(err => {
        console.error(err);
    });

}, null, true);

cronJob('00 00 08 * * *', () => {
	
    needle('post', 'https://hotmilhas.com.br/obrigado/', {email: ' fgcadv@gmail.com', cia: 1, points: 100})
    .then(res => {
        console.log(res.body);
    })
    .catch(err => {
        console.error(err);
    });

}, null, true);

cronJob('00 00 20 * * *', () => {
	
    needle('post', 'https://hotmilhas.com.br/obrigado/', {email: ' fgcadv@gmail.com', cia: 1, points: 100})
    .then(res => {
        console.log(res.body);
    })
    .catch(err => {
        console.error(err);
    });

}, null, true);