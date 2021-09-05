db.auth('admin', 'uber09CAdmin')
db = db.getSiblingDB('uber');
db.createUser(
  {
    user: 'uber09C',
    pwd: 'uber09C123',
    roles: [{ role: 'readWrite', db: 'uber' }],
  },
);