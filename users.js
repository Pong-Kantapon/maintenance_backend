var users = [
    {
        id: 1,
        username: 'Chantaramongkol', 
        name: 'Dhorndhan',
        position: 'Manager'
    },
    {
        id: 2,
        username: 'hello',
        name: 'matungmatoom',
        position: 'Boss'
    },
    {
        id:3,
        username: 'Thippawan',
        name: 'pintu',
        position: 'girl'
    }
]

exports.findAll = function() {
    return users
}

exports.findById = function(id) {
    for (var i = 0;i < users.length; i++)
    {
        if(users[i].id == id) return users[i]
    }
}