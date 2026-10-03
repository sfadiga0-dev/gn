// --- app.js ---

// 1. عرض البيانات في الجدول
function renderTable() {
    const tableBody = document.getElementById('table-body');
    if(!tableBody) return; // تأكد أننا في الصفحة التي تحتوي الجدول
    
    tableBody.innerHTML = ""; // تفريغ الجدول أولاً
    const citizens = getCitizensData(); // قراءة البيانات من data.js
    
    citizens.forEach(citizen => {
        let row = `<tr>
            <td>${citizen.id}</td>
            <td>${citizen.family}</td>
            <td>${citizen.nameAr} <br> <small>${citizen.nameFr}</small></td>
            <td>${citizen.passport}</td>
            <td>${citizen.status}</td>
            <td>
                <a href="profile.html?id=${citizen.id}" class="btn btn-warning" style="padding: 5px 10px; font-size: 12px;">ملف</a>
                <a href="card.html?id=${citizen.id}" class="btn btn-primary" style="padding: 5px 10px; font-size: 12px;">بطاقة</a>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// 2. تفعيل نموذج الإضافة (Form)
document.addEventListener('DOMContentLoaded', () => {
    renderTable(); // عرض الجدول عند تحميل الصفحة

    const addForm = document.getElementById('add-citizen-form');
    if(addForm) {
        addForm.addEventListener('submit', function(e) {
            e.preventDefault(); // منع تحديث الصفحة عند الضغط على زر الإضافة
            
            // جمع البيانات من الحقول
            let newCitizen = {
                family: document.getElementById('input-family').value,
                nameFr: document.getElementById('input-name-fr').value,
                nameAr: document.getElementById('input-name-ar').value,
                pere: document.getElementById('input-pere').value,
                mere: document.getElementById('input-mere').value,
                dob: document.getElementById('input-dob').value,
                passport: document.getElementById('input-passport').value,
                status: document.getElementById('input-status').value,
                address: document.getElementById('input-address').value,
                phone: document.getElementById('input-phone').value,
                marital: document.getElementById('input-marital').value
            };
            
            // استدعاء دالة الإضافة من data.js
            addNewCitizen(newCitizen);
            
            alert("تمت إضافة الشخص بنجاح وحفظه في النظام!");
            addForm.reset(); // تفريغ الحقول
            renderTable(); // تحديث الجدول ليظهر الشخص الجديد فوراً
        });
    }
});
