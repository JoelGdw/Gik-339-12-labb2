const url = "http://localhost:3000/users"
fetch(url).then((response) => {
  console.log(response);
  return response.json();
}).then((users) => {
  console.log(users);

  let htmlList = `<ul>`;
  users.forEach((user) => {
    htmlList += `<li style="background-color: ${user.color};"> ${user.firstName} ${user.lastName}. <br> ${user.username} </li>`; //skapar ett list-item för varje user med html styling
  });
  htmlList += `</ul>`;
  document.body.insertAdjacentHTML('beforeend', htmlList);
});
    



