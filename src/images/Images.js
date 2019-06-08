import black_panther from './jpgs/black_panther.jpg';
import black_widow from './jpgs/black_widow.jpg';
import captain_america from './jpgs/captain_america.jpg';
import groot from './jpgs/groot.jpg';
import hulk from './jpgs/hulk.jpg';
import iron_man from './jpgs/iron_man.jpg';
import loki from './jpgs/loki.jpg';
import nick_fury from './jpgs/nick_fury.jpg';
import rocket from './jpgs/rocket.jpg';
import spider_man from './jpgs/spider_man.jpg';
import thor from './jpgs/thor.jpg';
import vision from './jpgs/vision.jpg' ;

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

console.log(walkSync("jpgs"));
*/
