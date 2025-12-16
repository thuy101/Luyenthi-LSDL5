// =========================================================
//                  I. KHAI BÁO BIẾN TOÀN CỤC VÀ HẰNG SỐ
// =========================================================

// Tổng hợp ngân hàng câu hỏi từ các file JS riêng (phải được nhúng trong index.html)
const ALL_QUESTION_BANKS = {
    'LS_DL': { 
        bank: typeof questionBank_LS_DL !== 'undefined' ? questionBank_LS_DL : [], 
        config: typeof EXAM_CONFIG_LS_DL !== 'undefined' ? EXAM_CONFIG_LS_DL : { C1: 7, N: 3 },
        title: 'Lịch sử và Địa lí'
    },
    'KH': {
        bank: typeof questionBank_KH !== 'undefined' ? questionBank_KH : [], 
        config: typeof EXAM_CONFIG_KH !== 'undefined' ? EXAM_CONFIG_KH : { C1: 7, N: 3 },
        title: 'Khoa học'
    },
    'CN': {
        bank: typeof questionBank_CN !== 'undefined' ? questionBank_CN : [], 
        config: typeof EXAM_CONFIG_CN !== 'undefined' ? EXAM_CONFIG_CN : { C1: 7, N: 3 },
        title: 'Công nghệ'
    }
};

const TOTAL_QUESTIONS = 10;
const PASS_SCORE = 8; // Điều kiện đậu: 8/10 câu
const NUM_EXAMS = 5; // TĂNG TỪ 3 LÊN 5 ĐỀ THEO YÊU CẦU

// Biến trạng thái
let currentSubject = ''; // Lưu môn đang thi ('LS_DL', 'KH', 'CN')
let currentExam = []; 
let currentQuestionIndex = 0; 
let userAnswers = []; 
let isExamSubmitted = false; 
let currentExamId = 1; 

// Biến lưu trữ ngân hàng câu hỏi đã được rút ngẫu nhiên và xáo trộn (để dùng cho 5 đề)
let shuffledQuestionBank = {}; // Ví dụ: { 'LS_DL': [...], 'KH': [...] }

// Thông tin cá nhân
let studentInfo = {
    name: '',
    className: ''
};

// Lấy các phần tử DOM
const infoScreen = document.getElementById('info-screen');
const menuScreen = document.getElementById('menu-screen');
const examScreen = document.getElementById('exam-screen');

const studentNameInput = document.getElementById('student-name');
const studentClassInput = document.getElementById('student-class');
const startMenuBtn = document.getElementById('start-menu-btn');
const infoWarningEl = document.getElementById('info-warning');
const displayInfoEl = document.getElementById('display-info');
const logoutBtn = document.getElementById('logout-btn');
const menuButtons = document.querySelectorAll('.menu-btn[data-subject]');
const backToMenuBtn = document.getElementById('back-to-menu-btn');

// DOM cho màn hình thi
const questionTextEl = document.getElementById('question-text');
const answerOptionsEl = document.getElementById('answer-options');
const questionHeaderEl = document.getElementById('question-header');
const progressContainerEl = document.getElementById('progress-container');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const submitBtn = document.getElementById('submit-exam-btn');
const resultBoxEl = document.getElementById('result-box');
const currentQuestionInfoEl = document.getElementById('current-question-info');
const examTabsContainer = document.getElementById('exam-selection-tabs');
const correctAnswerDisplayEl = document.getElementById('correct-answer-display');
const correctAnswerTextEl = document.getElementById('correct-answer-text');
const examSubjectTitleEl = document.getElementById('exam-subject-title');
const resultNameClassEl = document.getElementById('result-name-class');


// =========================================================
//                  II. LOGIC CHUYỂN ĐỔI MÀN HÌNH (SCREEN FLOW)
// =========================================================

/** Hàm chung để chuyển đổi màn hình */
function switchScreen(activeScreen) {
    const screens = [infoScreen, menuScreen, examScreen];
    screens.forEach(screen => {
        if (screen === activeScreen) {
            screen.classList.remove('hidden');
            screen.classList.add('active');
        } else {
            screen.classList.add('hidden');
            screen.classList.remove('active');
        }
    });
}

/** Chuyển từ Info Screen sang Menu Screen */
function goToMenuScreen() {
    studentInfo.name = studentNameInput.value.trim();
    studentInfo.className = studentClassInput.value.trim();
    
    // Kiểm tra lại lần cuối
    if (!studentInfo.name || !studentInfo.className) {
        infoWarningEl.classList.remove('hidden');
        return;
    }
    infoWarningEl.classList.add('hidden');
    
    // Hiển thị thông tin thí sinh trên Menu
    displayInfoEl.textContent = `Thí sinh: ${studentInfo.name} - Lớp ${studentInfo.className}`;
    switchScreen(menuScreen);
}

/** Chuyển về Info Screen (Logout) */
function goToInfoScreen() {
    studentInfo.name = '';
    studentInfo.className = '';
    studentNameInput.value = '';
    studentClassInput.value = '';
    // Khởi tạo lại trạng thái nút
    updateStartMenuButtonState(); 
    switchScreen(infoScreen);
}

/** Chuyển từ Menu Screen sang Exam Screen và bắt đầu bài thi */
function startExam(subjectKey, examId = 1) {
    currentSubject = subjectKey;
    examSubjectTitleEl.textContent = `Bài thi: ${ALL_QUESTION_BANKS[subjectKey].title}`;
    switchScreen(examScreen);
    initExam(examId);
}

// =========================================================
//                  III. HÀM TIỆN ÍCH VÀ RÚT ĐỀ 
// =========================================================

/** Hàm xáo trộn mảng (Fisher-Yates) */
function shuffleArray(array) {
    const arr = [...array]; 
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/** HÀM RÚT ĐỀ THI 10 CÂU: Đảm bảo phân phối đồng đều các câu hỏi */
function generateExam(examId) {
    const bankData = ALL_QUESTION_BANKS[currentSubject];
    if (!bankData || !bankData.bank || bankData.bank.length === 0) {
        return [];
    }
    
    // --- BƯỚC 1: CHUẨN BỊ BANK ĐÃ XÁO TRỘN VÀ TÍNH TOÁN ---
    if (!shuffledQuestionBank[currentSubject]) {
        shuffledQuestionBank[currentSubject] = shuffleArray(bankData.bank);
    }
    const bank = shuffledQuestionBank[currentSubject];
    const { config } = bankData;
    
    let exam = [];
    
    // Số câu hỏi cần có cho mỗi loại trong đề
    const C1_NEEDED = config.C1;
    const N_NEEDED = config.N;
    
    // Lọc các câu C1 và N từ ngân hàng đã xáo trộn
    const C1_Bank = bank.filter(q => q.type === 'C1');
    const N_Bank = bank.filter(q => q.type === 'N');
    
    // --- BƯỚC 2: RÚT CÂU HỎI DẠNG N (Nối/Điền từ) ---
    // Sử dụng kỹ thuật lặp vòng (Round-Robin) dựa trên examId
    let N_start_index = (examId - 1) * N_NEEDED;
    
    for (let i = 0; i < N_NEEDED; i++) {
        // Index thực tế trong bank: (start_index + i) % N_Bank.length
        let index = (N_start_index + i) % N_Bank.length;
        if (N_Bank[index]) {
            exam.push(N_Bank[index]);
        }
    }
    
    // --- BƯỚC 3: RÚT CÂU HỎI DẠNG C1 (Chọn 1) ---
    // Sử dụng kỹ thuật lặp vòng (Round-Robin) dựa trên examId
    let C1_start_index = (examId - 1) * C1_NEEDED;
    
    for (let i = 0; i < C1_NEEDED; i++) {
        // Index thực tế trong bank: (start_index + i) % C1_Bank.length
        let index = (C1_start_index + i) % C1_Bank.length;
        if (C1_Bank[index]) {
            exam.push(C1_Bank[index]);
        }
    }

    // --- BƯỚC 4: KIỂM TRA VÀ XÁO TRỘN CUỐI CÙNG ---
    // Đảm bảo số lượng câu hỏi chính xác là 10.
    if (exam.length !== TOTAL_QUESTIONS) {
        // Xử lý trường hợp ngân hàng đề quá nhỏ, không đủ để rút hết các câu theo cấu hình.
        console.error(`Lỗi: Không đủ câu hỏi (${exam.length}/${TOTAL_QUESTIONS}) để tạo đề theo cấu hình.`)
    }
    
    // Xáo trộn vị trí các câu hỏi trong đề thi để tránh thứ tự C1/N cố định
    return shuffleArray(exam);
}

// =========================================================
//                  IV. HÀM HIỂN THỊ (RENDER)
// =========================================================

/** Tạo các nút 1-10 và gắn sự kiện */
function setupProgressBar() {
    progressContainerEl.innerHTML = ''; 
    for (let i = 0; i < currentExam.length; i++) {
        const button = document.createElement('button');
        button.className = 'q-number';
        button.textContent = i + 1;
        button.dataset.index = i; 
        
        button.addEventListener('click', () => {
            if (!isExamSubmitted) { 
                saveUserAnswer(currentQuestionIndex);
            }
            renderQuestion(i);
        });
        progressContainerEl.appendChild(button);
    }
}

/** Cập nhật trạng thái và màu sắc của Progress Bar */
function updateProgressBar(index) {
    const progressButtons = document.querySelectorAll('.q-number');
    progressButtons.forEach((btn, i) => {
        btn.classList.remove('active', 'correct', 'incorrect', 'answered');
        
        if (!isExamSubmitted) {
            // Chỉ thêm class 'answered' nếu bài chưa nộp
            if (userAnswers[i] !== null) {
                btn.classList.add('answered');
            }
        } else {
            // Sau khi nộp, hiển thị kết quả
            const isCorrect = checkAnswer(currentExam[i], userAnswers[i]);
            btn.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
    });
    
    if(progressButtons[index]) {
        progressButtons[index].classList.add('active');
    }
    
    // Hiển thị thông tin câu hỏi chính xác
    currentQuestionInfoEl.textContent = `Câu hỏi | Đề ${currentExamId}: ${index + 1}/${currentExam.length}`;
}

/** Hiển thị câu trả lời đã lưu khi chuyển lại câu cũ */
function loadUserAnswer(question) {
    const savedAnswer = userAnswers[currentQuestionIndex];
    if (savedAnswer === null) return;
    
    if (question.type === 'C1') {
        const radio = document.querySelector(`input[name="q${question.id}"][value="${savedAnswer}"]`);
        if (radio) radio.checked = true;
    } else if (question.type === 'N') { 
        for (const leftItem in savedAnswer) {
            const select = document.querySelector(`select[data-left-item="${leftItem}"]`);
            if (select) select.value = savedAnswer[leftItem];
        }
    }
}

/** Hiển thị câu hỏi và các tùy chọn trả lời */
function renderQuestion(index) {
    if (index < 0 || index >= currentExam.length) return;

    const question = currentExam[index];
    currentQuestionIndex = index;
    const disabledAttr = isExamSubmitted ? 'disabled' : ''; 

    questionHeaderEl.textContent = `Câu hỏi ${index + 1}:`;
    questionTextEl.textContent = question.text;
    answerOptionsEl.innerHTML = ''; 
    correctAnswerDisplayEl.classList.add('hidden'); 

    let htmlContent = '';

    switch (question.type) {
        case 'C1':
            // Xáo trộn đáp án C1 để tránh bị lặp thứ tự
            const shuffledOptions = shuffleArray(question.options);
            shuffledOptions.forEach((option) => {
                htmlContent += `
                    <label class="option-item">
                        <input type="radio" name="q${question.id}" value="${option}" ${disabledAttr}>
                        ${option}
                    </label>
                `;
            });
            break;

        case 'N':
            htmlContent += '<div class="matching-container">';
            // Xáo trộn các lựa chọn bên phải (các từ cần điền)
            const rightOptions = shuffleArray(question.pairs.map(p => p.right));
            
            question.pairs.forEach((pair) => {
                htmlContent += `
                    <div class="match-row">
                        <span class="left-item">${pair.left}</span>
                        <select class="match-select" data-left-item="${pair.left}" ${disabledAttr}>
                            <option value="">-- Chọn đáp án --</option>
                            ${rightOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                        </select>
                    </div>
                `;
            });
            htmlContent += '</div>';
            break;
    }
    
    answerOptionsEl.innerHTML = htmlContent;
    loadUserAnswer(question);
    updateNavigationButtons();
    updateProgressBar(index);
    
    // HIỂN THỊ ĐÁP ÁN ĐÚNG KHI XEM LẠI
    if (isExamSubmitted) {
        showCorrectAnswer(question);
    }
}

/** Hiển thị đáp án đúng */
function showCorrectAnswer(question) {
    let answerText = '';
    if (question.type === 'C1') {
        answerText = question.correctAnswer;
    } else if (question.type === 'N') {
        // Hiển thị các cặp đúng
        answerText = question.pairs.map((p, index) => `${index + 1}. ${p.left} -> ${p.right}`).join('; ');
    }
    correctAnswerTextEl.textContent = answerText;
    correctAnswerDisplayEl.classList.remove('hidden');
}


// =========================================================
//                  V. LOGIC LƯU, ĐIỀU HƯỚNG VÀ CHẤM ĐIỂM
// =========================================================

/** Lưu câu trả lời hiện tại của người dùng vào mảng userAnswers */
function saveUserAnswer(index) {
    if (isExamSubmitted) return; 

    const question = currentExam[index];
    let answer = null;
    
    if (question.type === 'C1') {
        const selectedRadio = document.querySelector(`input[name="q${question.id}"]:checked`);
        if (selectedRadio) {
            answer = selectedRadio.value;
        }
    } else if (question.type === 'N') {
        const matchingPairs = {};
        const selects = document.querySelectorAll('.match-select');
        
        selects.forEach(select => {
            if (select.value) {
                matchingPairs[select.dataset.leftItem] = select.value;
            }
        });
        
        // Chỉ lưu nếu có ít nhất 1 cặp được chọn 
        if (Object.keys(matchingPairs).length > 0) { 
             answer = matchingPairs; 
        } else {
             // Kiểm tra nếu tất cả đều rỗng, thì gán null để nút không chuyển màu
             const hasAnySelection = Array.from(selects).some(s => s.value !== "");
             answer = hasAnySelection ? matchingPairs : null;
        }
    }
    
    userAnswers[index] = answer;
    updateProgressBar(currentQuestionIndex);
}

/** Cập nhật trạng thái enabled/disabled của nút điều hướng */
function updateNavigationButtons() {
    
    if (currentExam.length === 0) {
        nextBtn.disabled = true;
        prevBtn.disabled = true;
        submitBtn.style.display = 'none'; 
        return;
    }
    
    if (isExamSubmitted) {
        nextBtn.disabled = true;
        prevBtn.disabled = true;
        submitBtn.style.display = 'none'; 
        return;
    }
    
    submitBtn.style.display = 'block';
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === currentExam.length - 1;
}

/** Kiểm tra đáp án của 1 câu hỏi */
function checkAnswer(question, userAnswer) {
    if (userAnswer === null) return false;

    if (question.type === 'C1') {
        return userAnswer === question.correctAnswer;
    }
    
    if (question.type === 'N') {
        // Phải trả lời hết các cặp mới được xem xét là đúng (hoặc trả lời đúng hết)
        if (Object.keys(userAnswer).length !== question.pairs.length) {
            return false;
        }

        for (const userLeft in userAnswer) {
            const userRight = userAnswer[userLeft];
            const correctPair = question.pairs.find(p => p.left === userLeft);
            
            // Kiểm tra xem câu trả lời của user có khớp với đáp án đúng không
            if (!correctPair || correctPair.right !== userRight) {
                return false;
            }
        }
        return true;
    }
    
    return false;
}

/** HÀM CHẤM ĐIỂM TOÀN BỘ BÀI THI */
function checkExam() {
    let correctCount = 0;
    
    isExamSubmitted = true;
    submitBtn.disabled = true;
    
    for (let i = 0; i < currentExam.length; i++) {
        const isCorrect = checkAnswer(currentExam[i], userAnswers[i]);
        if (isCorrect) {
            correctCount++;
        }
    }
    
    // Cập nhật Hộp Kết Quả (Hiển thị Tên và Lớp)
    resultNameClassEl.textContent = `Thí sinh: ${studentInfo.name} - Lớp ${studentInfo.className}`; 
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('incorrect-count').textContent = TOTAL_QUESTIONS - correctCount;
    resultBoxEl.classList.remove('hidden');

    let statusMessage = document.getElementById('exam-status');
    
    if (correctCount >= PASS_SCORE) {
        statusMessage.textContent = "CHÚC MỪNG, ĐẠT YÊU CẦU!";
        statusMessage.style.color = 'green';
    } else {
        statusMessage.textContent = "CHƯA ĐẠT (Cần ôn tập thêm)";
        statusMessage.style.color = 'orange';
    }
    
    // Vô hiệu hóa nút điều hướng
    updateNavigationButtons();
    
    // Cập nhật lại thanh tiến độ màu sắc (hiển thị đúng/sai)
    updateProgressBar(currentQuestionIndex);
    
    // Hiển thị lại câu hiện tại (để disable input và show đáp án đúng)
    renderQuestion(currentQuestionIndex);
}

// =========================================================
//                  VI. KHỞI TẠO VÀ SỰ KIỆN
// =========================================================

/** HÀM KHỞI TẠO BÀI THI (trong Exam Screen) */
function initExam(examId = 1) {
    currentExamId = examId;
    isExamSubmitted = false; 
    
    // Đảm bảo bank đã được xáo trộn một lần khi môn học mới được chọn
    if (!shuffledQuestionBank[currentSubject]) {
        shuffledQuestionBank[currentSubject] = shuffleArray(ALL_QUESTION_BANKS[currentSubject].bank);
    }
    
    // TẠO ĐỀ THI MỚI DỰ TRÊN MÔN HỌC VÀ ID ĐỀ
    currentExam = generateExam(examId); 
    
    // Kiểm tra lỗi dữ liệu (nếu bank quá nhỏ)
    if (currentExam.length !== TOTAL_QUESTIONS) {
        const currentBank = ALL_QUESTION_BANKS[currentSubject];
        const fileName = `questions_${currentSubject.toLowerCase()}.js`;

        examSubjectTitleEl.textContent = `Bài thi: LỖI DỮ LIỆU (${currentBank.title})`;
        questionHeaderEl.textContent = `LỖI: Không thể tạo đề thi (${currentExam.length}/${TOTAL_QUESTIONS} câu).`;
        questionTextEl.textContent = `Nguyên nhân: File '${fileName}' bị thiếu câu hỏi hoặc lỗi cấu trúc. (Bank hiện có ${currentBank.bank.length} câu, cần ít nhất ${currentBank.config.C1} C1 và ${currentBank.config.N} N)`;
        answerOptionsEl.innerHTML = '';
        progressContainerEl.innerHTML = ''; 
        
        submitBtn.style.display = 'none'; 
        updateNavigationButtons(); 
        return; 
    }
    
    currentQuestionIndex = 0;
    userAnswers = Array(TOTAL_QUESTIONS).fill(null);
    
    // Reset giao diện và các nút
    resultBoxEl.classList.add('hidden');
    submitBtn.disabled = false;
    correctAnswerDisplayEl.classList.add('hidden');
    submitBtn.style.display = 'block';
    
    submitBtn.textContent = 'KẾT THÚC BÀI THI'; 

    // Cập nhật tab active
    document.querySelectorAll('.exam-tab').forEach(tab => {
        if (parseInt(tab.dataset.examId) === examId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    setupProgressBar(); 
    renderQuestion(currentQuestionIndex); 
}

/** HÀM FIX LỖI: Kiểm tra và cập nhật trạng thái nút Bắt đầu làm bài */
function updateStartMenuButtonState() {
    const name = studentNameInput.value.trim();
    const className = studentClassInput.value.trim();
    
    // Kích hoạt nút nếu cả hai trường đều có nội dung (không trống)
    startMenuBtn.disabled = !(name && className); 
    
    // Xóa cảnh báo nếu người dùng đang nhập
    if (name || className) {
        infoWarningEl.classList.add('hidden');
    }
}


// --- GẮN SỰ KIỆN CHUYỂN MÀN HÌNH ---

// 1. Info Screen
studentNameInput.addEventListener('input', updateStartMenuButtonState);
studentClassInput.addEventListener('input', updateStartMenuButtonState);

// Khởi tạo trạng thái nút khi tải trang
updateStartMenuButtonState(); 

startMenuBtn.addEventListener('click', goToMenuScreen);
logoutBtn.addEventListener('click', goToInfoScreen);


// 2. Menu Screen
menuButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const subject = e.currentTarget.dataset.subject;
        if (subject) {
            // Reset lại ngân hàng đã xáo trộn khi chuyển môn
            shuffledQuestionBank = {}; 
            startExam(subject);
        }
    });
});
backToMenuBtn.addEventListener('click', () => {
    // Lưu câu trả lời trước khi quay lại menu (nếu chưa nộp bài)
    if (!isExamSubmitted) {
        saveUserAnswer(currentQuestionIndex);
    }
    switchScreen(menuScreen); 
});


// 3. Exam Screen
nextBtn.addEventListener('click', () => {
    saveUserAnswer(currentQuestionIndex); 
    if (currentQuestionIndex < currentExam.length - 1) {
        renderQuestion(currentQuestionIndex + 1);
    }
});

prevBtn.addEventListener('click', () => {
    saveUserAnswer(currentQuestionIndex); 
    if (currentQuestionIndex > 0) {
        renderQuestion(currentQuestionIndex - 1);
    }
});

submitBtn.addEventListener('click', () => {
    // Thêm xác nhận trước khi nộp
    if(confirm('Bạn có chắc chắn muốn kết thúc bài thi? Kết quả sẽ được công bố ngay lập tức.')) {
        saveUserAnswer(currentQuestionIndex); 
        checkExam();
    }
});

document.getElementById('select-new-exam-btn').addEventListener('click', () => {
    // Chỉ tạo lại đề mới, giữ nguyên tab đang chọn
    initExam(currentExamId); 
});

examTabsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('exam-tab')) {
        // Luôn cho phép chuyển tab, nhưng nếu chưa nộp bài thì phải lưu đáp án trước
        if (!isExamSubmitted) {
            saveUserAnswer(currentQuestionIndex);
        }
        
        // Tạo đề mới và chuyển sang tab mới
        const newExamId = parseInt(e.target.dataset.examId);
        // Kiểm tra ID có hợp lệ (<= NUM_EXAMS)
        if (newExamId <= NUM_EXAMS) {
            initExam(newExamId);
        }
    }
});


// KHỞI ĐỘNG ỨNG DỤNG LẦN ĐẦU
// Bắt đầu từ màn hình nhập thông tin
switchScreen(infoScreen);