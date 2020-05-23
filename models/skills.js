const skills = [
    {id: 2351213, skill: 'Popcorn Kernel Contributor', description: 'Inspected individual pieces of dried corn and placed them microwave-safe bags.'},
    {id: 9864236, skill: 'Googol Developer', description: 'One time, I typed a "1" followed by one hundred zeroes.'},
    {id: 3415432, skill: "'Silence, The Musical' Writer", description: '...'},
    {id: 0987345, skill: 'Dual Boot Dev', description: 'I code. And when I wear boots, I wear two of them.'},
    {id: 4154235, skill: 'Databasics', description: 'A rudimentary understanding of what a database is.'}
];

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function create(skill) {
    skill.id = Date.now() % 10000000;
    skills.push(skill);
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function update(id, skill) {
    const skillObj = skills.find(skill => skill.id === parseInt(id));
    Object.assign(skillObj, skill);
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}