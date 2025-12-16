// Cấu hình đề thi Khoa học: 7 câu C1, 3 câu N/Điền từ/Đúng Sai
const EXAM_CONFIG_KH = { 
    C1: 7, 
    N: 3   
};

const questionBank_KH = [
    // --- CÂU HỎI CHỌN 1 (C1) ---
    {
        id: 'kh01',
        type: 'C1',
        text: 'Khi trời khô hạn, đất trên đồng ruộng nứt nẻ. Điều đó chứng tỏ thành phần nào có trong đất đã bị mất đi?',
        options: ['Mùn', 'Khoáng', 'Không khí', 'Nước'],
        correctAnswer: 'Nước' 
    },
    {
        id: 'kh02',
        type: 'C1',
        text: 'Trong tự nhiên, các chất có thể tồn tại ở những trạng thái nào?',
        options: ['Trạng thái rắn, lỏng.', 'Trạng thái rắn, khí, nước.', 'Trạng thái rắn, lỏng, khí.', 'Trạng thái lỏng, nước, hơi.'],
        correctAnswer: 'Trạng thái rắn, lỏng, khí.' 
    },
    {
        id: 'kh03',
        type: 'C1',
        text: 'Đất gồm những thành phần nào?',
        options: [
            'Chất khoáng, ánh sáng, sỏi, đá, nước,...',
            'Sỏi, đá, ánh sáng, không khí, nước,…',
            'Chất khoáng, mùn, không khí, nước,…',
            'Chất khoáng, ánh sáng, mùn, sỏi, đá,…'
        ],
        correctAnswer: 'Chất khoáng, mùn, không khí, nước,…' 
    },
    {
        id: 'kh04',
        type: 'C1',
        text: 'Trong tự nhiên, Chất tồn tại ở trạng thái rắn được gọi là:',
        options: ['Chất lỏng.', 'Chất khí.', 'Chất rắn.', 'Chất hòa tan.'],
        correctAnswer: 'Chất rắn.' 
    },
    {
        id: 'kh05',
        type: 'C1',
        text: 'Các giai đoạn phát triển của thực vật có hoa là:',
        options: ['Cây nhỏ, cây trưởng thành.', 'Nảy mầm, cây con, trưởng thành.', 'Nảy mầm, trưởng thành.', 'Cả 3 ý A, B, C đều đúng.'],
        correctAnswer: 'Nảy mầm, cây con, trưởng thành.' 
    },
    {
        id: 'kh06',
        type: 'C1',
        text: 'Bộ phận nào trong cơ quan sinh sản của thực vật có hoa phát triển thành quả?',
        options: ['Bao phấn', 'Bầu nhụy', 'Noãn', 'Nhị'],
        correctAnswer: 'Bầu nhụy' 
    },
    {
        id: 'kh07',
        type: 'C1',
        text: 'Ngoài những cây mọc lên từ hạt, cây con có thể mọc lên từ một số bộ phận nào của cây mẹ?',
        options: ['Quả', 'Lá, thân, rễ', 'Chồi', 'Ngọn'],
        correctAnswer: 'Lá, thân, rễ' 
    },
    {
        id: 'kh08',
        type: 'C1',
        text: 'Các cơ quan sinh dục cái và cơ quan sinh dục đực của thực vật có hoa là:',
        options: ['Đài và cánh hoa.', 'Nhụy và nhị.', 'Đài và bao phấn.', 'Nhụy hoa và cánh hoa.'],
        correctAnswer: 'Nhụy và nhị.' 
    },
    {
        id: 'kh09',
        type: 'C1',
        text: 'Nguồn năng lượng nào dưới đây khi sử dụng tạo ra khí thải gây ô nhiễm môi trường?',
        options: ['Năng lượng mặt trời', 'Năng lượng gió', 'Năng lượng nước chảy', 'Năng lượng chất đốt'],
        correctAnswer: 'Năng lượng chất đốt' 
    },
    {
        id: 'kh10',
        type: 'C1',
        text: 'Vì sao năng lượng được coi là quan trọng trong cuộc sống?',
        options: [
            'Vì nó giúp con người thực hiện các hoạt động hằng ngày thuận tiện hơn và góp phần đảm bảo chất lượng cuộc sống.',
            'Vì nó giữ vai trò quan trọng trong nhiều lĩnh vực sản xuất, hỗ trợ quá trình làm việc và nâng cao năng suất lao động.',
            'Vì nó cần thiết cho mọi hoạt động của con người, sinh vật và các thiết bị, phương tiện, máy móc.',
            'Vì nó góp phần duy trì sự vận hành ổn định của môi trường sống và tạo điều kiện cho nhiều quá trình tự nhiên diễn ra bình thường.'
        ],
        correctAnswer: 'Vì nó cần thiết cho mọi hoạt động của con người, sinh vật và các thiết bị, phương tiện, máy móc.' 
    },
    {
        id: 'kh11',
        type: 'C1',
        text: 'Vật nào dưới đây hoạt động được nhờ sử dụng năng lượng gió?',
        options: ['Tủ lạnh.', 'Pin mặt trời.', 'Bánh xe nước.', 'Thuyền buồm.'],
        correctAnswer: 'Thuyền buồm.' 
    },
    {
        id: 'kh12',
        type: 'C1',
        text: 'Nguồn năng lượng nào dưới đây khi sử dụng không tạo ra khí thải gây ô nhiễm môi trường?',
        options: ['Xăng dầu.', 'Khí đốt.', 'Năng lượng mặt trời.', 'Củi đốt.'],
        correctAnswer: 'Năng lượng mặt trời.' 
    },

    // --- CÂU HỎI ĐÚNG SAI/NỐI CẶP (N) ---
    {
        id: 'kh13',
        type: 'N',
        text: 'Đánh dấu câu Đúng (Đ) hoặc Sai (S) cho các phát biểu dưới đây:',
        pairs: [
            {
                left: 'Hỗn hợp được tạo thành khi hai hay nhiều chất trộn lẫn với nhau.',
                right: 'Đúng' 
            },
            {
                left: 'Sự biến đổi hóa học xảy ra khi chất này biến đổi thành chất khác.',
                right: 'Đúng' 
            },
            {
                left: 'Chất ở trạng thái rắn không có hình dạng và chiếm khoảng không gian xác định.',
                right: 'Sai' 
            },
            {
                left: 'Đất chứa chất khoáng, chất hữu cơ (mùn), không khí, nước, ...',
                right: 'Đúng' 
            },
            {
                left: 'Dung dịch được tạo thành khi có hai chất lỏng hoặc chất lỏng và chất rắn hoà tan hoàn toàn vào nhau thành một hỗn hợp đồng nhất.',
                right: 'Đúng' 
            },
            {
                left: 'Chất ở trạng thái lỏng có hình dạng và chiếm khoảng không gian xác định.',
                right: 'Sai' 
            }
        ]
    },
    {
        id: 'kh14',
        type: 'N',
        text: 'Nối thông tin ở cột A với thông tin ở cột B cho phù hợp (Về các loại hoa và thụ phấn):',
        pairs: [
            {
                left: 'Hoa đơn tính',
                right: 'Chỉ có nhị hoặc nhụy.'
            },
            {
                left: 'Hoa lưỡng tính',
                right: 'Có cả nhị và nhụy trên cùng một hoa.'
            },
            {
                left: 'Hoa thụ phấn nhờ gió',
                right: 'Cánh hoa nhỏ, màu sắc không sặc sỡ, khô, nhẹ…'
            },
            {
                left: 'Hoa thụ phấn nhờ côn trùng',
                right: 'Cánh hoa to, màu sắc sặc sỡ, có mùi hương, mật hoa, chất dính…'
            },
            {
                left: 'Hoa đực',
                right: 'Chỉ có nhị'
            },
            {
                left: 'Hoa cái',
                right: 'Chỉ có nhuỵ'
            }
        ]
    },
    {
        id: 'kh15',
        type: 'N',
        text: 'Điền tên bộ phận của mạch điện thắp sáng đơn giản vào chỗ trống (1. Pin; 2. Bóng đèn; 3. Khóa/công tắc; 4. Dây dẫn):',
        pairs: [
            {
                left: '(1) Bộ phận cung cấp nguồn điện.',
                right: 'Pin (nguồn điện)'
            },
            {
                left: '(2) Bộ phận tạo ra ánh sáng.',
                right: 'Bóng đèn'
            },
            {
                left: '(3) Bộ phận đóng/ngắt mạch điện.',
                right: 'Khóa (công tắc)'
            },
            {
                left: '(4) Bộ phận dẫn điện.',
                right: 'Dây dẫn'
            }
        ]
    },
];