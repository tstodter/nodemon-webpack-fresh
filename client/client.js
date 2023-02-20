const other = require('./other.js');
const _ = require('lodash');

other.printwooooo();

const arr1 = [1,2,3,4,5,6,7,8,9,10];
const arr2 = [2,4,6,8,10];
const diff = _.difference(arr1, arr2);

debugger;
const handleResponse = async (response) => {
  const content = document.getElementById('content');
  
  switch(response.status) {
    case 200:
      content.innerHTML = `<b>Success</b>`;
      break;
    case 400:
      content.innerHTML = `<b>Bad Request</b>`;
      break;
    case 404:
      content.innerHTML = `<b>Not Found</b>`;
      break;
    default:
      content.innerHTML = `<p>Status Code not Implemented By Client</p>`;
      break;
  }

  const resObj = await response.json();
  content.innerHTML += `<p>${resObj.message}</p>`;
};

const sendFetch = async (url) => {
  const response = await fetch(url);
  handleResponse(response);
};

const init = () => {
  const successButton = document.querySelector("#success");
  const badRequestButton = document.querySelector("#badRequest");
  const notFoundButton = document.querySelector("#notFound");

  const success = () => sendFetch('/success');
  const badRequest = () => sendFetch('/badRequest');
  const notFound = () => sendFetch('/somethingUnhandled');

  successButton.addEventListener('click', success);
  badRequestButton.addEventListener('click', badRequest);
  notFoundButton.addEventListener('click', notFound);
};

window.onload = init;