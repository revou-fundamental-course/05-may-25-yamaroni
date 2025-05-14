console.log('javascript is running');

// Fungsi Validasi Form
function validasiForm() {
    // Ambil DOM Input Name di Form
    const nameInput = document.getElementById('name-input');

    // Kondisi Penentu
    if (nameInput.value === '') {
        alert('Inputan Anda Kosong');
    } else {
        alert('Berhasil mengirim form');
    }
}

const listBanner = document.getElementsByClassName('banner-img');
let indexBanner = 0;
processBanner();

// Next Banner
function nextBanner() {
    indexBanner += 1;

    processBanner();
}

// Fungsi Process Banner
function processBanner() {
    console.log(listBanner);

    if (indexBanner >= listBanner.length) {
        indexBanner = 0;
    }

    // Hide All Banner
    for (let index = 0; index < listBanner.length; index++) {
        listBanner[index].style.display = 'none';
    }

    // Panggil Show Banner
    showBanner(indexBanner);
}

// Fungsi Show Banner
function showBanner(index) {
    listBanner[index].style.display = 'block';
}


// Untuk Otomasi
setInterval(nextBanner, 3000);