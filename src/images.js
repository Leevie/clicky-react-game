import black_panther from './images/black_panther.jpg';
import black_widow from './images/black_widow.jpg';
import captain_america from './images/captain_america.jpg';
import groot from './images/groot.jpg';
import hulk from './images/hulk.jpg';
import iron_man from './images/iron_man.jpg';
import loki from './images/loki.jpg';
import nick_fury from './images/nick_fury.jpg';
import rocket from './images/rocket.jpg';
import spider_man from './images/spider_man.jpg';
import thor from './images/thor.jpg';
import vision from './images/vision.jpg';

const Images = [
  black_panther,
  black_widow,
  captain_america,
  groot,
  hulk,
  iron_man,
  loki,
  nick_fury,
  rocket,
  spider_man,
  thor,
  vision 
];

export default Images


// The code below works in Node, but not React -- need to find a replacement.
/* 
var walkSync = function(dir, filelist) {
    var fs = fs || require('fs'),
        files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
      if (fs.statSync(dir + '/' + file).isDirectory()) {
        filelist = walkSync(dir + '/' + file, filelist);
      }
      else {
        filelist.push(file);
      }
    });
    return filelist;
  };

console.log(walkSync("images"));
*/
