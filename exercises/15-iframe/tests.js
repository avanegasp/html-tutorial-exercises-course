const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();

jest.dontMock('fs');

it('You should create an <iframe> tag inside the <body>.', function () {
    let body = document.querySelector("body");
    expect(body).toBeTruthy();

    let iframe = body.querySelector("iframe");
    expect(iframe).toBeTruthy();
})

it('The <iframe> tag should have width of "300px" and height of "200px".', function () {
  let body = document.querySelector("body");
  expect(body).toBeTruthy();
  
  let iframe = body.querySelector("iframe");
  expect(iframe).toBeTruthy();
  expect(iframe.width).toBe("300px");
  expect(iframe.height).toBe("200px");
})

it('The <iframe> tag should have the given "src".', function () {
  let body = document.querySelector("body");
  expect(body).toBeTruthy();
  
  let iframe = body.querySelector("iframe");
  expect(iframe).toBeTruthy();
  expect(iframe.src).toContain("https://www.youtube.com/embed/hFQiSDiysWs");
})