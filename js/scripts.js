function handleForm(event) {
  event.preventDefault();

  const h1Hide = document.querySelector("#h1Hide");
  h1Hide.setAttribute('class', 'hidden');
  const formBody = document.querySelector("#groceryForm");
  formBody.setAttribute('class', 'hidden');

  const arr = document.querySelectorAll('input:checked');
  const arr1 = [];

  arr.forEach(function (i) {
    arr1.push(i.value);
  });

  arr1.sort();


  arr1.forEach(function (i) {
    const pElem = document.createElement('p');
    pElem.append(i.toUpperCase());
    document.body.append(pElem);
  });


}



window.addEventListener("load", function () {
  document.querySelector("form#groceryForm").addEventListener("submit", handleForm);
});