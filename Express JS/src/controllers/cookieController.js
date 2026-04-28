// Cookie - npm install cookie-parser: middleware

// create
export const setCookie = ("/cookie", (req, res) => {
  res.cookie("test", "abcd", {
    maxAge: 1000 * 60, // 1 minutes
    httpOnly: true,
  });
  res.send({ok: true});
});

// read
export const getCookie = ('/get-cookie', (req, res) => {
    // we can read by req.cookies or req.headers.cookie
    res.send({yourCookies: req.cookies});
});

// delete
export const delCookie = ('/logout', (req, res) => {
    res.clearCookie('test');
    res.send('Cookie cleared');
});