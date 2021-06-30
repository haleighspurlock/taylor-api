//import models
const Album = require('./Album');
const Song = require('./Song');

Song.belongsTo(Album, {

})

Album.hasMany(Song, {

})

module.exports = {
    Album,
    Song
};