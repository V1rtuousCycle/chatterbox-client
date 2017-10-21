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
  var messages = Array.from($('#chats').children());

  for (vals of messages) {
    vals.remove();
  }
};

app.renderMessage = function(message) {
  var {username, text, roomname} = message;
  $('#chats').append(`<div>${username}: ${text}</div>`);
};

app.renderRoom = function(roomname) {
  $('#roomSelect').append(`<button class='${roomname}$'>${roomname}</button>`);
};

var message = {
  username: "shawndrost9",
  text: "trololo",
  roomname: "4chan"
};

// YOUR CODE HERE: