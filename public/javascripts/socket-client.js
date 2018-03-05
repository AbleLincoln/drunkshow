import $ from "jquery";
const io = require('socket.io-client');

var socket = io();
socket.on('new donation', newDonation);

const shotsAudio = document.getElementById('shots');
function newDonation(body) {
  var donations = $('.donations');
  donations.find('#newest').removeAttr('id');
  
  shotsAudio.play();
  const donationElem = `
    <div class="donation" id="newest">
      <img class="picture" src="${body.picture}") />
      <p class="name">${body.name}</p>
      <p class="amount">${body.amount}</p>
      <p class="memo">${body.memo}</p>
    </div>
  `;

  donations.prepend(donationElem);
}