# ChromeSafe

Manually save a password in your Google account.

https://lukeclopez.github.io/ChromeSafe/

https://chromesafe.netlify.com/

## Is This Secure?

Check the code for yourself. There is a total of one JavaScript function. If you don't trust it, feel free to clone the source code and run it locally.

## How Do I Use It?

### Hosted Version

[![View Tutorial on Youtube](http://img.youtube.com/vi/oAI_YE-alqU/0.jpg)](https://youtu.be/oAI_YE-alqU)

### Using it Locally

There is more than one way to do it, but note that Google Chrome will not offer to save your password if you simply open the HTML file. It must be served.

If you have Python 3+ installed:

1. Clone or download source code.
2. In the folder where `index.html` is, run `python -m http.server 8000` in the terminal.
3. Visit `http://localhost:8000/`.
