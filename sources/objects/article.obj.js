export class Article {
  constructor(enterprise, title, author, description, image, url) {
    this.enterprise = enterprise;
    this.title = title;
    this.author = author;
    this.description = description;
    this.image = image;
    this.url = url;
  }
  generateElement() {
    const container = document.createElement("article");
    const img = document.createElement("img");
    const section = document.createElement("section");
    const enterprise = document.createElement("span");
    const link = document.createElement("a");
    const title = document.createElement("h2");
    const author = document.createElement("cite");
    const description = document.createElement("p");

    img.src = this.image;
    img.alt = this.title;
    enterprise.innerText = this.enterprise;
    link.href = this.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    title.innerText = this.title;
    author.innerHTML = `<b>por:&nbsp;</b>${this.author}`;
    description.innerText = this.description;

    link.appendChild(title);
    section.appendChild(enterprise);
    section.appendChild(link);
    section.appendChild(author);
    section.appendChild(description);
    container.appendChild(img);
    container.appendChild(section);

    return container;
  }
}
