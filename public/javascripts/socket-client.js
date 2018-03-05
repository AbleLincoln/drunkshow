import $ from "jquery";
const io = require('socket.io-client');

var socket = io();
socket.on('new donation', newDonation);

function newDonation(body) {
  var donations = $('.donations');
  donations.find('#newest').removeAttr('id');
  
  const donationElem = `
    <div class="donation" id="newest">
      <div class="profile">
        <img class="picture" src="${body.picture}") />
        <p class="name">${body.name}</p>
      </div>
      <p class="amount">${body.amount}</p>
      <p class="memo">${body.memo}</p>
    </div>
  `;

  donations.prepend(donationElem);
}