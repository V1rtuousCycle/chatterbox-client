var app = {
  init: function() {}
};

app.send = function(message) {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: "http://parse.hrr.hackreactor.com/chatterbox/classes/messages",
    type: "POST",
    data: message,
    contentType: "application/json",
    success: function(data) {
      console.log("chatterbox: Message sent");
      console.log(data);
    },
    error: function(data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error("chatterbox: Failed to send message", data);
    }
  });
};

app.fetch = function() {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    // url: "http://parse.hrr.hackreactor.com/chatterbox/classes/messages",
    type: "GET",
    contentType: "application/json",
    success: function(data) {
      console.log(data);
    },
    error: function(data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error("chatterbox: Failed to send message", data);
    }
  });
};

app.clearMessages = function() {
  var messages = Array.from($("#chats").children());

  for (vals of messages) {
    vals.remove();
  }
};

app.renderMessage = function(message) {
  var { username, text, roomname } = message;
  $("#chats").append(`<div class='message ${roomname}'>${username}: ${text}</div>`);
};

app.renderRoom = function(roomname) {
  $("#roomSelect").append(`<button class='${roomname}'>${roomname}</button>`);
};

app.handleUsernameClick = function(username) {};

app.handleSubmit = function() {};

var message = {
  username: "shawndrost9",
  text: "trololo",
  roomname: "4chan"
};

var message2 = {
  username: "kiwi454",
  text: "I'm kiwi454",
  roomname: "NewZealand"
};
var message3 = {
  username: "sublime",
  text: "I'm Sublime Text",
  roomname: "Editors"
};

$(document).ready( function() {
  app.renderMessage(message);
  app.renderMessage(message2);
  app.renderMessage(message3);
  app.renderRoom('4chan');
  app.renderRoom('NewZealand');
  app.renderRoom('Editors');

  $('#roomSelect').on('click', 'button', function() {
    var room = $(this).attr('class');
    console.log(room);
    $('.message').hide();
    $(`.${room}`).show();
    console.log(`.${room}`);
  });

  $('#createRoom').on('click', function() {
    var roomName = $('#roomName').val();
    app.renderRoom(roomName);
  });

});