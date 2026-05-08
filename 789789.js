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
        coverflowEffect: {
            rotate: 0,
            
            // 【關鍵調整】
            // 因為中間圖佔了 70%，負值要設大一點 (例如 -150 到 -250)
            // 這會讓兩旁的縮小圖「擠」進中間圖的後方兩側
            stretch: -200, 
            
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
    });
}

// 5. 事件監聽 (彈窗控制)
function initEventListeners(shuffledData) {
    const modal = document.getElementById('modal');
    
    // 點擊作品打開彈窗
    document.querySelectorAll('.artwork-container').forEach(item => {
        item.addEventListener('click', () => {
            const index = item.getAttribute('data-index');
            const art = shuffledData[index];
            
            document.getElementById('modal-img').src = art.img;
            document.getElementById('modal-title').innerText = art.title;
            document.getElementById('modal-size').innerText = art.size;
            document.getElementById('modal-concept').innerText = art.concept;
            document.getElementById('modal-status').innerText = art.status;
            
            modal.style.display = 'flex';
        });
    });

    // 關閉按鈕
    document.getElementById('close-modal').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 點擊背景關閉
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });

    // 自我介紹提示
    document.getElementById('about-link').addEventListener('click', (e) => {
        e.preventDefault();
        alert('自我介紹：這是一位致力於深色調光影探索的畫家個人空間。');
    });
}
