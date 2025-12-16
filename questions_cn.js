// Cấu hình đề thi Công nghệ: 7 câu C1, 3 câu N/Điền từ
const EXAM_CONFIG_CN = { 
    C1: 7, 
    N: 3   
};

const questionBank_CN = [
    // --- CÂU HỎI CHỌN 1 (C1) ---
    {
        id: 'cn01',
        type: 'C1',
        text: 'Khi làm nhà đồ chơi, em cần lưu ý những gì?',
        options: [
            'Sử dụng vật liệu và dụng cụ đảm bảo an toàn, vệ sinh, tiết kiệm.',
            'Chọn màu tùy thích để tiết kiệm chi phí, vệ sinh, tiết kiệm.',
            'Sử dụng vật liệu tiết kiệm, an toàn, dùng tất cả màu sắc có sẵn.',
            'Chỉ dùng một màu duy nhất cho toàn bộ sản phẩm cho tiết kiệm.'
        ],
        correctAnswer: 'Sử dụng vật liệu và dụng cụ đảm bảo an toàn, vệ sinh, tiết kiệm.' 
    },
    {
        id: 'cn02',
        type: 'C1',
        text: 'Khi trang trí sản phẩm đồ chơi, em cần lưu ý điều gì?',
        options: [
            'Trang trí quá nhiều chi tiết khiến sản phẩm rối mắt.',
            'Sử dụng màu sắc hài hòa, phù hợp và không lãng phí.',
            'Dùng thật nhiều màu để sản phẩm nổi bật hơn.',
            'Trang trí tùy ý, không cần quan tâm đến thẩm mỹ.'
        ],
        correctAnswer: 'Sử dụng màu sắc hài hòa, phù hợp và không lãng phí.' 
    },
    {
        id: 'cn03',
        type: 'C1',
        text: 'Em hãy cho biết vai trò chính của bóng đèn điện trong đời sống?',
        options: ['Làm mát', 'Chiếu sáng', 'Giúp liên lạc', 'Giúp học tập'],
        correctAnswer: 'Chiếu sáng' 
    },
    {
        id: 'cn04',
        type: 'C1',
        text: 'Trong các sản phẩm công nghệ dưới đây, sản phẩm nào có thể gây hại cho mắt nếu sử dụng không đúng cách?',
        options: ['Ô tô', 'Xe máy', 'Quạt máy', 'Ti vi'],
        correctAnswer: 'Ti vi' 
    },
    {
        id: 'cn05',
        type: 'C1',
        text: 'Thiết bị nào giúp chúng ta học tập thuận tiện hơn vào buổi tối?',
        options: ['Bóng đèn', 'Quạt máy', 'Tivi', 'Tủ lạnh'],
        correctAnswer: 'Bóng đèn' 
    },
    {
        id: 'cn06',
        type: 'C1',
        text: 'Trong các sản phẩm công nghệ dưới đây, sản phẩm nào dùng để giặt quần áo?',
        options: ['Nồi cơm điện', 'Tủ lạnh', 'Máy giặt', 'Máy quạt'],
        correctAnswer: 'Máy giặt' 
    },
    {
        id: 'cn07',
        type: 'C1',
        text: 'Để tạo ra một sản phẩm công nghệ, trước tiên cần phải làm gì?',
        options: ['Mua vật liệu', 'Làm sản phẩm', 'Thiết kế', 'Mua dụng cụ'],
        correctAnswer: 'Thiết kế' 
    },
    {
        id: 'cn08',
        type: 'C1',
        text: 'Bước cuối cùng để sản phẩm công nghệ hoàn thành là:',
        options: ['Chọn vật liệu', 'Thiết kế', 'Làm sản phẩm', 'Thử nghiệm, hoàn thiện'],
        correctAnswer: 'Thử nghiệm, hoàn thiện' 
    },
    {
        id: 'cn09',
        type: 'C1',
        text: 'Khi có ông, bà ở nhà đau ốm nguy cấp em sẽ gọi số điện thoại khẩn cấp nào?',
        options: ['112', '113', '114', '115'],
        correctAnswer: '115' 
    },
    {
        id: 'cn10',
        type: 'C1',
        text: 'Khi cần báo cháy khẩn cấp em sẽ gọi số điện thoại nào?',
        options: ['112', '113', '114', '115'],
        correctAnswer: '114' 
    },
    {
        id: 'cn11',
        type: 'C1',
        text: 'Khi có trộm cướp hoặc mất an ninh, em nên gọi số nào?',
        options: ['112', '113', '114', '115'],
        correctAnswer: '113' 
    },
    {
        id: 'cn12',
        type: 'C1',
        text: 'Để báo những tình huống cần cứu hộ, cứu nạn thiên tai, có thể gọi:',
        options: ['112', '113', '114', '115'],
        correctAnswer: '112' 
    },

    // --- CÂU HỎI ĐIỀN TỪ/NỐI CẶP (N) ---
    {
        id: 'cn13',
        type: 'N',
        text: 'Đánh dấu vào ý chỉ **tác dụng chính** của Tủ lạnh và Ấm siêu tốc:',
        pairs: [
            {
                left: 'Tủ lạnh: Bảo quản đá viên, làm đá lạnh.',
                right: 'Đúng' 
            },
            {
                left: 'Tủ lạnh: Làm mát cho cả căn nhà.',
                right: 'Sai' 
            },
            {
                left: 'Tủ lạnh: Giúp bảo quản thực phẩm được tươi lâu và không bị ôi, thiu.',
                right: 'Đúng' 
            },
            {
                left: 'Ấm siêu tốc: Đun nước sôi nhanh.',
                right: 'Đúng' 
            },
            {
                left: 'Ấm siêu tốc: Hạ nhiệt độ nước nhanh.',
                right: 'Sai' 
            },
            {
                left: 'Ấm siêu tốc: Tiết kiệm thời gian khi cần nước nóng.',
                right: 'Đúng' 
            }
        ]
    },
    {
        id: 'cn15',
        type: 'N',
        text: 'Nối nhà khoa học với phát minh nổi tiếng của họ:',
        pairs: [
            {
                left: '1. Tô-mát Ê-đi-xơn sáng chế ra...',
                right: 'bóng đèn điện sợi đốt'
            },
            {
                left: '2. Các Ben sáng chế ra...',
                right: 'ô tô'
            },
            {
                left: '3. Giêm Oát sáng chế ra...',
                right: 'động cơ hơi nước'
            },
            {
                left: '4. O-vơ Rai và Uy-bơ Rai sáng chế ra...',
                right: 'máy bay'
            },
            {
                left: '5. A-lếch-xan-đơ Gra-ham Beo sáng chế ra...',
                right: 'điện thoại'
            }
        ]
    },
    {
        id: 'cn17',
        type: 'N',
        text: 'Nối các bước chính của thiết kế sản phẩm với tên công việc sao cho phù hợp:',
        pairs: [
            {
                left: 'Bước 1',
                right: 'Hình thành ý tưởng về sản phẩm.'
            },
            {
                left: 'Bước 2',
                right: 'Vẽ phác thảo sản phẩm và lựa chọn vật liệu dụng cụ.'
            },
            {
                left: 'Bước 3',
                right: 'Làm sản phẩm mẫu.'
            },
            {
                left: 'Bước 4',
                right: 'Đánh giá và hoàn thiện sản phẩm.'
            }
        ]
    }
];