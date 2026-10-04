// --- Core Application Logic & UI Handlers ---
function handleLogin(e) {
    e.preventDefault();
    window.location.href = 'admin.html';
}

function logout() {
    if (confirm('هل أنت متأكد من تسجيل الخروج من النظام القنصلي؟')) {
        window.location.href = 'index.html';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    const tableBody = document.getElementById('table-body');
    if (tableBody && typeof getCitizensData === 'function') {
        renderCitizensTable();
    }
});

function renderCitizensTable() {
    const tableBody = document.getElementById('table-body');
    if (!tableBody) return;
    tableBody.innerHTML = '';
    const citizens = getCitizensData();
    
    citizens.forEach(c => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${c.id}</td>
            <td><b>${c.nameAr}</b><br><small style="color:#64748b;">${c.nameFr}</small></td>
            <td>${c.family}</td>
            <td>${c.passport}</td>
            <td>${c.status}</td>
            <td>
                <a href="card.html?id=${c.id}" class="btn btn-warning" style="padding: 5px 10px; font-size: 12px;" target="_blank"><i class="fa-solid fa-id-card"></i> بطاقة</a>
                <a href="profile.html?id=${c.id}" class="btn btn-primary" style="padding: 5px 10px; font-size: 12px;"><i class="fa-solid fa-user"></i> ملف</a>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}
