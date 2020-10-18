const mysql = require('mysql');

var config =
{
	host: 'mysqlservercmt.database.windows.net',
	user: 'azureuser',
	password: 'epicgamer12345.',
	database: 'mySampleDatabase',
	port: 3306,
	ssl: true
};

const conn = new mysql.createConnection(config);

conn.connect(
	function (err) {
		if (err) {
			console.log("!!! Cannot connect !!! Error:" + err.stack);
		}
		else
		{
		   console.log("Connection established.");
	           queryDatabase();
		}
});

function insertDatabase(sat, act, gpa, black, white, hispanic, asian, other, instate, domestic, privateschool, accepted){
       conn.query('INSERT INTO SURVEY (SAT, ACT, GPA, Black, White, Hispanic, Asian, Other, InState, Domestic, PrivateSchool, Accepted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
       [sat, act, gpa, black, white, hispanic, asian, other, instate, domestic, privateschool, accepted],
      		function (err, results, fields) {
      			if (err) console.error('error inserting: ' + err.stack);;
			console.log('Inserted ' + results.affectedRows + ' row(s).');
	   	})
	   conn.end(function (err) {
		if (err){
			console.error('error inserting: ' + err.stack);
			return;
		} else  console.log('Done.')
		});
};
