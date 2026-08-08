const profile = document.querySelector(".profile-card");

const modal = document.getElementById("modal");
const title = document.getElementById("title");
const school = document.getElementById("school");
const credential = document.getElementById("credential");

let y = 0;

function animateProfile() {
    if (!profile) return;

    y += 0.02;
    profile.style.transform = `translateY(${Math.sin(y) * 10}px)`;

    requestAnimationFrame(animateProfile);
}
animateProfile();

function openModal(level) {
    modal.style.display = "flex";
    if (level === "elem") {
        title.innerHTML = "Elementary School";

        school.innerHTML = 
            "<strong>School Graduated:</strong> San Joaquin Elementary School (2012-2018)";

        credential.innerHTML = `
            <strong>Credentials</strong>
            <ul>
                <li>Grade 3: With Honors</li>
                <li>Grade 4: With Honors</li>
                <li>Grade 5: With Honors</li>
                <li>Grade 6: With Honors</li>
                <li>3rd Place in Chess</li>
                <li>3rd Place in Journalism (Copy Reading Tagalog)</li>
            </ul>
        `;

    } else if (level === "junior") {
        title.innerHTML = "Junior High School";

        school.innerHTML = 
            "<strong>School Graduated:</strong> Doña Asuncion Lee Integrated School (2018-2022)";

        credential.innerHTML = `
            <strong>Credentials</strong>
            <ul>
                <li>Grade 7: With Honors</li>
                <li>Grade 8: With Honors</li>
                <li>Grade 9: With High Honors</li>
                <li>Grade 10: With High Honors</li>
            </ul>
        `;
    } else if (level === "senior") {
        title.innerHTML = "Senior High School";

        school.innerHTML =
            "<strong>School Graduated:</strong> Children of Fatima School Inc. (2022-2024) Mabiga";

        credential.innerHTML = `
            <strong>Credentials</strong>
            <ul>
                <li>Grade 11: With High Honors</li>
                <li>Grade 12: With High Honors</li>
                <li>Valedictorian of Batch ICT strand</li>
            </ul>
        `;
    } else {
        title.innerHTML = "College";

        school.innerHTML =
            "<strong>School:</strong> Mabalacat City College";

        credential.innerHTML = `
            <strong>Current Achievements</strong>
            <ul>
                <li>Bachelor of Science in Information Technology - 3rd Year Student </li>
                <li>SSITE Officer since Freshman</li>
                <p> - ✰ 1st Year Representative </p>
                <p> - ✰ 2nd Year: Vice President </p>
                <p> - ✰ 3rd Year: Vice President External Affairs </p>
                <li>Lister Awardees</li>
                <p> - ✰ 1st Year: President Lister </p>
                <p> - ✰ 2nd Year: President Lister </p>
            </ul>
        `;
    }
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }
};

document.querySelectorAll(".carousel").forEach((carousel) => {

    const slider = carousel.querySelector(".slider");
    const slides = carousel.querySelectorAll(".slide");
    const nextBtn = carousel.querySelector(".next");
    const prevBtn = carousel.querySelector(".prev");

    let current = 0;

    function updateCarousel() {
        slider.style.transform = `translateX(-${current * 100}%)`;

        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === current);
        });
    }

    nextBtn.addEventListener("click", () => {
        current = (current + 1) % slides.length;
        updateCarousel();
    });
    prevBtn.addEventListener("click", () => {
        current = (current - 1 + slides.length) % slides.length;
        updateCarousel();
    });
    updateCarousel();
});

const imageModal = document.getElementById("imageModal");
const expandedImage = document.getElementById("expandedImage");
const closeImage = document.querySelector(".close-image");

document.querySelectorAll(".slide img").forEach((image) => {

    image.addEventListener("click", () => {
        imageModal.style.display = "flex";
        expandedImage.src = image.src;
    });
});

closeImage.addEventListener("click", () => {
    imageModal.style.display = "none";
});

imageModal.addEventListener("click", (e) => {
    if (e.target === imageModal) {
        imageModal.style.display = "none";
    }
});
