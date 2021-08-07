
const contacts = [{
    id: 0,
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521", 
    gender: "male"
  }, 
  {
    id: 1,
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
  }, 
  {
    id: 2,
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
  },
  {
    id: 3,
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
  }, 
  {
    id: 4,
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
  }, 
  {
    id: 5,
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];


for (let contact of contacts) {
    if (contact.gender === "male") {
        contact.gender = "https://image.flaticon.com/icons/png/512/1340/1340619.png"
    }
    if (contact.gender === "female") {
        contact.gender = "https://image.flaticon.com/icons/png/512/766/766514.png"
    }
    if (contact.gender === undefined) {
        contact.gender = "http://pngimg.com/uploads/question_mark/question_mark_PNG91.png"
    }
};

export default contacts
