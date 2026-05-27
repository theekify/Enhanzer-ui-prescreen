const DB = {
  active: [
    { id:1,  first:"John",    last:"Doe",      address:"123 Elm Street",      mobile:"555-1234", email:"john.doe@example.com",       dept:"Sales",       desig:"Manager",      updated:"2026-03-03 1:45PM" },
    { id:2,  first:"Jane",    last:"Smith",     address:"456 Oak Avenue",      mobile:"555-5678", email:"jane.smith@example.com",      dept:"Marketing",   desig:"Director",     updated:"2026-03-03 2:30PM" },
    { id:3,  first:"Alice",   last:"Johnson",   address:"789 Pine Road",       mobile:"555-6785", email:"alice.johnson@example.com",   dept:"HR",          desig:"Coordinator",  updated:"2026-03-03 2:35PM" },
    { id:4,  first:"Bob",     last:"Brown",     address:"321 Maple Lane",      mobile:"555-2345", email:"bob.brown@example.com",       dept:"IT",          desig:"Technician",   updated:"2026-03-03 3:05PM" },
    { id:5,  first:"Charlie", last:"Davis",     address:"654 Birch Boulevard", mobile:"555-3456", email:"charlie.davis@example.com",   dept:"Finance",     desig:"Analyst",      updated:"2026-03-03 3:35PM" },
    { id:6,  first:"Eva",     last:"Miller",    address:"987 Cedar Street",    mobile:"555-4567", email:"eva.miller@example.com",      dept:"Operations",  desig:"Supervisor",   updated:"2026-03-03 3:35PM" },
    { id:7,  first:"Frank",   last:"Wilson",    address:"321 Spruce Way",      mobile:"555-9978", email:"frank.wilson@example.com",    dept:"Legal",       desig:"Consultant",   updated:"2026-03-03 4:05PM" },
    { id:8,  first:"Grace",   last:"Lee",       address:"564 Palm Drive",      mobile:"555-6709", email:"grace.lee@example.com",       dept:"Engineering", desig:"Developer",    updated:"2026-03-03 4:20PM" },
    { id:9,  first:"Henry",   last:"Taylor",    address:"887 Fir Street",      mobile:"555-1090", email:"henry.taylor@example.com",    dept:"R&D",         desig:"Scientist",    updated:"2026-03-03 4:00PM" },
    { id:10, first:"Isabel",  last:"Anderson",  address:"123 Aspen Court",     mobile:"555-8401", email:"isabel.anderson@example.com", dept:"Support",     desig:"Agent",        updated:"2026-03-03 4:30PM" },
    { id:11, first:"Jack",    last:"Thomas",    address:"456 Cypress Avenue",  mobile:"555-9910", email:"jack.thomas@example.com",     dept:"QA",          desig:"Inspector",    updated:"2026-03-03 4:45PM" },
    { id:12, first:"Karen",   last:"Jackson",   address:"700 Redwood Road",    mobile:"555-0115", email:"karen.jackson@example.com",   dept:"Logistics",   desig:"Coordinator",  updated:"2026-03-03 5:00PM" },
    { id:13, first:"Liam",    last:"White",     address:"88 Birchwood Lane",   mobile:"555-2200", email:"liam.white@example.com",      dept:"IT",          desig:"Engineer",     updated:"2026-03-03 5:10PM" },
    { id:14, first:"Mia",     last:"Harris",    address:"230 Oakwood Drive",   mobile:"555-3311", email:"mia.harris@example.com",      dept:"Marketing",   desig:"Specialist",   updated:"2026-03-03 5:20PM" },
    { id:15, first:"Noah",    last:"Martin",    address:"910 Elmwood Street",  mobile:"555-4422", email:"noah.martin@example.com]",     dept:"Finance]",     desig:"Accountant]",   updated:"2026-03-03 5:30PM" },
    { id:16, first:"Olivia]",  last:"Garcia]",    address:"45 Mapleton Road]",    mobile:"555-5533]", email:"olivia.garcia@example.com]",   dept:"HR]",          desig:"Manager]",      updated:"2026-03-03 5:45PM" },
  ],
  drafts: [
    { id:17, first:"Peter",  last:"Clark",    address:"12 Willow Way",   mobile:"555-6644", email:"peter.clark@example.com",    dept:"Sales",   desig:"Trainee",  updated:"2026-03-01 9:00AM"  },
    { id:18, first:"Quinn",  last:"Lewis",    address:"34 Sunset Blvd",  mobile:"555-7755", email:"quinn.lewis@example.com",    dept:"IT",      desig:"Intern",   updated:"2026-03-01 9:30AM"  },
    { id:19, first:"Rachel", last:"Robinson", address:"56 Sunrise Ave",  mobile:"555-8866", email:"rachel.robinson@example.com",dept:"Finance", desig:"Analyst",  updated:"2026-03-01 10:00AM" },
  ],
  inactive: [
    { id:20, first:"Sam",    last:"Walker", address:"78 Hillcrest Road",  mobile:"555-9977", email:"sam.walker@example.com",   dept:"Operations",  desig:"Ex-Supervisor",  updated:"2026-12-01 2:00PM"  },
    { id:21, first:"Tina",   last:"Hall",   address:"90 Valley View",     mobile:"555-1100", email:"tina.hall@example.com",    dept:"HR",          desig:"Ex-Coordinator", updated:"2026-11-15 3:00PM"  },
    { id:22, first:"Uma",    last:"Allen",  address:"102 Lakeview Drive", mobile:"555-2211", email:"uma.allen@example.com",    dept:"Marketing",   desig:"Ex-Director",    updated:"2026-10-10 1:00PM"  },
    { id:23, first:"Victor", last:"Young",  address:"114 Riverside Ave",  mobile:"555-3322", email:"victor.young@example.com", dept:"Engineering", desig:"Ex-Developer",   updated:"2026-09-05 11:00AM" },
  ],
  deleted: [
    { id:24, first:"Wendy",  last:"Hernandez", address:"126 Forest Lane",     mobile:"555-4433", email:"wendy.hernandez@example.com", dept:"Legal", desig:"Ex-Consultant", updated:"2026-06-01 9:00AM"  },
    { id:25, first:"Xander", last:"King",      address:"138 Mountain Road",   mobile:"555-5544", email:"xander.king@example.com",     dept:"QA",    desig:"Ex-Inspector",  updated:"2026-05-12 10:00AM" },
  ]
};

let nextId = 100;
let currentTab = "active";
let currentPage = 1;
let search = "";
let sortCol = null;
let sortDir = "asc";
let selectedId = null;
let panelMode = null;
let deleteTarget = null;
let toastTimer;

const ROWS = 8;
const DEPTS = ["Sales","Marketing","HR","IT","Finance","Operations","Legal","Engineering","R&D","Support","QA","Logistics"];
const deptClass = {
  "Sales":"d-sales","Marketing":"d-marketing","HR":"d-hr","IT":"d-it",
  "Finance":"d-finance","Operations":"d-operations","Legal":"d-legal",
  "Engineering":"d-engineering","R&D":"d-rd","Support":"d-support",
  "QA":"d-qa","Logistics":"d-logistics"
};

function dc(dept) { return deptClass[dept] || "d-it"; }

function getFiltered() {
  let data = [...(DB[currentTab] || [])];
  if (search) {
    const q = search.toLowerCase();
    data = data.filter(e =>
      [e.first, e.last, e.email, e.dept, e.desig, e.address, e.mobile].some(v => v.toLowerCase().includes(q))
    );
  }
  if (sortCol) {
    data.sort((a, b) => {
      const av = (a[sortCol] || "").toLowerCase();
      const bv = (b[sortCol] || "").toLowerCase();
      return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
    });
  }
  return data;
}

function totalPages() { return Math.max(1, Math.ceil(getFiltered().length / ROWS)); }

function nowStr() {
  const d = new Date();
  let h = d.getHours(), m = d.getMinutes();
  const ampm = h < 12 ? "AM" : "PM";
  h = h % 12 || 12;
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")} ${h}:${String(m).padStart(2,"0")}${ampm}`;
}

function toast(msg, type = "") {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.className = "toast show" + (type ? " " + type : "");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.className = "toast", 3000);
}

function openPanel() {
  document.getElementById("rightPanel").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}

function closePanel() {
  document.getElementById("rightPanel").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
  panelMode = null;
  selectedId = null;
  document.querySelectorAll("tbody tr").forEach(r => r.classList.remove("selected"));
}


function setDetailFooter(emp) {
  const footer = document.getElementById("panelFooter");
  footer.innerHTML = "";

  const editBtn = document.createElement("button");
  editBtn.className = "btn-edit";
  editBtn.innerHTML = `<img src="icons/edit_detail.png" width="14" height="14" alt="edit"/> Edit`;
  editBtn.onclick = () => showEditForm(emp);

  const delBtn = document.createElement("button");
  delBtn.className = "btn-del";
  delBtn.innerHTML = `<img src="icons/trash_detail.png" width="14" height="14" alt="delete"/> Delete`;
  delBtn.onclick = () => {
    deleteTarget = emp;
    document.getElementById("deleteModalMsg").textContent =
      `Are you sure you want to delete ${emp.first} ${emp.last}? This cannot be undone.`;
    document.getElementById("deleteModal").classList.add("show");
    document.getElementById("overlay").classList.add("show");
  };

  footer.appendChild(editBtn);
  footer.appendChild(delBtn);
}

function showDetail(emp) {
  panelMode = "view";
  selectedId = emp.id;
  document.getElementById("panelTitle").textContent = "Employee Details";

  document.getElementById("panelBody").innerHTML = `
    <div class="detail-avatar">${emp.first[0]}${emp.last[0]}</div>
    <div class="detail-name">${emp.first} ${emp.last}</div>
    <div class="detail-desig">${emp.desig}</div>
    <span class="dept-badge ${dc(emp.dept)} detail-badge">${emp.dept}</span>
    <div class="detail-section">
      <div class="detail-section-title">Contact Information</div>
      <div class="detail-row">
        <img src="icons/mail.png" width="15" height="15" alt=""/>
        <div><div class="detail-row-label">Email</div><div class="detail-row-val"><a href="mailto:${emp.email}">${emp.email}</a></div></div>
      </div>
      <div class="detail-row">
        <img src="icons/phone.png" width="15" height="15" alt=""/>
        <div><div class="detail-row-label">Mobile</div><div class="detail-row-val">${emp.mobile}</div></div>
      </div>
      <div class="detail-row">
        <img src="icons/location.png" width="15" height="15" alt=""/>
        <div><div class="detail-row-label">Address</div><div class="detail-row-val">${emp.address}</div></div>
      </div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Work Information</div>
      <div class="detail-row">
        <img src="icons/briefcase.png" width="15" height="15" alt=""/>
        <div><div class="detail-row-label">Department</div><div class="detail-row-val">${emp.dept}</div></div>
      </div>
      <div class="detail-row">
        <img src="icons/user.png" width="15" height="15" alt=""/>
        <div><div class="detail-row-label">Designation</div><div class="detail-row-val">${emp.desig}</div></div>
      </div>
      <div class="detail-row">
        <img src="icons/clock.png" width="15" height="15" alt=""/>
        <div><div class="detail-row-label">Updated</div><div class="detail-row-val">${emp.updated}</div></div>
      </div>
    </div>
  `;

  setDetailFooter(emp);
  openPanel();

  document.querySelectorAll("tbody tr").forEach(r => r.classList.remove("selected"));
  const row = document.querySelector(`tr[data-id="${emp.id}"]`);
  if (row) row.classList.add("selected");
}

function renderForm(emp) {
  const opts = DEPTS.map(d => `<option value="${d}" ${emp && emp.dept === d ? "selected" : ""}>${d}</option>`).join("");
  document.getElementById("panelBody").innerHTML = `
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">First Name *</label>
        <input class="form-input" id="f-first" value="${emp ? emp.first : ""}" placeholder="John"/>
      </div>
      <div class="form-group">
        <label class="form-label">Last Name *</label>
        <input class="form-input" id="f-last" value="${emp ? emp.last : ""}" placeholder="Doe"/>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Email *</label>
      <input class="form-input" id="f-email" type="email" value="${emp ? emp.email : ""}" placeholder="john.doe@example.com"/>
    </div>
    <div class="form-group">
      <label class="form-label">Mobile *</label>
      <input class="form-input" id="f-mobile" value="${emp ? emp.mobile : ""}" placeholder="555-0000"/>
    </div>
    <div class="form-group">
      <label class="form-label">Address</label>
      <input class="form-input" id="f-address" value="${emp ? emp.address : ""}" placeholder="123 Main Street"/>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Department *</label>
        <select class="form-select" id="f-dept">${opts}</select>
      </div>
      <div class="form-group">
        <label class="form-label">Designation *</label>
        <input class="form-input" id="f-desig" value="${emp ? emp.desig : ""}" placeholder="Manager"/>
      </div>
    </div>
  `;
}

function collectForm() {
  const fields = ["f-first", "f-last", "f-email", "f-mobile", "f-dept", "f-desig"];
  let ok = true;
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el.value.trim()) { el.classList.add("error"); ok = false; }
    else el.classList.remove("error");
  });
  if (!ok) { toast("Please fill in all required fields", "error"); return null; }
  return {
    first:   document.getElementById("f-first").value.trim(),
    last:    document.getElementById("f-last").value.trim(),
    email:   document.getElementById("f-email").value.trim(),
    mobile:  document.getElementById("f-mobile").value.trim(),
    address: document.getElementById("f-address").value.trim(),
    dept:    document.getElementById("f-dept").value,
    desig:   document.getElementById("f-desig").value.trim()
  };
}

function setFormFooter(saveLabel, onSave, onCancel) {
  const footer = document.getElementById("panelFooter");
  footer.innerHTML = "";
  const cancelBtn = document.createElement("button");
  cancelBtn.className = "btn-secondary";
  cancelBtn.textContent = "Cancel";
  cancelBtn.onclick = onCancel;
  const saveBtn = document.createElement("button");
  saveBtn.className = "btn-primary";
  saveBtn.textContent = saveLabel;
  saveBtn.onclick = onSave;
  footer.appendChild(cancelBtn);
  footer.appendChild(saveBtn);
}

function showEditForm(emp) {
  panelMode = "edit";
  document.getElementById("panelTitle").textContent = "Edit Employee";
  renderForm(emp);
  setFormFooter("Save Changes",
    () => {
      const data = collectForm();
      if (!data) return;
      Object.assign(emp, data, { updated: nowStr() });
      closePanel();
      render();
      toast("Employee updated", "success");
    },
    () => showDetail(emp)
  );
}

function showAddForm() {
  panelMode = "add";
  selectedId = null;
  document.getElementById("panelTitle").textContent = "Add Employee";
  renderForm(null);
  setFormFooter("Add Employee",
    () => {
      const data = collectForm();
      if (!data) return;
      DB[currentTab].unshift({ id: nextId++, ...data, updated: nowStr() });
      currentPage = 1;
      closePanel();
      render();
      toast("Employee added", "success");
    },
    () => closePanel()
  );
  openPanel();
}


document.getElementById("confirmDelete").onclick = () => {
  if (!deleteTarget) return;
  const emp = deleteTarget;
  for (const key of Object.keys(DB)) {
    const i = DB[key].findIndex(x => x.id === emp.id);
    if (i !== -1) { DB[key].splice(i, 1); break; }
  }
  document.getElementById("deleteModal").classList.remove("show");
  closePanel();
  deleteTarget = null;
  if (currentPage > totalPages()) currentPage = totalPages();
  render();
  toast(`${emp.first} ${emp.last} deleted`, "error");
};

document.getElementById("cancelDelete").onclick = () => {
  document.getElementById("deleteModal").classList.remove("show");
  if (panelMode === "view") document.getElementById("overlay").classList.add("show");
  else document.getElementById("overlay").classList.remove("show");
  deleteTarget = null;
};

function render() {

  Object.keys(DB).forEach(k => {
    const el = document.getElementById("badge-" + k);
    if (el) el.textContent = DB[k].length;
  });

  // table
  const data = getFiltered().slice((currentPage - 1) * ROWS, currentPage * ROWS);
  const tbody = document.getElementById("tableBody");
  const empty = document.getElementById("emptyState");
  const table = document.getElementById("empTable");

  if (data.length === 0) {
    empty.style.display = "flex";
    table.style.display = "none";
  } else {
    empty.style.display = "none";
    table.style.display = "table";
    tbody.innerHTML = "";
    data.forEach(e => {
      const tr = document.createElement("tr");
      tr.dataset.id = e.id;
      if (selectedId === e.id) tr.classList.add("selected");
      tr.classList.add("fade-in");
      tr.innerHTML = `
        <td>${e.first}</td>
        <td>${e.last}</td>
        <td class="addr">${e.address}</td>
        <td class="mob">${e.mobile}</td>
        <td class="mail"><a href="mailto:${e.email}" onclick="event.stopPropagation()">${e.email}</a></td>
        <td><span class="dept-badge ${dc(e.dept)}">${e.dept}</span></td>
        <td>${e.desig}</td>
        <td class="upd">${e.updated}</td>
      `;
      tr.addEventListener("click", () => showDetail(e));
      tbody.appendChild(tr);
    });
  }


  const cont = document.getElementById("pagination");
  const total = totalPages();
  cont.innerHTML = "";
  const prev = document.createElement("button");
  prev.className = "page-btn";
  prev.innerHTML = `<img src="icons/chevron-left.png" width="11" height="11" alt="prev"/>`;
  prev.disabled = currentPage === 1;
  prev.onclick = () => { currentPage--; render(); };
  cont.appendChild(prev);
  for (let i = 1; i <= total; i++) {
    const btn = document.createElement("button");
    btn.className = "page-btn" + (i === currentPage ? " active" : "");
    btn.textContent = i;
    btn.onclick = () => { currentPage = i; render(); };
    cont.appendChild(btn);
  }
  const next = document.createElement("button");
  next.className = "page-btn";
  next.innerHTML = `<img src="icons/chevron-right-black.png" width="11" height="11" alt="next"/>`;
  next.disabled = currentPage === total;
  next.onclick = () => { currentPage++; render(); };
  cont.appendChild(next);


  document.querySelectorAll("thead th").forEach(th => {
    th.classList.remove("sort-asc", "sort-desc");
    if (th.dataset.col === sortCol) th.classList.add(sortDir === "asc" ? "sort-asc" : "sort-desc");
  });
}


document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentTab = tab.dataset.tab;
    currentPage = 1;
    search = "";
    sortCol = null;
    document.getElementById("searchInput").value = "";
    if (panelMode) closePanel();
    render();
  });
});


document.getElementById("searchInput").addEventListener("input", e => {
  search = e.target.value.trim();
  currentPage = 1;
  render();
});

document.querySelectorAll("thead th.sortable").forEach(th => {
  th.addEventListener("click", () => {
    if (sortCol === th.dataset.col) sortDir = sortDir === "asc" ? "desc" : "asc";
    else { sortCol = th.dataset.col; sortDir = "asc"; }
    currentPage = 1;
    render();
  });
});

document.querySelectorAll(".sidebar-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".sidebar-item").forEach(s => s.classList.remove("active"));
    item.classList.add("active");
  });
});

document.getElementById("addBtn").addEventListener("click", showAddForm);

document.getElementById("overlay").addEventListener("click", () => {
  if (document.getElementById("deleteModal").classList.contains("show")) return;
  closePanel();
});

document.getElementById("closePanel").addEventListener("click", closePanel);

render();