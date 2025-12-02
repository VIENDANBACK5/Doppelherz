// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Sticky Header
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mini Game Logic
const questions = [
    {
        question: "1. Viên sủi Doppelherz Aktiv A–Z Fizz chủ yếu bổ sung nhóm dưỡng chất nào?",
        answers: ["Chỉ vitamin nhóm B", "Vitamin & khoáng chất tổng hợp", "Chỉ khoáng chất", "Axit amin"],
        correct: 1
    },
    {
        question: "2. Dạng dùng của Kinder Omega-3 Syrup là:",
        answers: ["Viên nang mềm", "Bột pha", "Si-rô uống", "Viên sủi"],
        correct: 2
    },
    {
        question: "3. Hoạt chất chính giúp hỗ trợ thị lực trong Eye Vital Capsules là:",
        answers: ["Omega-6", "Lutein & Zeaxanthin", "Collagen", "Vitamin K"],
        correct: 1
    },
    {
        question: "4. Kinder Calciovin được thiết kế chủ yếu cho đối tượng nào?",
        answers: ["Phụ nữ mang thai", "Người cao tuổi", "Trẻ nhỏ cần phát triển xương", "Người chơi thể thao"],
        correct: 2
    },
    {
        question: "5. Thành phần nổi bật trong Kinder Optima giúp hỗ trợ miễn dịch là:",
        answers: ["Vitamin C, D3, Kẽm", "Sắt & acid folic", "CoQ10", "Magie"],
        correct: 0
    },
    {
        question: "6. Ưu điểm của dạng viên sủi A-Z Fizz là:",
        answers: ["Không cần nước", "Hấp thụ nhanh, dễ uống", "Tác dụng ngay lập tức", "Không có hương vị"],
        correct: 1
    },
    {
        question: "7. Omega-3 trong Kinder Omega-3 Syrup hỗ trợ chủ yếu cho:",
        answers: ["Da & tóc", "Tiêu hóa", "Não bộ & thị lực", "Tim mạch"],
        correct: 2
    },
    {
        question: "8. Eye Vital Capsules thích hợp cho người thường xuyên:",
        answers: ["Lao động chân tay", "Tiếp xúc ánh sáng xanh, làm việc máy tính", "Tập gym", "Ăn kiêng"],
        correct: 1
    },
    {
        question: "9. Thành phần quan trọng giúp xương trẻ phát triển trong Kinder Calciovin:",
        answers: ["Vitamin A", "Canxi + D3", "Omega-3", "Magie"],
        correct: 1
    },
    {
        question: "10. Kinder Optima có công dụng chính là:",
        answers: ["Tăng cơ", "Hỗ trợ tiêu hóa", "Tăng đề kháng & ăn ngon", "Chống lão hóa"],
        correct: 2
    },
    {
        question: "11. Giải pháp đóng gói xanh thường hướng đến mục tiêu:",
        answers: ["Tăng chi phí sản xuất", "Giảm rủi ro pháp lý", "Giảm rác thải & cải thiện tác động môi trường", "Làm bao bì nhiều màu sắc"],
        correct: 2
    },
    {
        question: "12. Vật liệu nào được ưu tiên trong bao bì bền vững?",
        answers: ["Nhựa dùng một lần", "Nhựa tái chế (PCR)", "Túi nilon", "Xốp"],
        correct: 1
    },
    {
        question: "13. Ưu điểm của bao bì thân thiện môi trường là:",
        answers: ["Dùng được 1 lần", "Giảm trọng lượng vận chuyển", "Khó phân hủy", "Khó tái chế"],
        correct: 1
    },
    {
        question: "14. Sản phẩm Eye Vital Capsules thường được quan tâm bởi nhóm:",
        answers: ["Người cao tuổi", "Trẻ sơ sinh", "Người hay chơi thể thao", "Người làm việc văn phòng"],
        correct: 3
    },
    {
        question: "15. Omega-3 trong Kinder Omega-3 Syrup thường được chiết xuất từ:",
        answers: ["Dầu cá", "Dầu dừa", "Dầu oliu", "Dầu hướng dương"],
        correct: 0
    },
    {
        question: "16. A-Z Fizz phù hợp dùng vào thời điểm nào?",
        answers: ["Khi cần bù vitamin tổng hợp", "Trước khi ngủ", "Khi đói bụng", "Khi tập thể thao"],
        correct: 0
    },
    {
        question: "17. Bao bì xanh giúp doanh nghiệp:",
        answers: ["Tăng lượng rác thải", "Giảm uy tín thương hiệu", "Nâng cao hình ảnh & tạo giá trị bền vững", "Khó tiếp cận khách hàng"],
        correct: 2
    },
    {
        question: "18. Kinder Calciovin có dạng:",
        answers: ["Viên nén", "Gói bột", "Si-rô/ống dung dịch", "Viên nang"],
        correct: 2
    },
    {
        question: "19. Đặc điểm thường thấy ở sản phẩm dành cho trẻ em như Kinder Optima:",
        answers: ["Mùi vị dễ uống", "Liều dùng cao", "Dạng viên lớn", "Dùng cho người cao tuổi"],
        correct: 0
    },
    {
        question: "20. Một bao bì được xem là bền vững khi:",
        answers: ["Không thể tái sử dụng", "Dễ phân hủy hoặc tái chế", "Tăng trọng lượng sản phẩm", "Sản xuất bằng nhựa nguyên sinh"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 600; // 10 minutes in seconds
let timerInterval;
let startTime;

function startGame() {
    document.getElementById('gameStart').style.display = 'none';
    document.getElementById('gamePlay').style.display = 'block';
    
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 600;
    startTime = Date.now();
    
    // Shuffle questions
    shuffleArray(questions);
    
    loadQuestion();
    startTimer();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endGame();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('score').textContent = score;
    
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });
    
    updateProgress();
}

function selectAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.answer-btn');
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    if (selectedIndex === question.correct) {
        buttons[selectedIndex].classList.add('correct');
        score++;
        document.getElementById('score').textContent = score;
    } else {
        buttons[selectedIndex].classList.add('wrong');
        buttons[question.correct].classList.add('correct');
    }
    
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1000);
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Change color when time is running out
    if (timeLeft <= 60) {
        document.getElementById('timer').style.color = '#e74c3c';
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

function endGame() {
    clearInterval(timerInterval);
    
    document.getElementById('gamePlay').style.display = 'none';
    document.getElementById('gameResult').style.display = 'block';
    
    const totalTime = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    
    document.getElementById('finalScore').textContent = score;
    document.getElementById('finalTime').textContent = 
        `${minutes} phút ${seconds} giây`;
    
    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    
    if (score >= 15) {
        resultIcon.innerHTML = '<i class="fas fa-trophy" style="color: #f39c12; font-size: 80px;"></i>';
        resultTitle.textContent = 'Chúc Mừng! 🎉';
        resultMessage.textContent = 'Bạn đã vượt qua thử thách và nhận được phần quà sản phẩm Doppelherz trị giá 500.000đ! Chúng tôi sẽ liên hệ với bạn sớm nhất.';
    } else {
        resultIcon.innerHTML = '<i class="fas fa-heart" style="color: #e74c3c; font-size: 80px;"></i>';
        resultTitle.textContent = 'Cố Gắng Lên! 💪';
        resultMessage.textContent = `Bạn đạt ${score}/20 câu đúng. Cần đạt ít nhất 15/20 để nhận quà. Hãy thử lại nhé!`;
    }
}

function resetGame() {
    document.getElementById('gameResult').style.display = 'none';
    document.getElementById('gameStart').style.display = 'block';
    document.getElementById('timer').style.color = '';
}

// Contact Form Submission
function submitConsultForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    
    // Disable button and show loading
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';
    
    // Get form data
    const templateParams = {
        to_email: 'Manhuafan25@gmail.com',
        from_name: form.querySelector('#name').value,
        from_phone: form.querySelector('#phone').value,
        from_email: form.querySelector('#email').value,
        needs: form.querySelector('#needs').value,
        message: `
📝 ĐĂNG KÝ TƯ VẤN MỚI TỪ WEBSITE DOPPELHERZ

👤 Họ và tên: ${form.querySelector('#name').value}
📞 Số điện thoại: ${form.querySelector('#phone').value}
📧 Email: ${form.querySelector('#email').value}

💬 Nhu cầu cụ thể:
${form.querySelector('#needs').value}

---
Thời gian đăng ký: ${new Date().toLocaleString('vi-VN')}
        `
    };
    
    // Send email using EmailJS
    emailjs.send('service_uek2qbs', 'template_zqq37kt', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('✅ Cảm ơn bạn đã đăng ký! Chúng tôi đã nhận được thông tin và sẽ liên hệ với bạn trong thời gian sớm nhất (thường dưới 2h).');
            form.reset();
        }, function(error) {
            console.error('FAILED...', error);
            alert('❌ Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại hoặc liên hệ trực tiếp qua số hotline.');
        })
        .finally(function() {
            // Re-enable button
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
        });
}

// Newsletter Subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    
    alert(`Cảm ơn bạn đã đăng ký nhận tin! Email: ${email}`);
    form.reset();
}

// Add to Cart Animation
document.querySelectorAll('.btn-cart').forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.textContent;
        this.textContent = '✓ Đã Thêm';
        this.style.backgroundColor = '#27ae60';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.backgroundColor = '';
        }, 1500);
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.product-card, .team-card, .social-card, .green-card, .combo-card, .promo-item'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Counter Animation for Stats
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 20);
}

// Animate stats when in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const brandStats = document.querySelector('.brand-stats');
if (brandStats) {
    statsObserver.observe(brandStats);
}

// Product Details Data
const productDetails = {
    'kinder-optima': {
        name: 'TPBVSK Kinder Optima',
        price: '351.000₫',
        certAd: '2888/2020/XNQC-ATTP – 2045/2023/XNQC-ATTP',
        certReg: '7357/2020/ĐKSP',
        benefits: [
            'Hỗ trợ giúp trẻ ăn ngon, hấp thu dinh dưỡng tốt',
            'Tăng cường tiêu hóa, giảm biếng ăn',
            'Hỗ trợ bổ sung L-lysine cùng các vitamin và khoáng chất'
        ],
        link: 'https://vn.shp.ee/gm9Lksk',
        image: 'images/1.png'
    },
    'kinder-omega3': {
        name: 'TPBVSK Doppelherz Aktiv Kinder Omega 3 syrup',
        price: '535.000₫',
        certAd: '1833/2020/XNQC-ATTP',
        certReg: '2876/2018/ĐKSP',
        benefits: [
            'Bổ sung Omega 3 (EPA và DHA) cùng 11 vitamin thiết yếu',
            'Hỗ trợ phát triển não bộ, thị lực – Hỗ trợ tăng cường miễn dịch',
            'Vị cam thơm ngon. Dung dịch đồng nhất, dạng lỏng dễ uống'
        ],
        link: 'https://vn.shp.ee/2AE6eRb',
        image: 'images/2.png'
    },
    'kinder-calciovin': {
        name: 'TPBVSK Doppelherz Aktiv Calciovin Liquid',
        price: '475.000₫',
        certAd: '2890/2020/XNQC-ATTP',
        certReg: '7158/2020/ĐKSP',
        benefits: [
            'Công thức phối hợp: Canxi – Magie – D3 cùng Kẽm, Mangan, vitamin C',
            'Hỗ trợ xương, răng phát triển chắc khỏe',
            'Vị cam thơm ngon, dạng lỏng dễ uống'
        ],
        link: 'https://vn.shp.ee/qELywkv',
        image: 'images/3.png'
    },
    'kinder-thymepect': {
        name: 'TPBVSK Doppelherz Aktiv Thymepect',
        price: '265.000₫',
        certAd: '1781/2020/XNQC-ATTP',
        certReg: '2876/2019/ĐKSP',
        benefits: [
            'Công thức phối hợp độc đáo từ thiên nhiên: Cỏ xạ hương, quả cơm cháy, mật ong',
            'Hỗ trợ giảm ho do có đờm – Hỗ trợ giảm kích ứng đường hô hấp',
            'Hỗ trợ nâng cao sức đề kháng'
        ],
        link: 'https://vn.shp.ee/A7w3wFY',
        image: 'images/5.png'
    },
    'eye-vital': {
        name: 'TPBVSK Doppelherz Aktiv Eye Vital Capsules',
        price: '395.000₫',
        certAd: '456/2021/XNQC-ATTP',
        certReg: '8276/2019/ĐKSP',
        benefits: [
            'Giúp bổ sung dưỡng chất cần thiết cho mắt',
            'Hỗ trợ tăng cường thị lực',
            'Hỗ trợ tăng cường sức khỏe cho mắt'
        ],
        link: 'https://vn.shp.ee/EVHNvRg',
        image: 'images/4.png'
    },
    'az-fizz': {
        name: 'TPBVSK Doppelherz Aktiv A-Z Fizz',
        price: '99.000₫',
        certAd: '2891/2020/XNQC-ATTP – 1750/2024/XNQC-ATTP',
        certReg: '7155/2020/ĐKSP',
        benefits: [
            'Bổ sung các vitamin và khoáng chất thiết yếu cho cơ thể',
            'Hỗ trợ tăng cường sức khỏe',
            'Hỗ trợ tăng cường sức đề kháng'
        ],
        link: 'https://vn.shp.ee/UDMhUCP',
        image: 'images/6.png'
    },
    'combo-2sp': {
        name: 'Combo 2 sản phẩm bảo vệ sức khỏe Kinder Doppelherz Aktiv Optima và Kinder Doppelherz Omega 3',
        price: '886.000₫',
        benefits: [
            'Tạo bộ đôi hỗ trợ phát triển toàn diện cho trẻ em giúp tăng khả năng hấp thu, phát triển trí não và thể chất đồng thời',
            'Kinder Optima: Cung cấp đa vitamin, khoáng chất và Lysine, kích thích ăn ngon, tăng sức đề kháng, cải thiện thể trạng',
            'Kinder Omega-3: Bổ sung DHA, EPA và 11 loại vitamin, giúp phát triển não bộ, trí nhớ, khả năng tập trung và thị lực'
        ],
        link: 'https://vn.shp.ee/oLeiUZH',
        image: 'images/8.png'
    },
    'combo-3sp': {
        name: 'Combo 3 sản phẩm bảo vệ sức khỏe Kinder Doppelherz Aktiv Optima, Kinder Doppelherz Omega 3 và Kinder Doppelherz Calciovin',
        price: '1.361.000₫',
        benefits: [
            'Kinder Optima – Ăn ngon – Hấp thu tốt: Bổ sung 13 vitamin + khoáng chất + Lysine. Giúp kích thích vị giác, tăng hấp thu dinh dưỡng. Tăng miễn dịch, giảm ốm vặt',
            'Kinder Omega-3 Syrup – Trí não – Thị lực: Chứa DHA, EPA, tỷ lệ chuẩn 4:1. Hỗ trợ phát triển trí não, tăng tập trung, cải thiện trí nhớ. Giảm mỏi mắt, tăng cường thị lực. Vị cam dễ uống, không tanh',
            'Kinder Calciovin – Xương chắc – Cao lớn: Canxi Citrate hữu cơ + D3 + Magie dễ hấp thu, không gây táo bón. Hỗ trợ phát triển chiều cao, chắc xương – răng. Giúp ngủ ngon, giảm giật mình do thiếu canxi'
        ],
        link: 'https://vn.shp.ee/JNNMRn3',
        image: 'images/9.png'
    }
};

// View Product Detail Function
function viewProductDetail(productId) {
    const product = productDetails[productId];
    if (!product) return;

    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');

    let benefitsHTML = product.benefits.map(benefit => 
        `<li><i class="fas fa-check-circle"></i> ${benefit}</li>`
    ).join('');

    let certHTML = '';
    if (product.certAd) {
        certHTML = `
            <div class="product-cert">
                <p><strong>Số chứng nhận quảng cáo:</strong> ${product.certAd}</p>
                <p><strong>Số chứng nhận công bố:</strong> ${product.certReg}</p>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="product-detail-container">
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x400?text=Product'">
            </div>
            <div class="product-detail-info">
                <h2>${product.name}</h2>
                <div class="product-detail-price">${product.price}</div>
                ${certHTML}
                <div class="product-benefits">
                    <h3>Công dụng:</h3>
                    <ul>${benefitsHTML}</ul>
                </div>
                <a href="${product.link}" target="_blank" class="btn-buy-now">
                    <i class="fas fa-shopping-cart"></i> Mua Ngay Trên Shopee
                </a>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Product Modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    const greenModal = document.getElementById('greenProcessModal');
    
    if (event.target == modal) {
        closeProductModal();
    }
    
    if (event.target == greenModal) {
        closeGreenProcessPopup();
    }
}

// Green Process Popup Functions
function openGreenProcessPopup() {
    const modal = document.getElementById('greenProcessModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeGreenProcessPopup() {
    const modal = document.getElementById('greenProcessModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
