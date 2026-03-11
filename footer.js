const EMAIL = "JoshuaEthanSmith@proton.me"
const MAIN_LINK = "index.html"
const SITEMAP_LINK = "sitemap.html"
const ROADMAP_LINK = "roadmap.html"

const footer = document.createElement("footer")

const header_text = document.createElement("h3")
footer.appendChild(header_text)
header_text.innerHTML =
`
<a href="mailto:${EMAIL}">Contact: ${EMAIL}</a><br>
<a href="${MAIN_LINK}">Main Page</a><br>
<a href="${SITEMAP_LINK}">Sitemap</a><br>
<a href="${ROADMAP_LINK}">Roadmap</a>
`

document.body.appendChild(footer)