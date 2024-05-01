/* Write a function that when given a URL as a string, 
parses out just the domain name and returns it as a string*/

function domainName(url) {
  let domainWithoutHttps = url.replace(/(https?:\/\/)?(www\.)?/, "");
  let domainWithoutCom = domainWithoutHttps.replace(/\.com\/?$/, "");
  if (domainWithoutCom.indexOf(".")) {
    return domainWithoutCom;
  } else {
    return domainWithoutCom.slice(0, domainWithoutCom.indexOf("."));
  }
}

domainName("http://google.co.jp");
