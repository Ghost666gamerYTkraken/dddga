var names = {};
//DONT CHANGE NAME! COPYRIGHT SCRIPT
//NO CAMBIAR NOMBRE! COPYRIGHT SCRIPT
names.nameList = [
    "KaKo™YOUTUBE!"
    
];

names.getRandomName = function() {
    return names.nameList[Math.floor((Math.random() * names.nameList.length))];
};

module.exports = names;
