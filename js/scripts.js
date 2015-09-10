function Message(message){
  this.message = message;
}

Message.prototype.getString = function(){
  var message = this.message;
  var string = message.replace(/[\s.,:!@#$%^&*();'"?/><{}|`~+=_-]/g,"");
  return string;
}

Message.prototype.getColumn = function(){
  var string = this.getString();
  var length = string.length;
  var columns = Math.ceil(Math.sqrt(length));
  return columns;
}

Message.prototype.getRow = function(){
  var string = this.getString();
  var length = string.length;
  var columns = this.getColumn();
  var rows = Math.ceil(length/columns);
  return rows;
}

Message.prototype.getArray = function(){
  var string = this.getString();
  var split = string.split('')
  return split;
}

$(function(){
  $('form#message').submit(function(event){
    event.preventDefault();
    var messageInput = $('input#message').val();
    var message = new Message(messageInput);
    var string = message.getString();
    var length = string.length;
    var columns = message.getColumn();
    var rows = message.getRow();
    var split = message.getArray();

    var coded = []
    var j = 0
    var l = 0

    for (var k = 0; k < rows; k++){
      for (var i = 0; i < columns; i++){
        if(split[j + l] !== undefined){
          coded.push(split[j + l])
        }
        j += rows
      }
      l += 1
      j = 0
    }

    codedMessage = []
    insertSpaces = Math.floor(length / 5);

    var n = 0
    var p = 0

    for (var o = 0; o < insertSpaces; o++){
      for (var m = 0; m < 5; m++){
        codedMessage.push(coded[n + p])
        n += 1
      }
      codedMessage.push(' ')
      p += 5
      n = 0
    }

    var position = codedMessage.length - insertSpaces
    var remaining = length - position

    for(var i = 0; i < remaining; i++){
      codedMessage.push(coded[position])
      position ++
    }

    finalMessage = codedMessage.join('')

    $('.coded').text(finalMessage);
  });
});

// codedMessage = []
// insertSpaces = Math.floor(length / 5);
//
// var n = 0
// var p = 0
//
// for (var o = 0; o < insertSpaces; o++){
//   for (var m = 0; m < 5; m++){
//     codedMessage.push(coded[n + p])
//     n += 1
//   }
//   codedMessage.push(' ')
//   p += 5
//   n = 0
// }

//     coded = coded.join('').split('')
//
//     codedMessage = []
//     insertSpaces = Math.ceil(length / 5);
//
// var ticker = 0
// var max = columns*columns
//
//     var n = 0
//     var p = 0
//
//     for (var o = 0; o < insertSpaces; o++){
//       for (var m = 0; m < 5;){
//         if(coded[n+p] !== undefined){
//           codedMessage.push(coded[n + p])
//           n += 1
//           m ++
//           ticker ++
//           if(ticker === max){
//             break
//           }
//         }else{
//           n += 1
//           ticker ++
//           if(ticker === max){
//             break
//           }
//         }
//       }
//       codedMessage.push(' ')
//       p += 5
//       n = 0
//     }
