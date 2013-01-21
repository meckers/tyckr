/*var jScr = document.createElement("script");
jScr.setAttribute("src", "");
document.body.appendChild(jScr);
console.log($);*/

var title = document.title;

var tyckrContainer = document.createElement("div");
tyckrContainer.style.position = "relative";
tyckrContainer.style.width = "400px";
tyckrContainer.style.margin = "15px auto";

var tyckrFrame = document.createElement("iframe");
tyckrFrame.style.position = "fixed";
tyckrFrame.style.top = "0px";
tyckrFrame.style.right = "0px";
tyckrFrame.style.height = "100%";
tyckrFrame.style.width = "400px";
tyckrFrame.style.borderLeft = "3px solid black";

tyckrFrame.setAttribute("src", "http://localhost:9564/?url=" + encodeURI(document.location) + "&title=" + title);

tyckrContainer.appendChild(tyckrFrame);
document.body.appendChild(tyckrContainer);