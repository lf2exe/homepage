// 1. 作品數據資料庫
const paintings = [
    { 
        title: "靜謐深谷", 
        size: "100 x 80 cm", 
        concept: "在深色背景下，這幅畫的陰影細節將被更完美地呈現。", 
        status: "待收藏", 
        img: "picture/bird-8788491_1280.jpg" 
    },
    { 
        title: "月光石", 
        size: "50 x 50 cm", 
        concept: "探討冷調光影在粗糙介質上的反射。", 
        status: "已收藏", 
        img: "picture/cat1.jpg" 
    },
    { 
        title: "夜行者", 
        size: "70 x 90 cm", 
        concept: "都市霓虹與孤寂感的強烈對比。", 
        status: "私藏", 
        img: "picture/cat2.jpg" 
    },
    { 
        title: "晨曦", 
        size: "40 x 40 cm", 
        concept: "早晨的第一道光束，象徵著希望與開始。", 
        status: "已收藏", 
        img: "picture/cat3.jpg" 
    },
    { 
        title: "晨曦", 
        size: "40 x 40 cm", 
        concept: "早晨的第一道光束，象徵著希望與開始。", 
        status: "已收藏", 
        img: "picture/mouse.jpg" 
    }

];

// 2. 初始化功能
document.addEventListener('DOMContentLoaded', () => {
    // 隨機排序
    const shuffled = [...paintings].sort(() => Math.random() - 0.5);
    renderGallery(shuffled);
    initSwiper();
    initEventListeners(shuffled);
});

// 3. 渲染畫廊
function renderGallery(data) {
    const wrapper = document.getElementById('gallery-wrapper');
    data.forEach((art, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="artwork-container" data-index="${index}">
                <img src="${art.img}" class="artwork-img" alt="${art.title}">
            </div>
        `;
        wrapper.appendChild(slide);
    });
}

// 4. 初始化 Swiper

function initSwiper() {
    new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        watchSlidesProgress: true,
        loop: false,

// 【新增】啟動分頁器
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // 點擊圓點也能切換圖片
            dynamicBullets: true, // 如果作品很多，圓點會自動縮小成「由大到小」，很有現代感
        },


        coverflowEffect: {
            rotate: 0,
            
            // 【關鍵調整】
            // 因為中間圖佔了 70%，負值要設大一點 (例如 -150 到 -250)
            // 這會讓兩旁的縮小圖「擠」進中間圖的後方兩側
            stretch: -550, 
            
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
    });
}

// 5. 事件監聽 (彈窗控制)


function initEventListeners(shuffledData) {
    const modal = document.getElementById('modal');           // 作品彈窗
    const aboutModal = document.getElementById('about-modal'); // 新增的自我介紹彈窗
    
    // 1. 作品點擊邏輯 (原本的內容)
    document.querySelectorAll('.artwork-container').forEach(item => {
        item.addEventListener('click', () => {
            const index = item.getAttribute('data-index');
            const art = shuffledData[index];
            document.getElementById('modal-img').src = art.img;
            document.getElementById('modal-title').innerText = art.title;
            document.getElementById('modal-size').innerText = art.size;
            document.getElementById('modal-concept').innerText = art.concept;
            document.getElementById('modal-status').innerText = art.status;
            modal.style.display = 'flex'; // 顯示作品彈窗
        });
    });

    // 2. 自我介紹點擊邏輯 (新加入的)
    const aboutLink = document.getElementById('about-link');
    if (aboutLink) {
        aboutLink.addEventListener('click', (e) => {
            e.preventDefault(); // 阻止網頁跳轉
            aboutModal.style.display = 'flex'; // 顯示自我介紹彈窗
        });
    }

    // 3. 關閉按鈕邏輯 (作品與自我介紹)
// 這裡我們抓取網頁上「所有」具有 .modal-overlay 類別的盒子
const allModals = document.querySelectorAll('.modal-overlay');

// 監聽整個視窗的點擊事件
window.addEventListener('click', (e) => {
    // 檢查點擊的目標 (e.target) 是否就是任何一個彈窗的「背景層」
    allModals.forEach(modal => {
        if (e.target === modal) {
            closeSpecificModal(modal);
        }
    });
});

// 統一的關閉函數，方便未來擴充動畫效果
function closeSpecificModal(modal) {
    modal.style.display = 'none';
    
    // 如果未來有背景音樂，也可以在這裡設定關閉時要做的事
    console.log("視窗已關閉");
}

/* --- 原本的 X 按鈕功能也要保留，但可以簡化 --- */
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // 找到這個按鈕所屬的那個彈窗並關閉它
        const parentModal = btn.closest('.modal-overlay');
        if (parentModal) {
            closeSpecificModal(parentModal);
        }
    });
});

// 讓所有彈窗內的圖片，點擊後也能觸發關閉
document.querySelectorAll('.modal-overlay img').forEach(img => {
    img.style.cursor = 'zoom-out'; // 讓滑鼠變成「縮小」的圖示，提示可以點擊
    img.addEventListener('click', () => {
        const parentModal = img.closest('.modal-overlay');
        if (parentModal) {
            closeSpecificModal(parentModal);
        }
    });
});

}
