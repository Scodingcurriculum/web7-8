// List of lessons and their subfolders
const lessons = [
  { id: "L01", name: "Lesson 1" },
  { id: "L02", name: "Lesson 2" },
  { id: "L03", name: "Lesson 3" },
  { id: "L04", name: "Lesson 4" },
  { id: "L05", name: "Lesson 5" },
  { id: "L06", name: "Lesson 6" },
  { id: "L07", name: "Lesson 7" },
  { id: "L08", name: "Lesson 8" },
  { id: "L09", name: "Lesson 9" },
  { id: "L10", name: "Lesson 10" },
  { id: "L11", name: "Lesson 11" },
  { id: "L13", name: "Lesson 13" },
  { id: "L14", name: "Lesson 14" },
  { id: "L15", name: "Lesson 15" },
  { id: "L16", name: "Lesson 16" },
  { id: "L17", name: "Lesson 17" },
  { id: "L18", name: "Lesson 18" },
  { id: "L19", name: "Lesson 19" },
  { id: "L20", name: "Lesson 20" },
  { id: "L21", name: "Lesson 21" },
  { id: "L22", name: "Lesson 22" },
  { id: "L23", name: "Lesson 23" }
];

// Generate dynamic project links
const projectList = document.getElementById("project-list");

lessons.forEach((lesson) => {
  // Main folder link
  const col = document.createElement("div");
  col.classList.add("col-md-4");
  col.innerHTML = `
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-title">${lesson.name}</h5>
        <a href="./${lesson.id}/index.html" target="_blank" class="btn btn-primary mb-2">View Main Demo</a>
        <a href="./${lesson.id}/basic/index.html" target="_blank" class="btn btn-secondary mb-2">View Basic Demo</a>
        <a href="https://github.com/Mimo2k/Web-Demo/tree/main/${lesson.id}/" target="_blank" class="btn btn-warning">View Resources</a>
        <a href="./Tr/${lesson.id}/${lesson.id}.pptx" target="_blank" class="btn btn-success mb-2">View Tr</a>
        <a href="./Hw/${lesson.id}.pdf" target="_blank" class="btn btn-info mb-2">View Hw</a>
        <a href="https://github.com/Mimo2k/Web-7-8-Student-Resource/tree/main/${lesson.id}/" target="_blank" class="btn btn-danger">Student Resources</a>
      </div>
    </div>
  `;
  projectList.appendChild(col);
});



