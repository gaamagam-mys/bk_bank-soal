const mainArchiveUrl = "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing";
const archiveUrlsByCourse = {
  "Bahasa Indonesia": "https://drive.google.com/drive/folders/1KhD-cNFi_ZmJWq8Ga7JNcAjN4H8GvKwN?usp=sharing",
  "Bahasa Inggris": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Pancasila": "https://drive.google.com/drive/folders/1W_56WCyVGgocGAk9pHZ2ym6LRnWy6J3P?usp=drive_link",
  "Berpikir Komputasional": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Kalkulus Dasar": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Kewirausahaan": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Logika Informatika": "https://drive.google.com/drive/folders/1jFPqFm-x-KHBS0HWypFK4TKNNzTHayYJ?usp=drive_link",
  "Algoritma dan Pemrograman": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Agama": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Kewarganegaraan": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Kalkulus Lanjut": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Sistem Digital": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Matematika Diskrit": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Basis Data": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Struktur Data": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Literasi Inteligensi Artifisial": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Organisasi dan Arsitektur Komputer": "https://drive.google.com/drive/folders/1lc7edP5rTic_CuqWPvKUY2hf9s8CYWub?usp=drive_link",
  "Aljabar Linier dan Matriks": "https://drive.google.com/drive/folders/1dlZIutifyatxyBxcb1RFm-iEyoK-5WbS?usp=drive_link",
  "Rekayasa Perangkat Lunak": "https://drive.google.com/drive/folders/1JKFG507JttUfk7yotDpwY60MiifZzvfj?usp=sharing",
  "Pemrograman Berorientasi Objek": "https://drive.google.com/drive/folders/1vvBdHVI3VHk6i-2K_PIuXQ6t20SoOk9e?usp=drive_link",
  "Pemrograman Sistem": "https://drive.google.com/drive/folders/1uTDmXEqCXQhhMBRGE-jDY9APaTad27iI?usp=drive_link",
  "Probabilitas dan Statistika": "https://drive.google.com/drive/folders/1OXJJ0DF8Kq1O__BL74dQJAP2S5UC6_DF?usp=sharing",
  "Sistem Operasi": "https://drive.google.com/drive/folders/1B_Y8YgP07tFYE3j0nennGuZP6-9s8T1s?usp=sharing",
  "Pendidikan Anti Korupsi": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Jaringan Komputer": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Pemodelan dan Simulasi": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Strategi Algoritma": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Sistem Informasi": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Sains Data": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Pengembangan Aplikasi Berbasis Platform": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Analisis Numerik": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Etika Profesi": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Inteligensi Artifisial": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Komputasi Paralel dan Terdistribusi": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Interaksi Manusia-Komputer": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Keamanan Informasi": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Komputasi Awan": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Teori Bahasa dan Otomata": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Pengujian dan Implementasi Sistem": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Kuliah Kerja Nyata (KKN)": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Metodologi Penelitian": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Internet of Things (IoT)": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Grafika Komputer": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Pembelajaran Mesin": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Manajemen Proyek Perangkat Lunak": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Pemrosesan Bahasa Alami": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Representasi Pengetahuan dan Penalaran": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Rekayasa Data": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Digital Forensics": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Ethical Hacking": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Software Defined Network (SDN)": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Sistem Multimedia": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Animasi Komputer": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing",
  "Basis Data Multimedia": "https://drive.google.com/drive/folders/1OzJDQa1wDu1bK8OlaoqdmnY17GO0Qzqu?usp=sharing"
};

const coursesBySemester = {
  1: [
    "Bahasa Indonesia", "Bahasa Inggris", "Pancasila", "Berpikir Komputasional",
    "Kalkulus Dasar", "Kewirausahaan", "Logika Informatika", "Algoritma dan Pemrograman"
  ],
  2: [
    "Agama", "Kewarganegaraan", "Kalkulus Lanjut", "Sistem Digital",
    "Matematika Diskrit", "Basis Data", "Struktur Data", "Literasi Inteligensi Artifisial"
  ],
  3: [
    "Organisasi dan Arsitektur Komputer", "Aljabar Linier dan Matriks",
    "Rekayasa Perangkat Lunak", "Pemrograman Berorientasi Objek",
    "Pemrograman Sistem", "Probabilitas dan Statistika", "Sistem Operasi"
  ],
  4: [
    "Pendidikan Anti Korupsi", "Jaringan Komputer", "Pemodelan dan Simulasi",
    "Strategi Algoritma", "Sistem Informasi", "Sains Data",
    "Pengembangan Aplikasi Berbasis Platform", "Analisis Numerik"
  ],
  5: [
    "Etika Profesi", "Inteligensi Artifisial", "Komputasi Paralel dan Terdistribusi",
    "Interaksi Manusia-Komputer", "Keamanan Informasi", "Komputasi Awan",
    "Teori Bahasa dan Otomata", "Pengujian dan Implementasi Sistem", "Kuliah Kerja Nyata (KKN)"
  ],
  6: [
    "Metodologi Penelitian", "Internet of Things (IoT)", "Grafika Komputer",
    "Pembelajaran Mesin", "Manajemen Proyek Perangkat Lunak", "Pemrosesan Bahasa Alami",
    "Representasi Pengetahuan dan Penalaran", "Rekayasa Data", "Digital Forensics",
    "Ethical Hacking", "Software Defined Network (SDN)", "Sistem Multimedia",
    "Animasi Komputer", "Basis Data Multimedia"
  ]
};

const tabs = [...document.querySelectorAll(".semester-tab")];
const coursePanel = document.querySelector("#course-panel");
const searchInput = document.querySelector("#course-search");
const emptyState = document.querySelector("#empty-state");
let activeSemester = "1";

document.querySelectorAll(".main-archive-link").forEach((link) => {
  link.href = mainArchiveUrl;
});

function renderCourses() {
  const query = searchInput.value.trim().toLocaleLowerCase("id");
  const filteredCourses = coursesBySemester[activeSemester]
    .filter((course) => course.toLocaleLowerCase("id").includes(query));

  coursePanel.replaceChildren(...filteredCourses.map((course, index) => {
    const row = document.createElement("article");
    row.className = "course-row";

    const info = document.createElement("div");
    info.className = "course-info";

    const number = document.createElement("span");
    number.className = "course-number";
    number.setAttribute("aria-hidden", "true");
    number.textContent = String(index + 1).padStart(2, "0");

    const details = document.createElement("div");
    const name = document.createElement("h3");
    name.className = "course-name";
    name.textContent = course;
    const type = document.createElement("p");
    type.className = "course-type";
    type.textContent = `Semester ${activeSemester}`;
    details.append(name, type);
    info.append(number, details);

    const link = document.createElement("a");
    link.className = "folder-button";
    link.href = archiveUrlsByCourse[course];
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", `Buka arsip ${course} di Google Drive`);
    link.innerHTML = 'BUKA ARSIP <span aria-hidden="true">↗</span>';
    row.append(info, link);
    return row;
  }));
  emptyState.hidden = filteredCourses.length > 0;
  coursePanel.hidden = filteredCourses.length === 0;
}

function selectSemester(tab) {
  activeSemester = tab.dataset.semester;
  tabs.forEach((item) => {
    const selected = item === tab;
    item.classList.toggle("is-active", selected);
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  coursePanel.setAttribute("aria-labelledby", tab.id);
  renderCourses();
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectSemester(tab));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "Home" ? 0
      : event.key === "End" ? tabs.length - 1
      : (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    tabs[nextIndex].focus();
    selectSemester(tabs[nextIndex]);
  });
});

searchInput.addEventListener("input", renderCourses);
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const menuLabel = menuToggle.querySelector(".sr-only");
menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuLabel.textContent = isExpanded ? "Buka navigasi" : "Tutup navigasi";
  mainNav.classList.toggle("is-open", !isExpanded);
});
mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuLabel.textContent = "Buka navigasi";
    mainNav.classList.remove("is-open");
  }
});

renderCourses();
