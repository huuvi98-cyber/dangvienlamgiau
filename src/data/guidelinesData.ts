/**
 * Dữ liệu chuẩn xác và giữ nguyên toàn bộ văn bản Quy định Đảng viên tham gia đầu tư, kinh doanh
 */

export interface BreakthroughViewpoint {
  id: number;
  title: string;
  changeFrom: string;
  changeTo: string;
  fullText: string;
  highlightText: string;
  iconName: string;
}

export interface CorePrinciple {
  id: number;
  article: string;
  title: string;
  content: string;
  highlights: string[];
  iconName: string;
}

export interface InvestmentType {
  typeNumber: number;
  code: string;
  title: string;
  description: string;
  riskLevel: 'Thấp' | 'Trung bình' | 'Khá cao' | 'Cao';
  badgeColor: string;
}

export interface GroupRule {
  id: string;
  article: string;
  groupName: string;
  shortDesc: string;
  iconName: string;
  noApprovalNeeded: string[];
  approvalNeeded: string[];
  prohibitedOrRestricted: string[];
  specialRights: string[];
  detailedContent: {
    title: string;
    items: string[];
    note?: string;
  }[];
}

export interface ScenarioQuestion {
  id: number;
  question: string;
  userRole: string;
  investmentType: string;
  answer: string;
  allowed: 'ALLOWED_NO_APPROVAL' | 'ALLOWED_WITH_APPROVAL' | 'PROHIBITED' | 'CONDITIONAL';
  explanation: string;
  articleRef: string;
}

// 5 QUAN ĐIỂM CHỈ ĐẠO ĐỘT PHÁ
export const BREAKTHROUGH_VIEWPOINTS: BreakthroughViewpoint[] = [
  {
    id: 1,
    title: 'Đổi mới tư duy',
    changeFrom: 'Cho phép',
    changeTo: 'Khuyến khích, tạo điều kiện',
    fullText: 'Chuyển từ “cho phép” sang “khuyến khích, tạo điều kiện” để đảng viên làm giàu hợp pháp, chính đáng.',
    highlightText: 'Khuyến khích, tạo điều kiện để đảng viên làm giàu hợp pháp, chính đáng',
    iconName: 'TrendingUp'
  },
  {
    id: 2,
    title: 'Phương thức quản lý',
    changeFrom: 'Chủ yếu “được làm / không được làm”',
    changeTo: '“Được làm - Được làm có điều kiện, có kiểm soát - Không được làm”',
    fullText: 'Chuyển từ tư duy chủ yếu “được làm/không được làm” sang “được làm - được làm có điều kiện, có kiểm soát - không được làm”, gắn với kiểm soát xung đột lợi ích.',
    highlightText: 'Được làm - được làm có điều kiện, có kiểm soát - không được làm',
    iconName: 'ShieldCheck'
  },
  {
    id: 3,
    title: 'Giới hạn tham gia',
    changeFrom: 'Cấm đoán cào bằng',
    changeTo: 'Phù hợp địa vị pháp lý, chức trách, rủi ro',
    fullText: 'Phù hợp với địa vị pháp lý, chức trách, mức độ rủi ro xung đột lợi ích.',
    highlightText: 'Địa vị pháp lý, chức trách, mức độ rủi ro xung đột lợi ích',
    iconName: 'Scale'
  },
  {
    id: 4,
    title: 'Phát huy vai trò của Đảng viên',
    changeFrom: 'Tách biệt kinh tế với công tác Đảng',
    changeTo: 'Gắn phát triển kinh tế với giữ vững bản chất của Đảng',
    fullText: 'Gắn phát huy vai trò đảng viên trong phát triển kinh tế với giữ vững bản chất của Đảng.',
    highlightText: 'Gắn phát triển kinh tế với giữ vững bản chất của Đảng',
    iconName: 'Award'
  },
  {
    id: 5,
    title: 'Đồng bộ pháp lý',
    changeFrom: 'Quy định chồng chéo, vướng mắc',
    changeTo: 'Đồng bộ Đảng - Nhà nước, quy định chuyển tiếp phù hợp',
    fullText: 'Đảm bảo đồng bộ giữa quy định của Đảng và pháp luật của Nhà nước, có các quy định về chuyển tiếp phù hợp.',
    highlightText: 'Đồng bộ giữa quy định của Đảng và pháp luật của Nhà nước',
    iconName: 'RefreshCw'
  }
];

// 5 NGUYÊN TẮC CỐT LÕI (ĐIỀU 3)
export const CORE_PRINCIPLES: CorePrinciple[] = [
  {
    id: 1,
    article: 'Điều 3 - Khoản 1',
    title: 'Tuân thủ và Kinh doanh có trách nhiệm',
    content: 'Tuân thủ những điều đảng viên không được làm, thực hành kinh doanh có trách nhiệm.',
    highlights: ['Những điều đảng viên không được làm', 'Thực hành kinh doanh có trách nhiệm'],
    iconName: 'CheckCircle2'
  },
  {
    id: 2,
    article: 'Điều 3 - Khoản 2',
    title: 'Không đặt thêm hạn chế trái quy định',
    content: 'Cấp ủy, tổ chức đảng không đặt thêm điều kiện, thủ tục hạn chế quyền đầu tư kinh doanh hợp pháp của đảng viên.',
    highlights: ['Không đặt thêm điều kiện, thủ tục', 'Quyền đầu tư kinh doanh hợp pháp'],
    iconName: 'Lock'
  },
  {
    id: 3,
    article: 'Điều 3 - Khoản 3',
    title: 'Giới hạn theo chức danh, nhiệm vụ',
    content: 'Áp dụng giới hạn theo chức danh, nhiệm vụ và nhóm đối tượng, bảo đảm yêu cầu kiểm soát xung đột lợi ích, bảo vệ bí mật nhà nước, bí mật công tác.',
    highlights: ['Kiểm soát xung đột lợi ích', 'Bảo vệ bí mật nhà nước, bí mật công tác'],
    iconName: 'UserCheck'
  },
  {
    id: 4,
    article: 'Điều 3 - Khoản 4',
    title: 'Không lợi dụng nguồn lực công và Lĩnh vực quản lý',
    content: 'Không sử dụng trái phép nguồn lực công, không đầu tư lĩnh vực trực tiếp quyết định, quản lý.',
    highlights: ['Không sử dụng trái phép nguồn lực công', 'Không đầu tư lĩnh vực trực tiếp quyết định, quản lý'],
    iconName: 'AlertTriangle'
  },
  {
    id: 5,
    article: 'Điều 3 - Khoản 5',
    title: 'Thẩm quyền chấp thuận',
    content: 'Việc chấp thuận đảng viên tham gia đầu tư kinh doanh do cấp có thẩm quyền quyết định.',
    highlights: ['Do cấp có thẩm quyền quyết định'],
    iconName: 'FileCheck2'
  }
];

// 4 LOẠI ĐẦU TƯ KINH DOANH
export const INVESTMENT_TYPES: InvestmentType[] = [
  {
    typeNumber: 1,
    code: 'Loại 1',
    title: 'Hoạt động chuyên môn, khai thác tài sản tạo thu nhập',
    description: 'Thực hiện các hoạt động chuyên môn, tay nghề và khai thác hợp pháp tài sản thuộc sở hữu cá nhân/gia đình để tạo thu nhập chính đáng.',
    riskLevel: 'Thấp',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
  },
  {
    typeNumber: 2,
    code: 'Loại 2',
    title: 'Đầu tư kinh doanh không thành lập tổ chức kinh tế và Không chi phối, quản lý, điều hành',
    description: 'Đầu tư kinh doanh (góp vốn, mua cổ phần, chứng khoán, hợp đồng đầu tư...) nhưng không thành lập tổ chức kinh tế và không chi phối, không quản lý, điều hành.',
    riskLevel: 'Trung bình',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300'
  },
  {
    typeNumber: 3,
    code: 'Loại 3',
    title: 'Đầu tư kinh doanh có thành lập tổ chức kinh tế hoặc chi phối nhưng không quản lý, điều hành',
    description: 'Đầu tư kinh doanh có đầu tư thành lập tổ chức kinh tế hoặc có chi phối nhưng không trực tiếp tham gia quản lý, điều hành.',
    riskLevel: 'Khá cao',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300'
  },
  {
    typeNumber: 4,
    code: 'Loại 4',
    title: 'Đầu tư kinh doanh có tham gia quản lý, điều hành (kể cả thành lập tổ chức kinh tế hoặc chi phối)',
    description: 'Đầu tư kinh doanh có tham gia trực tiếp quản lý, điều hành, kể cả đầu tư thành lập tổ chức kinh tế hoặc có quyền chi phối.',
    riskLevel: 'Cao',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300'
  }
];

// QUY ĐỊNH CỤ THỂ 6 NHÓM ĐỐI TƯỢNG
export const GROUP_RULES: GroupRule[] = [
  {
    id: 'ngoai-khu-vuc-cong',
    article: 'Điều 5',
    groupName: 'Đảng viên ngoài khu vực công',
    shortDesc: 'Được thực hiện cả 4 loại đầu tư kinh doanh và hoạt động kinh doanh pháp luật không cấm; không phải xin chấp thuận của tổ chức đảng.\nCấp ủy, tổ chức đảng có cơ chế phát hiện, thu hút, bồi dưỡng đảng viên tiêu biểu tham gia khu vực công, gắn với kiểm soát xung đột lợi ích.',
    iconName: 'Building2',
    noApprovalNeeded: [
      'Được thực hiện cả 4 loại đầu tư kinh doanh (Loại 1, Loại 2, Loại 3, Loại 4)',
      'Thực hiện các hoạt động kinh doanh mà pháp luật không cấm',
      'Không phải xin chấp thuận của tổ chức đảng'
    ],
    approvalNeeded: [],
    prohibitedOrRestricted: [
      'Phải tuân thủ các điều đảng viên không được làm và pháp luật kinh doanh'
    ],
    specialRights: [
      'Cấp ủy, tổ chức đảng có cơ chế phát hiện, thu hút, bồi dưỡng đảng viên tiêu biểu tham gia khu vực công, gắn với kiểm soát xung đột lợi ích.'
    ],
    detailedContent: [
      {
        title: 'Quyền hạn đầu tư kinh doanh',
        items: [
          'Được thực hiện cả 4 loại đầu tư kinh doanh và hoạt động kinh doanh pháp luật không cấm.',
          'Không phải xin chấp thuận của tổ chức đảng.'
        ]
      },
      {
        title: 'Cơ chế thu hút và phát triển',
        items: [
          'Cấp ủy, tổ chức đảng có cơ chế phát hiện, thu hút, bồi dưỡng đảng viên tiêu biểu tham gia khu vực công, gắn với kiểm soát xung đột lợi ích.'
        ]
      }
    ]
  },
  {
    id: 'can-bo-cong-chuc',
    article: 'Điều 6 và Điều 7',
    groupName: 'Đảng viên là cán bộ, công chức',
    shortDesc: '- Không phải xin chấp thuận: Đối với hoạt động chuyên môn, khai thác tài sản tạo thu nhập (loại 1); đầu tư kinh doanh nhưng không đầu tư thành lập tổ chức kinh tế và không chi phối, quản lý, điều hành (loại 2).\n(Được mở rộng quyền góp vốn, mua cổ phần, mua phần vốn góp, mua, bán, nắm giữ các loại chứng khoán và hợp đồng kinh doanh, thực hiện dự án đầu tư và các hình thức đầu tư, kinh doanh khác).\n- Cần xin chấp thuận (chỉ áp dụng với cán bộ, công chức không thuộc diện Bộ Chính trị, Ban Bí thư quản lý): Đầu tư kinh doanh có đầu tư thành lập tổ chức kinh tế hoặc chi phối nhưng không quản lý, điều hành.',
    iconName: 'UserCheck',
    noApprovalNeeded: [
      'Loại 1: Hoạt động chuyên môn, khai thác tài sản tạo thu nhập',
      'Loại 2: Đầu tư kinh doanh nhưng không đầu tư thành lập tổ chức kinh tế và không chi phối, quản lý, điều hành'
    ],
    approvalNeeded: [
      'Loại 3: Đầu tư kinh doanh có đầu tư thành lập tổ chức kinh tế hoặc chi phối nhưng không quản lý, điều hành (Chỉ áp dụng với cán bộ, công chức không thuộc diện Bộ Chính trị, Ban Bí thư quản lý)'
    ],
    prohibitedOrRestricted: [
      'Loại 4: Đầu tư kinh doanh có tham gia quản lý, điều hành',
      'Không đầu tư vào ngành, lĩnh vực trực tiếp quyết định hoặc quản lý'
    ],
    specialRights: [
      'Mở rộng quyền góp vốn, mua cổ phần, mua phần vốn góp, mua, bán, nắm giữ các loại chứng khoán và hợp đồng kinh doanh, thực hiện dự án đầu tư và các hình thức đầu tư, kinh doanh khác.'
    ],
    detailedContent: [
      {
        title: 'Không phải xin chấp thuận',
        items: [
          'Đối với hoạt động chuyên môn, khai thác tài sản tạo thu nhập (Loại 1).',
          'Đầu tư kinh doanh nhưng không đầu tư thành lập tổ chức kinh tế và không chi phối, quản lý, điều hành (Loại 2).'
        ],
        note: 'Được mở rộng quyền góp vốn, mua cổ phần, mua phần vốn góp, mua, bán, nắm giữ các loại chứng khoán và hợp đồng kinh doanh, thực hiện dự án đầu tư và các hình thức đầu tư, kinh doanh khác.'
      },
      {
        title: 'Cần xin chấp thuận',
        items: [
          'Chỉ áp dụng với cán bộ, công chức KHÔNG thuộc diện Bộ Chính trị, Ban Bí thư quản lý:',
          'Đầu tư kinh doanh có đầu tư thành lập tổ chức kinh tế hoặc chi phối nhưng không quản lý, điều hành (Loại 3).'
        ]
      }
    ]
  },
  {
    id: 'vien-chuc',
    article: 'Điều 8',
    groupName: 'Đảng viên là viên chức',
    shortDesc: '- Không phải xin chấp thuận: Loại 1 và Loại 2. Viên chức không ở vị trí, lĩnh vực có nguy cơ cao phát sinh xung đột lợi ích được đầu tư kinh doanh có đầu tư thành lập tổ chức kinh tế hoặc có chi phối nhưng không quản lý, điều hành (Loại 3).\nQuy định mở rộng quyền rất lớn cho viên chức, được đầu tư thành lập tổ chức kinh tế. Một số vị trí viên chức còn được quản lý, điều hành; được tạm rời vị trí công tác để thành lập tổ chức kinh tế, quản lý, điều hành tổ chức kinh tế.',
    iconName: 'GraduationCap',
    noApprovalNeeded: [
      'Loại 1: Hoạt động chuyên môn, khai thác tài sản tạo thu nhập',
      'Loại 2: Đầu tư kinh doanh nhưng không đầu tư thành lập tổ chức kinh tế và không chi phối, quản lý, điều hành',
      'Loại 3: Đối với viên chức KHÔNG ở vị trí, lĩnh vực có nguy cơ cao phát sinh xung đột lợi ích'
    ],
    approvalNeeded: [
      'Loại 3 và Loại 4 đối với một số trường hợp thành lập tổ chức kinh tế hoặc quản lý điều hành theo đề xuất/quy định'
    ],
    prohibitedOrRestricted: [
      'Viên chức ở vị trí có nguy cơ cao xung đột lợi ích bị hạn chế theo quy định chuyên ngành'
    ],
    specialRights: [
      'Quy định mở rộng quyền rất lớn cho viên chức, được đầu tư thành lập tổ chức kinh tế.',
      'Một số vị trí viên chức còn được quản lý, điều hành.',
      'Được tạm rời vị trí công tác để thành lập tổ chức kinh tế, quản lý, điều hành tổ chức kinh tế.'
    ],
    detailedContent: [
      {
        title: 'Không phải xin chấp thuận',
        items: [
          'Loại 1 (Chuyên môn, khai thác tài sản) và Loại 2 (Đầu tư không chi phối, không quản lý).',
          'Viên chức không ở vị trí, lĩnh vực có nguy cơ cao phát sinh xung đột lợi ích được đầu tư kinh doanh có đầu tư thành lập tổ chức kinh tế hoặc có chi phối nhưng không quản lý, điều hành (Loại 3).'
        ]
      },
      {
        title: 'Đột phá mở rộng quyền lớn cho viên chức',
        items: [
          'Được đầu tư thành lập tổ chức kinh tế.',
          'Một số vị trí viên chức còn được quản lý, điều hành.',
          'Được tạm rời vị trí công tác để thành lập tổ chức kinh tế, quản lý, điều hành tổ chức kinh tế.'
        ]
      }
    ]
  },
  {
    id: 'quan-doi-cong-an',
    article: 'Điều 9',
    groupName: 'Đảng viên đang công tác, phục vụ trong Quân đội nhân dân, Công an nhân dân',
    shortDesc: 'Được mở quyền như cán bộ, công chức, tức không phải xin chấp thuận đối với Loại 1 và Loại 2.',
    iconName: 'ShieldAlert',
    noApprovalNeeded: [
      'Loại 1: Hoạt động chuyên môn, khai thác tài sản tạo thu nhập',
      'Loại 2: Đầu tư kinh doanh không thành lập tổ chức kinh tế và không chi phối, quản lý, điều hành'
    ],
    approvalNeeded: [],
    prohibitedOrRestricted: [
      'Chi phối hoặc quản lý, điều hành tổ chức kinh tế ngoài các tổ chức kinh tế thuộc lực lượng vũ trang được giao quản lý.'
    ],
    specialRights: [
      'Được mở quyền như cán bộ, công chức, tức không phải xin chấp thuận đối với Loại 1 và Loại 2.'
    ],
    detailedContent: [
      {
        title: 'Quyền hạn đầu tư',
        items: [
          'Được mở quyền như cán bộ, công chức, tức không phải xin chấp thuận đối với Loại 1 và Loại 2.'
        ]
      }
    ]
  },
  {
    id: 'quan-ly-dnnn',
    article: 'Điều 10',
    groupName: 'Đảng viên là người quản lý doanh nghiệp nhà nước, người đại diện phần vốn nhà nước',
    shortDesc: '- Được thực hiện Loại 1, Loại 2 và mua, nhận, nắm giữ cổ phần, phần vốn góp và thực hiện các quyền của cổ đông, thành viên tại doanh nghiệp đang quản lý hoặc đại diện phần vốn nhà nước (nhưng phải tách bạch với chức trách).\n- Được thực hiện Loại 3 sau khi được chấp thuận.\n- Không được đầu tư ngành, lĩnh vực có lợi ích liên quan trực tiếp đến doanh nghiệp nhà nước đang quản lý hoặc đại diện phần vốn nhà nước.',
    iconName: 'Briefcase',
    noApprovalNeeded: [
      'Loại 1 và Loại 2',
      'Mua, nhận, nắm giữ cổ phần, phần vốn góp và thực hiện các quyền của cổ đông, thành viên tại doanh nghiệp đang quản lý hoặc đại diện phần vốn nhà nước (phải tách bạch với chức trách)'
    ],
    approvalNeeded: [
      'Được thực hiện Loại 3 sau khi được chấp thuận'
    ],
    prohibitedOrRestricted: [
      'Không được đầu tư ngành, lĩnh vực có lợi ích liên quan trực tiếp đến doanh nghiệp nhà nước đang quản lý hoặc đại diện phần vốn nhà nước.'
    ],
    specialRights: [
      'Quyền của cổ đông/thành viên tại chính doanh nghiệp đang quản lý/đại diện phần vốn (tách bạch chức trách).'
    ],
    detailedContent: [
      {
        title: 'Quyền hạn cơ bản không phải xin chấp thuận',
        items: [
          'Được thực hiện Loại 1, Loại 2.',
          'Được mua, nhận, nắm giữ cổ phần, phần vốn góp và thực hiện các quyền của cổ đông, thành viên tại doanh nghiệp đang quản lý hoặc đại diện phần vốn nhà nước (nhưng phải tách bạch với chức trách).'
        ]
      },
      {
        title: 'Quyền hạn cần xin chấp thuận',
        items: [
          'Được thực hiện Loại 3 sau khi được chấp thuận.'
        ]
      },
      {
        title: 'Giới hạn cấm nghiêm ngặt',
        items: [
          'Không được đầu tư ngành, lĩnh vực có lợi ích liên quan trực tiếp đến doanh nghiệp nhà nước đang quản lý hoặc đại diện phần vốn nhà nước.'
        ]
      }
    ]
  },
  {
    id: 'nghi-huu-thoi-cong-tac',
    article: 'Điều 11',
    groupName: 'Đảng viên khu vực công sau khi thôi giữ chức vụ, thôi công tác, nghỉ hưu',
    shortDesc: 'Khuyến khích tri thức, kinh nghiệm, nguồn lực để khởi nghiệp, đổi mới sáng tạo.\n- Được thực hiện mọi hoạt động đầu tư, kinh doanh như đảng viên ngoài khu vực công.\n- Không được thực hiện các hoạt động liên quan đến lĩnh vực, công việc đã phụ trách trong phạm vi, thời hạn theo quy định.',
    iconName: 'HeartHandshake',
    noApprovalNeeded: [
      'Được thực hiện mọi hoạt động đầu tư, kinh doanh như đảng viên ngoài khu vực công'
    ],
    approvalNeeded: [],
    prohibitedOrRestricted: [
      'Không được thực hiện các hoạt động liên quan đến lĩnh vực, công việc đã phụ trách trong phạm vi, thời hạn theo quy định.'
    ],
    specialRights: [
      'Khuyến khích tri thức, kinh nghiệm, nguồn lực để khởi nghiệp, đổi mới sáng tạo.'
    ],
    detailedContent: [
      {
        title: 'Khuyến khích cống hiến',
        items: [
          'Khuyến khích tri thức, kinh nghiệm, nguồn lực để khởi nghiệp, đổi mới sáng tạo.'
        ]
      },
      {
        title: 'Quyền đầu tư kinh doanh',
        items: [
          'Được thực hiện mọi hoạt động đầu tư, kinh doanh như đảng viên ngoài khu vực công.'
        ]
      },
      {
        title: 'Giới hạn thời hạn và phạm vi phụ trách cũ',
        items: [
          'Không được thực hiện các hoạt động liên quan đến lĩnh vực, công việc đã phụ trách trong phạm vi, thời hạn theo quy định.'
        ]
      }
    ]
  }
];

// TÌNH HUỐNG THỰC TẾ TRA CỨU NHANH
export const PRACTICAL_SCENARIOS: ScenarioQuestion[] = [
  {
    id: 1,
    question: 'Tôi là Đảng viên ngoài khu vực công, tôi có thể thành lập công ty và làm Giám đốc điều hành không?',
    userRole: 'Đảng viên ngoài khu vực công',
    investmentType: 'Loại 4 (Thành lập và Điều hành)',
    allowed: 'ALLOWED_NO_APPROVAL',
    answer: 'ĐƯỢC PHÉP - KHÔNG CẦN XIN CHẤP THUẬN',
    explanation: 'Đảng viên ngoài khu vực công được thực hiện cả 4 loại đầu tư kinh doanh và các hoạt động pháp luật không cấm mà không phải xin chấp thuận của tổ chức đảng.',
    articleRef: 'Điều 5'
  },
  {
    id: 2,
    question: 'Tôi là Công chức cấp phòng, tôi muốn mua cổ phiếu chứng khoán niêm yết trên thị trường thì có được không?',
    userRole: 'Đảng viên là cán bộ, công chức',
    investmentType: 'Loại 2 (Đầu tư không chi phối, không điều hành)',
    allowed: 'ALLOWED_NO_APPROVAL',
    answer: 'ĐƯỢC PHÉP - KHÔNG CẦN XIN CHẤP THUẬN',
    explanation: 'Công chức được mở rộng quyền góp vốn, mua cổ phần, chứng khoán (Loại 2) mà không phải xin chấp thuận của tổ chức đảng.',
    articleRef: 'Điều 6 và 7'
  },
  {
    id: 3,
    question: 'Tôi là Công chức (không thuộc diện Bộ Chính trị/Ban Bí thư quản lý), tôi muốn thành lập công ty TNHH nhưng giao người khác điều hành?',
    userRole: 'Đảng viên là cán bộ, công chức',
    investmentType: 'Loại 3 (Thành lập tổ chức kinh tế không điều hành)',
    allowed: 'ALLOWED_WITH_APPROVAL',
    answer: 'CẦN XIN CHẤP THUẬN CỦA CẤP CÓ THẨM QUYỀN',
    explanation: 'Cán bộ, công chức không thuộc diện Bộ Chính trị, Ban Bí thư quản lý được thực hiện đầu tư kinh doanh có thành lập tổ chức kinh tế hoặc chi phối nhưng không quản lý điều hành (Loại 3) sau khi được cấp có thẩm quyền chấp thuận.',
    articleRef: 'Điều 6 và 7'
  },
  {
    id: 4,
    question: 'Tôi là Viên chức bác sĩ/giáo viên, tôi muốn thành lập phòng khám/trung tâm đào tạo tư nhân và trực tiếp quản lý?',
    userRole: 'Đảng viên là viên chức',
    investmentType: 'Loại 3 và Loại 4 (Thành lập và Quản lý điều hành)',
    allowed: 'CONDITIONAL',
    answer: 'ĐƯỢC PHÉP - QUY ĐỊNH MỞ RỘNG RẤT LỚN (Có thể xin tạm rời vị trí công tác)',
    explanation: 'Viên chức được mở rộng quyền rất lớn: được đầu tư thành lập tổ chức kinh tế; một số vị trí viên chức còn được quản lý, điều hành và được tạm rời vị trí công tác để thành lập, quản lý, điều hành tổ chức kinh tế.',
    articleRef: 'Điều 8'
  },
  {
    id: 5,
    question: 'Tôi là Quản lý Doanh nghiệp Nhà nước, tôi có được mua thêm cổ phần của chính DNNN tôi đang quản lý không?',
    userRole: 'Người quản lý DNNN',
    investmentType: 'Loại 2 (Cổ phần tại doanh nghiệp quản lý)',
    allowed: 'ALLOWED_NO_APPROVAL',
    answer: 'ĐƯỢC PHÉP - KHÔNG CẦN XIN CHẤP THUẬN (Phải tách bạch chức trách)',
    explanation: 'Được mua, nhận, nắm giữ cổ phần, phần vốn góp và thực hiện quyền cổ đông tại chính doanh nghiệp đang quản lý hoặc đại diện phần vốn nhà nước nhưng phải tách bạch rõ ràng với chức trách nhiệm vụ.',
    articleRef: 'Điều 10'
  },
  {
    id: 6,
    question: 'Tôi vừa nghỉ hưu từ vị trí Giám đốc Sở, tôi muốn làm cố vấn cho doanh nghiệp trong đúng lĩnh vực tôi vừa quản lý trước đây được không?',
    userRole: 'Đảng viên nghỉ hưu / thôi công tác',
    investmentType: 'Hoạt động kinh doanh sau nghỉ hưu',
    allowed: 'PROHIBITED',
    answer: 'KHÔNG ĐƯỢC PHÉP TRONG THỜI HẠN QUY ĐỊNH',
    explanation: 'Đảng viên khu vực công sau khi nghỉ hưu/thôi công tác không được thực hiện các hoạt động liên quan đến lĩnh vực, công việc đã phụ trách trong phạm vi và thời hạn theo quy định của pháp luật.',
    articleRef: 'Điều 11'
  }
];
