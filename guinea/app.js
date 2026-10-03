// عرض التاريخ والوقت الحالي في الترويسة
function updateHeaderDate() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.innerText = new Date().toLocaleDateString('ar-SY', options);
    }
}

// محاكاة تسجيل الدخول
function handleLogin(event) {
    event.preventDefault();
    // في النظام الحقيقي هنا يتم التحقق من اسم المستخدم وكلمة المرور
    window.location.href = 'admin.html';
}

// محاكاة تسجيل الخروج
function logout() {
    if(confirm('هل أنت متأكد من رغبتك في تسجيل الخروج؟')) {
        window.location.href = 'index.html';
    }
}

// تفعيل العنصر النشط في القائمة الجانبية بناءً على مسار الصفحة
function setActiveMenu() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    const links = document.querySelectorAll('.sidebar-menu a');
    links.forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        }
    });
}

// تهيئة الصفحة عند التحميل
window.onload = function() {
    updateHeaderDate();
    setActiveMenu();
};
