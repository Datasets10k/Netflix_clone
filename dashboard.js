function generateThumbnails(sectionId, keyword) {
  const section = document.getElementById(sectionId);

  for (let i = 1; i <= 15; i++) {
    const img = document.createElement("img");

    // Dynamic image source
    const imageSrc = `https://picsum.photos/seed/${keyword + i}/160/240`;
    const title = `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} ${i}`;
    const description = `Description for ${title}.`;

    img.src = imageSrc;
    img.alt = title;
    img.classList.add("thumbnail");

    // Add click event to open preview popup
    img.addEventListener("click", () => {
      showPreview(title, description, imageSrc);
    });

    section.appendChild(img);
  }
}

// Show movie preview popup
function showPreview(title, description, imageSrc) {
  document.getElementById('popup-title').innerText = title;
  document.getElementById('popup-description').innerText = description;
  document.getElementById('popup-image').src = imageSrc;
  document.getElementById('preview-popup').classList.remove('hidden');
}

// Close movie preview popup
function closePreview() {
  document.getElementById('preview-popup').classList.add('hidden');
}

// Generate thumbnails for each category
generateThumbnails("movies-section", "movie");
generateThumbnails("comedy-section", "comedy");
generateThumbnails("series-section", "series");
generateThumbnails("drama-section", "drama");
generateThumbnails("anime-section", "anime");
