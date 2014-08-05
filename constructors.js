// create a constructor

function Player(name, power, race) {
  this.name = name;
  this.race = race;
  this.power = power < 1000 ? 1000 : power;
  this.hurt = function(damageDone) {
      var tempPower = this.power - damageDone;
    if(tempPower > 0) {
      this.power = tempPower;
    } else {
      this.power = 0;
    console.log("you're dead!");
    }
  };

}

function Weapon(type, damage) {

    this.type = type;
    this.damage = damage;
    // this.attack takes an instance of a Player as a parameter
    // we are under the assumption that Player instance has method .hurt()
    this.attack = function(player) {
      var randNum = Math.floor(Math.random() * 10);
      if(randNum > 5) {
        console.log("pew pew pew!!");
        player.hurt(this.damage);
      } else {
        console.log("you missed!");
      }
    };
}

function World() {}

var coryIzer = new Weapon("hammer", 200);
var torpedo = new Weapon("missle", 5000);

var Charles = new Player("Charles", 9001, "orc");
var Liz = new Player("Liz", 9002, "elf");
var Ryan = new Player("Ryan", 100, "human");


torpedo.attack(Ryan);
coryIzer.attack(Charles);
coryIzer.attack(Charles);
coryIzer.attack(Charles);
coryIzer.attack(Charles);
coryIzer.attack(Charles);
coryIzer.attack(Charles);
coryIzer.attack(Charles);
coryIzer.attack(Charles);



// function Page(pageName) {
//     this.pageName = pageName;
//     this.timeout = 2000;
//     this.render = function(template, $target, data) {
//
//         // do a bunch of stuff that renders a template and adds it to the dom
//
//     };
//
//     this.getData = function(url) {
//       // $.ajax(url) - return the data received
//     };
//
// }
// var home = new Page("homepage");
//
// home.render(homeTmpl, $(".container"), home.getData("http://api.github.com/users/calweb"));
//
//
//
//
//
//
//
//
// var aboutMe = new Page("aboutMe");
//
// aboutMe.render(aboutTmpl, $("article"), aboutMe.getData("http://blog.calvin.io/api/about"));
