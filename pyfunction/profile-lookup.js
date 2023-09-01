
const contacts = [
    {
      firstName: "Gregorius Davin",
      lastName: "Siregar",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Abdul hayyu",
      lastName: "Potter",
      number: "0994372684",
      likes: ["ngawi", "Magic", "Hagrid"],
    },
    {
      firstName: "Sandy",
      lastName: "Tampubolon",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Radith",
      lastName: "ia",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name){
            if(contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop];
            } else {
                return "No such property"
            }
        } 
    }
    return "No such contact"
  }

  lookUpProfile("Radith", "likes");