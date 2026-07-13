// ===================== 공통 알림 모달(Custom Alert) 컨트롤러 =====================
// info-modal / modal-content / modal-body-content 마크업이 있는 페이지에서 공용으로 사용합니다.

function openCustomAlert(title, bodyHtml) {
    const modal = document.getElementById('info-modal');
    const content = document.getElementById('modal-content');
    const bodyContent = document.getElementById('modal-body-content');

    bodyContent.innerHTML = `
        <span class="text-xs uppercase tracking-widest text-[#4E8752] font-bold">Local Game System</span>
        <h3 class="font-serif text-2xl font-bold mt-1 text-gray-900 mb-2">${title}</h3>

        <div class="mt-4 text-xs md:text-sm text-gray-700 bg-green-50/50 p-4 rounded-xl border border-green-100 leading-relaxed font-medium">
            ${bodyHtml}
        </div>
    `;

    modal.classList.remove('hidden');
    setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('info-modal');
    const content = document.getElementById('modal-content');

    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 200);
}
