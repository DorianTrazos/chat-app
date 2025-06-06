// const fs = require('fs');
// const path = require('path');
// const usersFile = path.resolve(__dirname, '../../data/users.json');

// const usersController = {};

// usersController.getAllUsers = (req, res) => {
//   fs.readFile(usersFile, (err, data) => {
//     if (err) return res.status(500).json({ error: 'Error reading user file ' });
//     return res.json(JSON.parse(data));
//   });
// };
