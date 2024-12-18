const url = "http://localhost:3000/users"
fetch(url).then((response) => {
  console.log(response);
  return response.json();
}).then((users) => {
  console.log(users);

  let htmlList = `<ul class="border border-dark offset-1 col-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6"  id="nameList">`;
  users.forEach((user) => {
    htmlList += `<li class="m-2 col-sm-4 col-md-4" style="background-color: ${user.color};"> ${user.firstName} ${user.lastName}. <br> ${user.username} </li>`; //skapar ett list-item för varje user med html styling
  });
  htmlList += `</ul>`;
  document.body.insertAdjacentHTML('beforeend', htmlList);
});
    



