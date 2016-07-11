import User         from './models/user';
import mongoose     from 'mongoose';
import init         from './config/init';

init();
var config = require('./config');

var db = mongoose.connect(config.db);

let users = [
  { firstname: "Honey",       lastname: "Gingerich",    age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Valeria",     lastname: "Molina",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Sebrina",     lastname: "Brownfield",   age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Buster",      lastname: "Santelli",     age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Lillia",      lastname: "Hamdan",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Brandee",     lastname: "Cather",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Amira",       lastname: "Myerson",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Kris",        lastname: "Patricio",     age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Mina",        lastname: "Culbreath",    age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Shanda",      lastname: "Louden",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Janet",       lastname: "Eckert",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Joyce",       lastname: "Stgelais",     age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Coleen",      lastname: "Nicholls",     age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Zachery",     lastname: "Cripps",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Dorcas",      lastname: "Giroux",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Jerrica",     lastname: "Rasmus",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Dominga",     lastname: "Cifaldi",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Leonia",      lastname: "Sigmund",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Thomas",      lastname: "Southers",     age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Herta",       lastname: "Derringer",    age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Lyman",       lastname: "Jandreau",     age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Kellie",      lastname: "Beaudin",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Scot",        lastname: "Lach",         age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Kristel",     lastname: "Lambright",    age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Diamond",     lastname: "Evanoff",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Matilda",     lastname: "Luque",        age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Barry",       lastname: "Stutler",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Yvone",       lastname: "Cozad",        age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Kyong",       lastname: "Schoonover",   age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Leopoldo",    lastname: "Chauez",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Jed",         lastname: "Hallahan",     age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Marg",        lastname: "Theroux",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Jamaal",      lastname: "Kroll",        age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Nilsa",       lastname: "Myers",        age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Ira",         lastname: "Folger",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Hollis",      lastname: "Hillary",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Tasia",       lastname: "Laning",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Tressie",     lastname: "Hotard",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Hiram",       lastname: "Ravenell",     age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Georgine",    lastname: "Erne",         age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Elliot",      lastname: "Lack",         age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Terese",      lastname: "Hannum",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Berry",       lastname: "Venters",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Jeanette",    lastname: "Hooley",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Sherrie",     lastname: "Pucci",        age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Zachariah",   lastname: "Dougan",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Carisa",      lastname: "Frieden",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Alexandria",  lastname: "Wurst",        age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Tawna",       lastname: "Hogg",         age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Cordell",     lastname: "Paulding",     age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Bessie",      lastname: "Bonham",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Leontine",    lastname: "Datta",        age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Ingrid",      lastname: "Latorre",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Tatyana",     lastname: "Barrick",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Wynell",      lastname: "Trice",        age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Thea",        lastname: "Graf",         age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Jeniffer",    lastname: "Kinch",        age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Beverly",     lastname: "Monreal",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Ruth",        lastname: "Hebron",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Neville",     lastname: "Herald",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Aurore",      lastname: "Charon",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Katy",        lastname: "Rotondo",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Neil",        lastname: "Francese ",    age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Darell",      lastname: "Byrge",        age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Wan",         lastname: "Carabajal",    age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Georgiana",   lastname: "Partain",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Mac",         lastname: "Muncy",        age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Arlena",      lastname: "Nees",         age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Giuseppina",  lastname: "Bertone",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "David",       lastname: "Viola",        age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Chante",      lastname: "Calender",     age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Lynette",     lastname: "Cuffee",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Marianna",    lastname: "Minier",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Bethann",     lastname: "Chickering",   age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Lupita",      lastname: "Senger",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Deandrea",    lastname: "Popp",         age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Lynna",       lastname: "Zazueta",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Brock",       lastname: "Mcninch",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Elda",        lastname: "Danzy",        age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Kira",        lastname: "Zenon",        age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Ferdinand",   lastname: "Berber",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Ellen",       lastname: "Norwood",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Brittanie",   lastname: "Ramero",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Loris",       lastname: "Gondek",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Evelin",      lastname: "Woodside",     age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Gena",        lastname: "Weiland",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Mildred",     lastname: "Haught",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Margert",     lastname: "Bruhn",        age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Nam",         lastname: "Kerbs",        age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Dede",        lastname: "Weinmann",     age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Stephany",    lastname: "Limberg",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Leanna",      lastname: "Acres",        age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Antwan",      lastname: "Schafer",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Brunilda",    lastname: "Mcculloch",    age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Gerry",       lastname: "Vidrio",       age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Pauletta",    lastname: "Crosswhite",   age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Joelle",      lastname: "Innocent",     age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Yaeko",       lastname: "Scudder",      age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Maurice",     lastname: "Vale",         age: 0,   height: 0,  sex: '',  religion: ''},
  { firstname: "Teofila",     lastname: "Welcome",      age: 0,   height: 0,  sex: '',  religion: ''}
];

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

users.map( (userData) => {
  let sex       = ['male','female',''];
  let religion  = ['judaism', 'christianity', 'islam', 'hinduism', 'taoism', 'buddhism', 'sikhism', 'agnostic', 'atheist',''];
  
  let la        = [34.063753,-118.3470494];
  let sf        = [37.757815,-122.50764];

  if(userData.age == 0)     
    userData.age      = parseInt( getRandomArbitrary(18,99) ) ;
  if(userData.height == 0)  
    userData.height   = getRandomArbitrary(10,20).toPrecision(3);
  if(userData.sex === '') 
    userData.sex      = sex[ parseInt( getRandomArbitrary(0,sex.length) ) ];
  if(userData.religion === '')
    userData.religion = religion[ parseInt( getRandomArbitrary(0,religion.length) ) ];
  
  userData.loc      = [getRandomArbitrary(la[0],sf[0]),getRandomArbitrary(la[1],sf[1])];
  
  userData.email    = userData.firstname + '.' + userData.lastname + Math.random().toString().substring(2,7)+'@test.com';
  userData.email = userData.email.toLowerCase();

  var newUser = new User(userData);
  newUser.save(function(err) {
    console.log(err, newUser)    
  });

  
  return;
});