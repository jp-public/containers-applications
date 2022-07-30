/* eslint-disable no-undef */
db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database'
    }
  ]
})

db.createCollection('persons')

db.people.insert({ name: 'John Doe', number: '040-1234567' })
db.people.insert({ name: 'Jane Doe', number: '040-1234568' })
