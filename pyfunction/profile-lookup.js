// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    const lenghtContacts;
    for (let i = 0; i < contacts.length; i++) {
        lenghtContacts = contacts.length[i];
    }
    if(name === contacts[i].firstName){
        if(prop === contacts[i]){
            return contacts[i];
        }
    } 
    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");