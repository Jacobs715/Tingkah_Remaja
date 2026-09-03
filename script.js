// Daftar semua halaman buku

const pages = [
    "pages/Halaman 1.jpeg",
    "pages/Halaman 2.jpeg",
    "pages/Halaman 3.jpeg",
    "pages/Halaman 4.jpeg"
];


// Posisi halaman sekarang

let currentPage = 0;


// Ambil elemen HTML

const leftPage = document.getElementById("leftPage");
const rightPage = document.getElementById("rightPage");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const pageNumber = document.getElementById("pageNumber");

const book = document.getElementById("book");


// Menampilkan halaman

function showPages() {

    leftPage.src = pages[currentPage];

    if (currentPage + 1 < pages.length) {

        rightPage.src = pages[currentPage + 1];

    } else {

        rightPage.src = pages[currentPage];

    }

    pageNumber.textContent =
        "Halaman " + (currentPage + 1);
}


// Tombol berikutnya

function nextPage() {

    if (currentPage < pages.length - 2) {

        currentPage += 2;

        animateNext();

        showPages();
    }
}


// Tombol sebelumnya

function previousPage() {

    if (currentPage > 0) {

        currentPage -= 2;

        if (currentPage < 0) {
            currentPage = 0;
        }

        animatePrevious();

        showPages();
    }
}


// Animasi ke kanan

function animateNext() {

    book.animate(
        [
            {
                transform:
                    "rotateY(0deg)"
            },

            {
                transform:
                    "rotateY(-8deg)"
            },

            {
                transform:
                    "rotateY(0deg)"
            }
        ],
        {
            duration: 500,
            easing: "ease-in-out"
        }
    );
}


// Animasi ke kiri

function animatePrevious() {

    book.animate(
        [
            {
                transform:
                    "rotateY(0deg)"
            },

            {
                transform:
                    "rotateY(8deg)"
            },

            {
                transform:
                    "rotateY(0deg)"
            }
        ],
        {
            duration: 500,
            easing: "ease-in-out"
        }
    );
}


// Tombol

nextBtn.addEventListener(
    "click",
    nextPage
);

prevBtn.addEventListener(
    "click",
    previousPage
);


// Klik sisi kanan buku

book.addEventListener(
    "click",
    function(event) {

        const rect =
            book.getBoundingClientRect();

        const posisiX =
            event.clientX - rect.left;

        const tengah =
            rect.width / 2;


        if (posisiX > tengah) {

            nextPage();

        } else {

            previousPage();

        }

    }
);


// Keyboard

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "ArrowRight") {

            nextPage();

        }

        if (event.key === "ArrowLeft") {

            previousPage();

        }

    }
);


// Jalankan pertama kali

showPages();