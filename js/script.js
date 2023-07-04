function toggleDescription(link) {
    var description = link.previousElementSibling;
    var preview = description.querySelector(".project-preview");
    var button = link;
  
    if (description.classList.contains("hidden")) {
      description.classList.remove("hidden");
      preview.style.display = "none";
      button.innerText = "Read Less";
      description.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    } else {
      description.classList.add("hidden");
      preview.style.display = "inline";
      button.innerText = "Read More";
    }
  }
  