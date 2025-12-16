// Cấu hình đề thi Lịch sử và Địa lí: 7 câu C1, 3 câu N/Điền từ
const EXAM_CONFIG_LS_DL = { 
    C1: 7, // Câu hỏi chọn 1 (A, B, C, D)
    N: 3   // Câu hỏi Nối/Điền từ
};

const questionBank_LS_DL = [
    // --- CÂU HỎI CHỌN 1 (C1) ---
    {
        id: 'lsdl01',
        type: 'C1',
        text: 'Lãnh thổ Việt Nam bao gồm những thành phần nào?',
        options: [
            'Vùng đất và vùng biển.',
            'Vùng đất, vùng biển và vùng trời.',
            'Vùng đất và vùng trời.',
            'Vùng biển và vùng trời.'
        ],
        correctAnswer: 'Vùng đất, vùng biển và vùng trời.' 
    },
    {
        id: 'lsdl02',
        type: 'C1',
        text: 'Biểu tượng của đất nước, con người Việt Nam là:',
        options: [
            'Quốc huy',
            'Quốc ca',
            'Quốc kì',
            'Cả 3 ý A, B, C đều đúng'
        ],
        correctAnswer: 'Cả 3 ý A, B, C đều đúng'
    },
    {
        id: 'lsdl03',
        type: 'C1',
        text: 'Đặc điểm khí hậu ở nước ta?',
        options: [
            'Khí hậu nóng ẩm.',
            'Khí hậu nhiệt đới ẩm gió mùa .',
            'Khí hậu ẩm ướt.',
            'Khí hậu ôn đới mùa hạ.'
        ],
        correctAnswer: 'Khí hậu nhiệt đới ẩm gió mùa .'
    },
    {
        id: 'lsdl04',
        type: 'C1',
        text: 'Vùng biển Việt Nam thuộc biển nào?',
        options: [
            'Biển Đông.',
            'Biển Nha Trang.',
            'Biển Thái Bình.',
            'Biển Thiên Cầm.'
        ],
        correctAnswer: 'Biển Đông.'
    },
    {
        id: 'lsdl05',
        type: 'C1',
        text: 'Dấu tích khảo cổ nào dưới đây là bằng chứng về sự ra đời và tồn tại của nước Âu Lạc?',
        options: [
            'Mũi tên đồng.',
            'Nhẫn vàng có hình bò Nan-di.',
            'Tượng thần Vit-xnu.',
            'Dấu tích Đền thần Mặt Trời.'
        ],
        correctAnswer: 'Mũi tên đồng.'
    },
    {
        id: 'lsdl06',
        type: 'C1',
        text: 'Khu đền tháp Mỹ Sơn (Quảng Nam) được UNESCO ghi danh là:',
        options: [
            'Di sản thiên nhiên thế giới.',
            'Di sản văn hóa phi vật thể.',
            'Di sản văn hóa thế giới.',
            'Di sản tư liệu thế giới.'
        ],
        correctAnswer: 'Di sản văn hóa thế giới.'
    },
    {
        id: 'lsdl07',
        type: 'C1',
        text: 'Thục Phán đã lập ra nước Âu Lạc sau cuộc kháng chiến chống quân nào?',
        options: [
            'Quân Thanh',
            'Quân Mông-Nguyên',
            'Quân Minh',
            'Quân Tần'
        ],
        correctAnswer: 'Quân Tần'
    },
    {
        id: 'lsdl08',
        type: 'C1',
        text: 'Vương quốc Chăm-pa nằm ở khu vực nào nước ta ngày nay?',
        options: [
            'Miền Trung.',
            'Duyên hải Nam Trung Bộ.',
            'Đông Nam Bộ.',
            'Miền Nam.'
        ],
        // SỬA THEO YÊU CẦU
        correctAnswer: 'Miền Trung.' 
    },
    {
        id: 'lsdl09',
        type: 'C1',
        text: 'Cuộc khởi nghĩa nào dưới đây không diễn ra trong thời kì Bắc thuộc?',
        options: [
            'Khởi nghĩa Lam Sơn.',
            'Khởi nghĩa Lí Bí.',
            'Khởi nghĩa Mai Thúc Loan.',
            'Khởi nghĩa Hai Bà Trưng.'
        ],
        correctAnswer: 'Khởi nghĩa Lam Sơn.'
    },
    {
        id: 'lsdl10',
        type: 'C1',
        text: 'Nội dung nào dưới đây là hoạt động giáo dục dưới thời Trần?',
        options: [
            'Xây dựng Văn Miếu, lập Quốc Tử Giám.',
            'Thi cử đặt lệ lấy đỗ Tam Khôi.',
            'Xây dựng lại Quốc Tử Giám, mở thêm trường và khoa thi.',
            'Tổ chức khoa thi đầu tiên.'
        ],
        // SỬA THEO YÊU CẦU
        correctAnswer: 'Thi cử đặt lệ lấy đỗ Tam Khôi.' 
    },
    {
        id: 'lsdl11',
        type: 'C1',
        text: 'Ai là người chỉ huy trận thủy chiến trên sông Bạch Đằng năm 1288 của quân dân nhà Trần?',
        options: [
            'Trần Thủ Độ',
            'Trần Quang Khải',
            'Trần Quốc Tuấn',
            'Trần Khánh Dư'
        ],
        correctAnswer: 'Trần Quốc Tuấn'
    },
    {
        id: 'lsdl12',
        type: 'C1',
        text: 'Vua Lý Thái Tổ quyết định dời đô từ Hoa Lư về thành Đại La năm nào?',
        options: [
            '1010',
            '1009',
            '2010',
            '938'
        ],
        correctAnswer: '1010'
    },
    // Các câu hỏi phụ về Đồng Nai
    {
        id: 'lsdl13',
        type: 'C1',
        text: 'Thắng cảnh thác Đắk Mai nằm ở xã nào của tỉnh Đồng Nai?',
        options: [
            'Đa Kia',
            'Bù Đăng',
            'Bù Gia Mập',
            'Nghĩa Trung'
        ],
        // SỬA THEO YÊU CẦU
        correctAnswer: 'Bù Gia Mập' 
    },
    {
        id: 'lsdl14',
        type: 'C1',
        text: 'Từ ngày 1/7/2025, tỉnh Đồng Nai có bao nhiêu xã (phường) sau sắp xếp sáp nhập các đơn vị hành chính?',
        options: [
            '94',
            '95',
            '96',
            '97'
        ],
        // SỬA THEO YÊU CẦU
        correctAnswer: '95'
    },
    {
        id: 'lsdl15',
        type: 'C1',
        text: 'Tượng đài chiến thắng Đồng Xoài nằm ở phường nào của tỉnh Đồng Nai?',
        options: [
            'Đồng Xoài',
            'Bình Phước',
            'Trấn Biên',
            'Chơn Thành'
        ],
        correctAnswer: 'Bình Phước'
    },
    {
        id: 'lsdl16',
        type: 'C1',
        text: 'Từ ngày 1/7/2025, tỉnh Đồng Nai có diện tích đứng thứ mấy so với cả nước?',
        options: [
            '6',
            '7',
            '8',
            '9'
        ],
        correctAnswer: '9' 
    },

    // --- CÂU HỎI ĐIỀN TỪ/NỐI CẶP (N) ---
    {
        id: 'lsdl17',
        type: 'N',
        text: 'Điền các từ: *Trường Sa, Hoàng Sa, chủ quyền, cột mốc* vào chỗ trống cho đúng:',
        pairs: [
            {
                left: 'Từ xưa đến nay, các thế hệ người Việt Nam đã giành nhiều công sức để khai phá, xác lập và bảo vệ (1)………………… biển, đảo.',
                right: 'chủ quyền'
            },
            {
                left: 'Họ cắm (2)………………. trên quần đảo Hoàng Sa, quần đảo Trường Sa.',
                right: 'cột mốc'
            },
            {
                left: 'Năm 1982, Việt Nam thành lập huyện đảo Hoàng Sa (thuộc thành phố Đà Nẵng) và huyện đảo (3)………………… ( thuộc tỉnh Khánh Hòa).',
                right: 'Trường Sa'
            },
            {
                left: 'Ngược lại, huyện đảo Trường Sa (thuộc tỉnh Khánh Hòa) được thành lập cùng với huyện đảo (4)………………… (thuộc thành phố Đà Nẵng).',
                right: 'Hoàng Sa'
            }
        ]
    },
    {
        id: 'lsdl18',
        type: 'N',
        text: 'Điền các từ: *màu mỡ, đồi núi, hai nhóm, đồng bằng* vào chỗ trống cho đúng:',
        pairs: [
            {
                left: 'Việt Nam có (1)……………… đất chính là đất phù sa và đất phe-ra-lít.',
                right: 'hai nhóm'
            },
            {
                left: 'Đất phe-ra-lít phân bố chủ yếu ở vùng (2)………………, có màu đỏ vàng đến nâu đỏ.',
                right: 'đồi núi'
            },
            {
                left: 'Đất phù sa phân bố chủ yếu ở vùng (3)……………….',
                right: 'đồng bằng'
            },
            {
                left: 'Đất phù sa khá (4)……………….',
                right: 'màu mỡ'
            }
        ]
    },
    {
        id: 'lsdl19',
        type: 'N',
        text: 'Nối thông tin về các nhà nước/vương quốc ở cột A với nội dung ra đời ở cột B cho phù hợp:',
        pairs: [
            {
                left: 'a. Nhà nước Văn Lang.',
                right: 'Ra đời vào khoảng thế kỉ VII trước Công nguyên, là nhà nước đầu tiên của nước ta.'
            },
            {
                left: 'b. Vương quốc Phù Nam.',
                right: 'Ra đời vào thế kỉ I, gắn với truyền thuyết về cuộc hôn nhân giữa Hồn Điền và Liễu Diệp.'
            },
            {
                left: 'c. Vương quốc Chăm-pa.',
                right: 'Ra đời vào thế kỉ II, xây dựng đền tháp để làm nơi thờ cúng thần linh và sinh hoạt cộng đồng.'
            },
            {
                left: 'd. Nước Âu Lạc.',
                right: 'Do Thục Phán (An Dương Vương) lập ra sau kháng chiến chống Tần thắng lợi (năm 208 trước Công nguyên)'
            }
        ]
    }
];