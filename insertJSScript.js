const { Connection, Request } = require("tedious");

<<<<<<< HEAD
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
=======
// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "azureuser", // update me
      password: "epicgamers12345." // update me
    },
    type: "default"
  },
  server: "mysqlservercmt.database.windows.net", // update me
  options: {
    database: "mySampleDatabase", //update me
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
>>>>>>> 4745075dc8c45b9fd40d3add6aed3903c7740572
      		function (err, results, fields) {
      			if (err) throw err;
					// console.error('error inserting: ' + err.stack);
			console.log('Inserted ' + results.affectedRows + ' row(s).');
	   	})
<<<<<<< HEAD
	   connection.end(function (err) { 
		if (err) throw err;
		else  console.log('Done.') 
=======
	   connection.end(function (err) {
			if (err){
				throw err;
				// console.error('error inserting: ' + err.stack);
				// return;
			} else  connsole.log('Done.')
>>>>>>> 4745075dc8c45b9fd40d3add6aed3903c7740572
		});
};
