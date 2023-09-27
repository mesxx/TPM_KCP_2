let inPresent, outPresent;
const user = [
  {
    id: 1,
    name: "default",
    presence: true,
    presenceTotal: 11,
  },
];

function addUser(id, name) {
  const data = {
    id,
    name,
    presence: false,
    presenceTotal: 0,
  };
  user.push(data);
  return "success add person";
}

function inPresence(id) {
  let index = user.findIndex((item) => item.id == id);
  if (index !== -1) {
    user[index].presence = true;
    return "success in present";
  }
  return "you are not registered";
}

function outPresence(id) {
  for (const el of user) {
    if (el.id === id && el.presence === true) {
      el.presence = false;
      el.presenceTotal++;
      return "success out present";
    }
  }
  return "you are not present today";
}

function getAllPresence() {
  return user;
}

console.log(addUser(2, "Ichsan"));
console.log(addUser(3, "Fauzan"));
console.log("data user: ", getAllPresence());

inPresent = inPresence(2);
console.log(inPresent);
console.log("data user: ", getAllPresence());

outPresent = outPresence(2);
console.log(outPresent);
outPresent = outPresence(3);
console.log(outPresent);
console.log("data user: ", getAllPresence());
