// Test nhanh chèn video mới cho slider
const sliderItem = document.querySelector('.owl-stage-outer .owl-stage .owl-item .slider-main-item');
if (sliderItem) {
    sliderItem.innerHTML = `
        <div>
            <video autoplay muted playsinline id="test-video" style="width: 100%; height: auto; z-index: -11;" loop>
                <source src="https://thacoauto.vn/storage/banner-trang-chu/banner-tet-2025-thaco-auto-vpdh-2.mp4" type="video/mp4">
            </video>
        </div>
    `;
    // Phát video
    const video = document.querySelector('#test-video');
    if (video) {
        video.play();
        console.log('Video mới đã được chèn và phát.');
    }
} else {
    console.error('Không tìm thấy slider để chèn video.');
}

// Test nhanh chèn video cho hostname khác thacoauto.vn
const sliderItemAlt = document.querySelector('.slider-main-item');
if (sliderItemAlt) {
    sliderItemAlt.innerHTML = `
        <div>
            <video autoplay muted playsinline id="test-video-alt" style="width: 100%; height: auto; z-index: -11;" loop>
                <source src="https://thacoauto.vn/storage/banner-cttt/banner-tet-2025-thaco-auto-tinhthanh-2.mp4" type="video/mp4">
            </video>
        </div>
    `;
    // Phát video
    const video = document.querySelector('#test-video-alt');
    if (video) {
        video.play();
        console.log('Video thay thế đã được chèn và phát.');
    }
} else {
    console.error('Không tìm thấy slider để chèn video cho hostname khác thacoauto.vn.');
}
