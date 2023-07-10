const title = document.title = "JS Site"
const body = document.body


// META TAGS
let author = document.createElement("meta")
author.setAttribute("name", "author")
author.setAttribute("content", "@akosialbean")
document.head.append(author)

let siteDescription = document.createElement("meta")
siteDescription.setAttribute("name", "description")
siteDescription.setAttribute("content", "Made using plain JS")
document.head.append(siteDescription)
// META TAGS

// BODY ELEMENTS
let containerDiv = document.createElement("div")
containerDiv.setAttribute("id", "containerDiv")

body.prepend(containerDiv)

let header = document.createElement("header")
// header.setAttribute("id", "header")
containerDiv.append(header)

let nav = document.createElement("nav")
containerDiv.append(nav)

let section = document.createElement("section")
containerDiv.append(section)

let aside = document.createElement("aside")
containerDiv.append(aside)

let article = document.createElement("article")
containerDiv.append(article)

let clearFix = document.createElement("div")
containerDiv.append(clearFix)

let footer = document.createElement("footer")
containerDiv.append(footer)

let headerH1 = document.createElement("h1")
header.append(headerH1)
headerH1.innerHTML = "HEADER"

let navH1 = document.createElement("h1")
nav.append(navH1)
navH1.innerHTML = "NAV"

let articleH1 = document.createElement("h1")
article.append(articleH1)
articleH1.innerHTML = "ARTICLE"

let sectionH1 = document.createElement("h1")
section.append(sectionH1)
sectionH1.innerHTML = "SECTION"

let asideH1 = document.createElement("h1")
aside.append(asideH1)
asideH1.innerHTML = "ASIDE"

let footerH1 = document.createElement("h1")
footer.append(footerH1)
footerH1.innerHTML = "FOOTER"

// BODY ELEMENTS

// STYLES
body.style.padding = "0px"
body.style.margin = "0px"
body.style.boxSizing = "border-box"

containerDiv.style.width = "900px"
containerDiv.style.margin = "0px auto"


header.style.background = "#2F4858"
header.style.color = "#fff"
header.style.padding = "27px"
header.style.fontWeight = "bolder"
header.style.boxSizing = "border-box"

nav.style.background = "#33658A"
nav.style.color = "#fff"
nav.style.padding = "27px"
nav.style.fontWeight = "bolder"
nav.style.boxSizing = "border-box"

section.style.background = "#A63446"
section.style.color = "#fff"
section.style.padding = "27px"
section.style.fontWeight = "bolder"
section.style.width = "600px"
section.style.height = "300px"
section.style.boxSizing = "border-box"
section.style.float = "left"

article.style.background = "#F26419"
article.style.color = "#fff"
article.style.padding = "27px"
article.style.fontWeight = "bolder"
article.style.width = "600px"
article.style.height = "300px"
article.style.boxSizing = "border-box"
article.style.float = "left"

aside.style.background = "#F6AE2D"
aside.style.color = "#fff"
aside.style.padding = "27px"
aside.style.fontWeight = "bolder"
aside.style.width = "300px"
aside.style.height = "600px"
aside.style.boxSizing = "border-box"
aside.style.float = "right"

footer.style.background = "#23CE6B"
footer.style.color = "#fff"
footer.style.padding = "27px"
footer.style.fontWeight = "bolder"
footer.style.boxSizing = "border-box"

clearFix.style.clear = "both"

// STYLES