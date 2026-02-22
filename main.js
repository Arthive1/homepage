// Firebase configuration (Actual project config)
const firebaseConfig = {
    apiKey: "AIzaSyAHu6tIDO0Du99gt30vNm1gPeTIkA6BIF8",
    authDomain: "arthive-b1f58.firebaseapp.com",
    projectId: "arthive-b1f58",
    storageBucket: "arthive-b1f58.firebasestorage.app",
    messagingSenderId: "960639318964",
    appId: "1:960639318964:web:4498b4ee6478e0bf8990e1",
    measurementId: "G-VF0431SK1R"
};

// Initialize Firebase using the Compat SDK (global firebase object)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore(); // Initialize Firestore
const googleProvider = new firebase.auth.GoogleAuthProvider();

const artData = [
    // Vincent van Gogh
    {
        title: "The Starry Night",
        artist: "Vincent van Gogh",
        artistYears: "1853-1890",
        artistImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
        price: "$ 120,000,000",
        status: "Sold Out",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Sunflowers",
        artist: "Vincent van Gogh",
        artistYears: "1853-1890",
        artistImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
        price: "$ 82,500,000",
        status: "On Sale",
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Irises",
        artist: "Vincent van Gogh",
        artistYears: "1853-1890",
        artistImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
        price: "$ 53,900,000",
        status: "Pending",
        image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=800&q=80"
    },
    // Pablo Picasso
    {
        title: "Guernica",
        artist: "Pablo Picasso",
        artistYears: "1881-1973",
        artistImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/800px-Pablo_picasso_1.jpg",
        price: "$ 200,000,000",
        status: "Sold Out",
        image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Les Demoiselles d'Avignon",
        artist: "Pablo Picasso",
        artistYears: "1881-1973",
        artistImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/800px-Pablo_picasso_1.jpg",
        price: "$ 150,000,000",
        status: "On Sale",
        image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "The Weeping Woman",
        artist: "Pablo Picasso",
        artistYears: "1881-1973",
        artistImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/800px-Pablo_picasso_1.jpg",
        price: "$ 90,000,000",
        status: "Pending",
        image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=80"
    },
    // Claude Monet
    {
        title: "Water Lilies",
        artist: "Claude Monet",
        artistYears: "1840-1926",
        artistImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/800px-Claude_Monet_1899_Nadar_crop.jpg",
        price: "$ 84,600,000",
        status: "Sold Out",
        image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Impression, Sunrise",
        artist: "Claude Monet",
        artistYears: "1840-1926",
        artistImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/800px-Claude_Monet_1899_Nadar_crop.jpg",
        price: "$ 75,000,000",
        status: "On Sale",
        image: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Woman with a Parasol",
        artist: "Claude Monet",
        artistYears: "1840-1926",
        artistImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/800px-Claude_Monet_1899_Nadar_crop.jpg",
        price: "$ 45,000,000",
        status: "Pending",
        image: "https://images.unsplash.com/photo-1561214166-3bd859187ec0?auto=format&fit=crop&w=800&q=80"
    },
    // Leonardo da Vinci
    {
        title: "Mona Lisa",
        artist: "Leonardo da Vinci",
        artistYears: "1452-1519",
        artistImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leonardo_self.jpg/800px-Leonardo_self.jpg",
        price: "$ 860,000,000",
        status: "Sold Out",
        image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "The Last Supper",
        artist: "Leonardo da Vinci",
        artistYears: "1452-1519",
        artistImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leonardo_self.jpg/800px-Leonardo_self.jpg",
        price: "$ 450,000,000",
        status: "On Sale",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Vitruvian Man",
        artist: "Leonardo da Vinci",
        artistYears: "1452-1519",
        artistImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leonardo_self.jpg/800px-Leonardo_self.jpg",
        price: "$ 300,000,000",
        status: "Pending",
        image: "https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?auto=format&fit=crop&w=800&q=80"
    },
    // Lee Ufan
    {
        title: "From Point",
        artist: "Lee Ufan",
        artistYears: "1936-현재",
        artistImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Lee_Ufan.jpg/800px-Lee_Ufan.jpg",
        price: "$ 1,700,000",
        status: "On Sale",
        image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=80" // Placeholder image for abstract art
    }
];

// Helper to parse price string to number
function parsePrice(priceStr) {
    return Number(priceStr.replace(/[^0-9]/g, ''));
}

// Daum Postcode API Search Function
function execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function (data) {
            // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            let addr = ''; // 주소 변수
            let extraAddr = ''; // 참고항목 변수

            if (data.userSelectedType === 'R') { // 도로명 주소 선택
                addr = data.roadAddress;
            } else { // 지번 주소 선택
                addr = data.jibunAddress;
            }

            // 도로명 주소 선택 시 참고항목 조합
            if (data.userSelectedType === 'R') {
                if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                    extraAddr += data.bname;
                }
                if (data.buildingName !== '' && data.apartment === 'Y') {
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                if (extraAddr !== '') {
                    addr += ' (' + extraAddr + ')';
                }
            }

            // 주소 정보를 필드에 넣는다.
            const addrField = document.getElementById("signupAddress");
            if (addrField) {
                addrField.value = addr;
            }

            // 커서를 상세주소 필드로 이동한다.
            const detailField = document.getElementById("signupAddressDetail");
            if (detailField) {
                detailField.focus();
            }
        }
    }).open();
}

function renderGallery() {
    const artGrid = document.getElementById('artGrid');
    if (!artGrid) return;
    artGrid.innerHTML = '';

    // Sort: On Sale (1) > Pending (2) > Sold Out (3), then by Price DESC
    const statusOrder = { "On Sale": 1, "Pending": 2, "Sold Out": 3 };
    const sortedGalleryData = [...artData].sort((a, b) => {
        if (statusOrder[a.status] !== statusOrder[b.status]) {
            return statusOrder[a.status] - statusOrder[b.status];
        }
        return parsePrice(b.price) - parsePrice(a.price);
    });

    sortedGalleryData.forEach((art, index) => {
        const card = document.createElement('div');
        card.className = 'art-card';
        card.style.animationDelay = `${index * 0.1}s`;

        const statusClass = art.status.toLowerCase().replace(' ', '-');

        card.innerHTML = `
            <div class="art-img-container">
                <div class="status-badge ${statusClass}">${art.status}</div>
                <img src="${art.image}" alt="${art.title}" loading="lazy">
            </div>
            <div class="art-info">
                <h3>${art.title}</h3>
                <p class="artist">${art.artist}</p>
                <div class="art-footer">
                    <span class="price">${art.price}</span>
                    <button class="btn-bid" ${art.status === 'Sold Out' ? 'disabled' : ''}>${art.status === 'Sold Out' ? 'Sold Out' : 'Bid'}</button>
                </div>
            </div>
        `;
        artGrid.appendChild(card);
    });
}

function renderHallOfFame() {
    const hallOfFameGrid = document.getElementById('hallOfFameGrid');
    if (!hallOfFameGrid) return;
    hallOfFameGrid.innerHTML = '';

    // Filter only Sold Out items and sort by price descending
    const soldItems = artData
        .filter(art => art.status === 'Sold Out')
        .sort((a, b) => parsePrice(b.price) - parsePrice(a.price));

    soldItems.forEach((art, index) => {
        const card = document.createElement('div');
        card.className = 'art-card';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="art-img-container">
                <div class="status-badge sold-out">Hall of Fame</div>
                <img src="${art.image}" alt="${art.title}" loading="lazy">
            </div>
            <div class="art-info">
                <h3>${art.title}</h3>
                <p class="artist">${art.artist}</p>
                <div class="art-footer">
                    <span class="price">${art.price}</span>
                    <span class="honor-badge">🏆 Hall of Fame</span>
                </div>
            </div>
        `;
        hallOfFameGrid.appendChild(card);
    });
}

function renderArtists() {
    const artistGrid = document.getElementById('artistGrid');
    if (!artistGrid) return;
    artistGrid.innerHTML = '';

    const artistsMap = new Map();
    artData.forEach(art => {
        if (!artistsMap.has(art.artist)) {
            artistsMap.set(art.artist, {
                name: art.artist,
                years: art.artistYears,
                image: art.artistImage,
                masterpieces: []
            });
        }
        const artist = artistsMap.get(art.artist);
        if (artist.masterpieces.length < 3) {
            artist.masterpieces.push(art.title);
        }
    });

    const derivedArtistData = Array.from(artistsMap.values());

    derivedArtistData.forEach((artist, index) => {
        const card = document.createElement('div');
        card.className = 'art-card';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="art-img-container">
                <img src="${artist.image}" alt="${artist.name}" loading="lazy">
            </div>
            <div class="art-info">
                <h3>${artist.name}</h3>
                <span class="artist-years">${artist.years}</span>
                <span class="masterpieces">${artist.masterpieces.join(', ')}</span>
            </div>
        `;
        artistGrid.appendChild(card);
    });
}

// Function to handle config checking
function checkConfig() {
    if (firebaseConfig.apiKey === "YOUR_API_KEY") {
        alert("알림: 현재 파이어베이스 가짜(스켈레톤) 설정이 사용되고 있습니다.\nmain.js 파일 맨 위에서 실제 프로젝트 설정(API Key 등)으로 교체해야 정상 작동합니다.");
        return false;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    renderArtists();
    renderHallOfFame();

    const openSigninBtn = document.getElementById('openSigninBtn');
    const openSignupBtn = document.getElementById('openSignupBtn');
    const googleLoginBtn = document.getElementById('googleLoginBtn');
    const googleSignupBtn = document.getElementById('googleSignupBtn');

    // Login UI Elements
    const loginSection = document.getElementById('loginSection');
    const userProfile = document.getElementById('userProfile');
    const loggedInUserId = document.getElementById('loggedInUserId');
    const logoutBtn = document.getElementById('logoutBtn');

    function updateUIForLoginState(isLoggedIn, email = '') {
        if (isLoggedIn) {
            if (loginSection) loginSection.classList.add('hidden');
            if (userProfile) {
                userProfile.classList.remove('hidden');
                if (loggedInUserId) loggedInUserId.textContent = email;
            }
        } else {
            if (loginSection) loginSection.classList.remove('hidden');
            if (userProfile) userProfile.classList.add('hidden');
            if (loggedInUserId) loggedInUserId.textContent = '';
        }
    }

    // Modal Elements
    const signupModal = document.getElementById('signupModal');
    const signinModal = document.getElementById('signinModal');
    const closeModal = document.querySelector('#signupModal .close-modal');
    const closeSigninModal = document.querySelector('#signinModal .close-modal');
    const signupForm = document.getElementById('signupForm');
    const signinForm = document.getElementById('signinForm');

    // Email Login
    if (signinForm) {
        signinForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!checkConfig()) return;

            const email = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (!email || !password) {
                alert('Please enter both email and password.');
                return;
            }

            // Test Account Bypass
            if (email === '1234@gmail.com' && password === '123456') {
                alert('Logged in with test account!');
                sessionStorage.setItem('mockUser', email);
                updateUIForLoginState(true, email);
                if (signinModal) signinModal.style.display = 'none';
                return;
            }

            try {
                const userCredential = await auth.signInWithEmailAndPassword(email, password);
                alert(`Welcome, ${userCredential.user.email}!`);
                if (signinModal) signinModal.style.display = 'none';
            } catch (error) {
                console.error("Login Error:", error);
                alert(`Login failed: ${error.message}`);
            }
        });
    }

    // Modals Show/Hide
    if (openSignupBtn) {
        openSignupBtn.addEventListener('click', () => {
            if (signupModal) signupModal.style.display = 'block';
        });
    }

    if (openSigninBtn) {
        openSigninBtn.addEventListener('click', () => {
            if (signinModal) signinModal.style.display = 'block';
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            signupModal.style.display = 'none';
        });
    }

    if (closeSigninModal) {
        closeSigninModal.addEventListener('click', () => {
            signinModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === signupModal) {
            signupModal.style.display = 'none';
        }
        if (e.target === signinModal) {
            signinModal.style.display = 'none';
        }
    });

    // Real-time Password Match Feedback
    const signupPassword = document.getElementById('signupPassword');
    const signupPasswordConfirm = document.getElementById('signupPasswordConfirm');
    const passwordMatchMsg = document.getElementById('passwordMatchMsg');

    function checkPasswordMatch() {
        const p1 = signupPassword.value;
        const p2 = signupPasswordConfirm.value;

        if (!p2) {
            passwordMatchMsg.textContent = '';
            passwordMatchMsg.className = 'match-msg';
            return;
        }

        if (p1 === p2) {
            passwordMatchMsg.textContent = 'Matched';
            passwordMatchMsg.className = 'match-msg success';
        } else {
            passwordMatchMsg.textContent = 'Not matched';
            passwordMatchMsg.className = 'match-msg error';
        }
    }

    signupPassword.addEventListener('input', checkPasswordMatch);
    signupPasswordConfirm.addEventListener('input', checkPasswordMatch);

    // Extended Signup Logic
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!checkConfig()) return;

            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const passwordConfirm = document.getElementById('signupPasswordConfirm').value;
            const phone = document.getElementById('signupPhone').value;
            const addressMain = document.getElementById('signupAddress').value;
            const addressDetail = document.getElementById('signupAddressDetail').value;
            const fullAddress = `${addressMain} ${addressDetail}`.trim();

            const accountTypeElement = document.querySelector('input[name="accountType"]:checked');
            const accountType = accountTypeElement ? accountTypeElement.value : 'collector';

            if (password !== passwordConfirm) {
                alert('Passwords do not match.');
                return;
            }

            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return;
            }

            try {
                // 1. Create User in Auth
                const userCredential = await auth.createUserWithEmailAndPassword(email, password);
                const user = userCredential.user;

                // 2. Save Extra Info in Firestore (DB 설정이 안 되어있을 경우를 위한 예외 처리)
                try {
                    await db.collection('users').doc(user.uid).set({
                        email: email,
                        phone: phone,
                        address: fullAddress,
                        accountType: accountType,
                        createdAt: firebase.firestore.FieldValue.serverTimestamp()
                    });
                } catch (dbError) {
                    console.warn("Firestore save skipped (Database might not be initialized):", dbError);
                }

                alert('Sign up completed successfully!');

                // 모달 강제 종료
                if (signupModal) signupModal.style.display = 'none';

                // 메인 페이지로 이동 (로고 클릭 트리거)
                const mainLogo = document.getElementById('mainLogo');
                if (mainLogo) mainLogo.click();

            } catch (error) {
                console.error("Signup Error:", error);
                alert(`Sign up failed: ${error.message}`);
            }
        });
    }

    // Google Login / Signup
    const handleGoogleAuth = async () => {
        if (!checkConfig()) return;

        try {
            const result = await auth.signInWithPopup(googleProvider);
            alert(`Welcome, ${result.user.displayName}!`);
            if (signinModal) signinModal.style.display = 'none';
            if (signupModal) signupModal.style.display = 'none';
        } catch (error) {
            console.error("Google Auth Error:", error);
            alert(`Google authentication failed: ${error.message}`);
        }
    };

    if (googleLoginBtn) {
        googleLoginBtn.addEventListener('click', handleGoogleAuth);
    }

    if (googleSignupBtn) {
        googleSignupBtn.addEventListener('click', handleGoogleAuth);
    }

    // Track Auth State & Logout
    auth.onAuthStateChanged((user) => {
        if (user) {
            console.log("User is signed in:", user);
            updateUIForLoginState(true, user.email || user.displayName);
        } else {
            console.log("User is signed out");
            if (!sessionStorage.getItem('mockUser')) {
                updateUIForLoginState(false);
            }
        }
    });

    // Check Mock User on load
    if (sessionStorage.getItem('mockUser')) {
        updateUIForLoginState(true, sessionStorage.getItem('mockUser'));
    }

    // Logout Functionality
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            if (sessionStorage.getItem('mockUser')) {
                sessionStorage.removeItem('mockUser');
                updateUIForLoginState(false);
                alert('Log out successful.');
            } else {
                try {
                    await auth.signOut();
                    alert('Log out successful.');
                } catch (error) {
                    console.error("Logout Error:", error);
                }
            }
        });
    }

    // --- NAVIGATION & SLIDESHOW LOGIC ---
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    function switchSection(targetId) {
        sections.forEach(sec => {
            if (sec.id === targetId) {
                sec.classList.remove('hidden');
                setTimeout(() => sec.classList.add('active'), 50);
            } else {
                sec.classList.remove('active');
                sec.classList.add('hidden');
            }
        });

        navLinks.forEach(link => {
            if (link.dataset.section === targetId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.dataset.section;
            switchSection(targetSection);
        });
    });

    // Logo Click Navigation
    const mainLogo = document.getElementById('mainLogo');
    if (mainLogo) {
        mainLogo.addEventListener('click', () => {
            switchSection('mainSection');
        });
    }

    // Slideshow Logic
    const slideshowContent = document.getElementById('slideshowContent');
    let currentSlideIndex = -1;

    function showRandomSlide() {
        if (!slideshowContent) return;

        // Pick a random index different from the current one
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * artData.length);
        } while (nextIndex === currentSlideIndex && artData.length > 1);

        currentSlideIndex = nextIndex;
        const art = artData[currentSlideIndex];

        // Create new slide elements for transition
        const newSlide = document.createElement('div');
        newSlide.className = 'slideshow-item';
        newSlide.innerHTML = `
            <img src="${art.image}" class="slide-image" alt="${art.title}">
            <div class="slide-info">
                <h2>${art.title}</h2>
                <p class="artist">By ${art.artist}</p>
                <p>Premium Art Collection - ARTHIVE</p>
            </div>
        `;

        // Clear previous content or handle cross-fade
        const oldSlide = slideshowContent.querySelector('.slideshow-item');
        if (oldSlide) {
            const oldImg = oldSlide.querySelector('.slide-image');
            const oldInfo = oldSlide.querySelector('.slide-info');
            if (oldImg) oldImg.classList.remove('active');
            if (oldInfo) oldInfo.classList.remove('active');

            setTimeout(() => {
                slideshowContent.innerHTML = '';
                slideshowContent.appendChild(newSlide);
                // Trigger reflow
                newSlide.offsetHeight;
                activateSlide(newSlide);
            }, 1500); // Wait for fade out
        } else {
            slideshowContent.appendChild(newSlide);
            activateSlide(newSlide);
        }
    }

    function activateSlide(slideElement) {
        const img = slideElement.querySelector('.slide-image');
        const info = slideElement.querySelector('.slide-info');
        if (img) img.classList.add('active');
        if (info) info.classList.add('active');
    }

    // Initialize Slideshow
    showRandomSlide();
    setInterval(showRandomSlide, 5000);
});
