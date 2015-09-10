describe('Message', function(){
  it('will return a long string without spaces', function(){
    var message = new Message('ian is cool');
    var string = message.getString();
    expect(string).to.equal('ianiscool');
  });

  it('will return a string without spaces and punctuation', function(){
    var message = new Message('ian: a cool dude!');
    var string = message.getString();
    expect(string).to.equal('ianacooldude');
  });

  it('will remove all punctuation globally, leaving only letters', function(){
    var message = new Message('::!!@@##$$%%^^&&**()ian::;;??//<>');
    var string = message.getString();
    expect(string).to.equal('ian');
  });

  it('will return the square root of a number if perfect square', function(){
    var message = new Message('ian s');
    var column = message.getColumn();
    expect(column).to.equal(2);
  });

  it('will return the square root of a number rounded up if not a perfect square', function(){
    var message = new Message('ian is the best at life');
    var column = message.getColumn();
    expect(column).to.equal(5);
  });

  it('will return the square root of a large number rounded up if not a perfect square', function(){
    var message = new Message('ian is the very best at everything that he puts his mind to, i mean really, he is good! bel');
    var column = message.getColumn();
    expect(column).to.equal(9);
  });

  it('will return the number of rows in a perfect square', function(){
    var message = new Message('ians');
    var row = message.getRow();
    expect(row).to.equal(2);
  });

  it('will return the number of rows in an imperfect square', function(){
    var message = new Message('ian is the very best at everything that he puts his mind to, i mean really, he is good! bel');
    var row = message.getRow();
    expect(row).to.equal(8);
  });

  it('will split a string of characters into an array of individual characters', function(){
    var message = new Message('ians');
    var split = message.getArray();
    expect(split).to.equal['i', 'a', 'n', 's'];
  });
});
