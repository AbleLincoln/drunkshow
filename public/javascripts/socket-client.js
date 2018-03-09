import $ from "jquery";
// import animation from "./bodymovin";

const io = require('socket.io-client');

var socket = io();
socket.on('new donation', newDonation);

const shotsAudio = document.getElementById('shots');
function newDonation(body) {
  var donations = $('.donations');
  donations.find('#newest').removeAttr('id');
  
  shotsAudio.play();
  const donationElem = `
    <div class="donation" id="newest" style="display: none;">
      <img class="picture" src="${body.picture}") />
      <p class="name">${body.name}</p>
      <p class="amount">${body.amount}</p>
      <p class="memo">${body.memo}</p>
    </div>
  `;
  // animation.play();
  // console.log(animation.)
  // setTimeout(function() {
  //   shotsAudio.play();
  // }, 3000)

  donations.prepend(donationElem);
  $('#newest').fadeIn();
  donations.slideDown();
}