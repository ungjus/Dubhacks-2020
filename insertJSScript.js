//const { Connection, Request } = require("tedious");

const { Connection, Request } = require(['tedious'], function (tedious) {
    //foo is now loaded.
});

const config = {
	authentication: {
	  options: {
		userName: 'azureuser', // update me
		password: 'epicgamers12345.' // update me
	  },
	  type: 'default'
	},
	server: 'mysqlservercmt.database.windows.net', // update me
	options: {
	  database: 'mySampleDatabase', //update me
	  encrypt: true
	}
  };

  const connection = new Connection(config);

  // Attempt to connect and execute queries if connection goes through
  connection.on("connect", err => {
	if (err) {
	  console.error(err.message);
	} else {
	  console.log("connected");
	}
  });

function insertDatabase(sat, act, gpa, black, white, hispanic, asian, other, instate, domestic, privateschool, accepted){
	connection.query('INSERT INTO SURVEY (SAT, ACT, GPA, Black, White, Hispanic, Asian, Other, InState, Domestic, PrivateSchool, Accepted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
	[sat, act, gpa, black, white, hispanic, asian, other, instate, domestic, privateschool, accepted],
		function (err, results, fields) {
			if (err) throw err;
			// console.error('error inserting: ' + err.stack);
			console.log('Inserted ' + results.affectedRows + ' row(s).');
		})
	connection.end(function (err) {
		if (err) throw err;
		else  console.log('Done.')
	});
};
