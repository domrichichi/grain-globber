grains.forEach(function (item) {
  var $ul = $('<ul>');
  var $li = $('<li>');
  var $img = $('<img>');
  var $p = $('<p>');
  var $h2 = $('<h2>');

  $ul.append('li');
  $img.attr('src', 'images/' + item.img');
});
