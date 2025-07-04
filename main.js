//Opening or closing side bar

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); })

const filterBtn = document.querySelectorAll('[data-filter-btn]');

//Enabling filter button for larger screens 

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener('click', function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove('active');
    this.classList.add('active');
    lastClickedBtn = this;

  })
}

// Enabling Page Navigation 

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener('click', function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() == pages[i].dataset.page) {
        pages[i].classList.add('active');
        navigationLinks[i].classList.add('active');
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove('active');
        navigationLinks[i].classList.remove('active');
      }
    }
  });
}

// Generate skills table 

function generateTable(data, divId) {
  const div = document.getElementById(divId);
  const table = document.createElement('table');

  data.forEach(rowData => {
    const tr = document.createElement('tr');

    rowData.forEach(cellData => {
      const td = document.createElement('td');
      td.textContent = cellData;
      tr.appendChild(td);
    });

    table.appendChild(tr);
  });

  div.innerHTML = '';
  div.appendChild(table);
}

const progLang = [
  ['C++', 'Java', 'SQL'],
  ['JQuery', 'JavaScript', 'Next.js'],
  ['React.js', 'Vue.js', 'Bootstrap'],
  ['HTML', 'Python']
];

const progKnow = [
  ['Spring Framework', 'Java EE Server', 'Java Servlet'],
  ['MVC Model', 'Spring Security', 'JavaBean'],
  ['JPA', 'JDBC', 'JSP'],
  ['Eureka', 'Docker', 'Jenkins'],
  ['Oracle VirtualBox', 'Microsoft Azure (cloud)', 'Microsoft Azure (OpenAI)'],
  ['SonarQube', 'Unreal Engine', 'SoapUI']
];

const dbKnow = [
  ['Redis', 'MySQL', 'PostgreSQL'],
  ['SQL Server', 'MongoDB', 'Oracle']
];

const manTools = [
  ['Redis', 'MySQL', 'PostgreSQL'],
  ['SQL Server', 'MongoDB', 'Oracle']
];

generateTable(progLang, 'progLang');
generateTable(progKnow, 'progKnow');
generateTable(dbKnow, 'dbKnow');
generateTable(manTools, 'manTools');