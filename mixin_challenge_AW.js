function userProfile(name, address, city, state, zipcode, avatar){
  this.name = name,
  this.address = address,
  this.city = city,
  this.state = state,
  this.zipcode = zipcode,
  this.avatar = avatar
}

var amy = new userProfile('Amy', '418 Atherton', 'charlotte', 'NC', '28203', 'picture');

function getProfileUpdate(){
  //magic happens here...
  //imagine we look at the DOM form to figure out what the user input was and put it in an object
  //then return it

  return {
    name: 'assaf',
    address: 'new address 123'
  }
}

function updateProfile(target, update) {
  Object.assign(target, update);
}

var update = getProfileUpdate();

updateProfile(amy, update);
