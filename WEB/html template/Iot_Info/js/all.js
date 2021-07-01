$(function() {
    $('#table').bootstrapTable({
      data: [
        {
          'name': '熱處理#1',
          'image': 'img/1.png',
          'follower': '100%',
          'following': 168,
          'snippets': 0
        },
        {
          'name': '熱處理#2',
          'image': 'img/1.png',
          'follower': '70%',
          'following': 213,
          'snippets': 42
        },
        {
          'name': '熱處理#3',
          'image': 'img/1.png',
          'follower': '40%',
          'following': 74,
          'snippets': 567
        },
        {
          'name': '熱處理#4',
          'image': 'img/1.png',
          'follower': '100%',
          'following': 23,
          'snippets': 52
        },
        {
          'name': '熱處理#5',
          'image': 'img/1.png',
          'follower':'100%',
          'following': 123,
          'snippets': 12
        },
        {
          'name': '熱處理#6',
          'image': 'img/1.png',
          'follower':'70%',
          'following': 23,
          'snippets': 42
        },
        {
          'name': '熱處理#7',
          'image': 'img/1.png',
          'follower': '40%',
          'following': 74,
          'snippets': 567
        },
        {
          'name': '熱處理#8',
          'image': 'img/1.png',
          'follower': '90%',
          'following': 23,
          'snippets': 52
        },
        {
          'name': '熱處理#9',
          'image': 'img/1.png',
          'follower': '65%',
          'following': 123,
          'snippets': 12
        },
      ]
    })
  })

  function customViewFormatter (data) {
    var template = $('#profileTemplate').html();
    var view = '';
    $.each(data, function (i, row) {
      view += template
        .replace('%NAME%', row.name)
        .replace('%IMAGE%', row.image)
        .replace('%FOLLOWER%', row.follower)
        .replace('%FOLLOWING%', row.following)
        .replace('%SNIPPETS%', row.snippets)
        .replace('%stutus%', row.snippets);
    })

    return `<div class="row mx-0">${view}</div>`
  }