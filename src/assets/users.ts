export interface User {
  id: number
  name: string
  age: number
  location: string
  photo: string
  distance: string
  interests: string[]
  bio: string
}

export const users: User[] = [
  {
    id: 1,
    name: '小美',
    age: 24,
    location: '新北市',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000',
    distance: '2.5',
    interests: ['旅行', '美食', '電影'],
    bio: '喜歡探索新事物，享受生活中的每個時刻'
  },
  {
    id: 2,
    name: '小華',
    age: 26,
    location: '台北市',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000',
    distance: '1.8',
    interests: ['攝影', '音樂', '運動'],
    bio: '攝影師，喜歡捕捉生活中的美好瞬間'
  },
  {
    id: 3,
    name: '小明',
    age: 28,
    location: '桃園市',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000',
    distance: '3.2',
    interests: ['健身', '烹飪', '閱讀'],
    bio: '健身教練，熱愛健康生活'
  },
  {
    id: 4,
    name: '小芳',
    age: 25,
    location: '新竹市',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000',
    distance: '4.0',
    interests: ['繪畫', '咖啡', '旅行'],
    bio: '藝術工作者，喜歡創作和品嚐咖啡'
  },
  {
    id: 5,
    name: '小強',
    age: 27,
    location: '台中市',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000',
    distance: '5.5',
    interests: ['籃球', '電影', '美食'],
    bio: '籃球教練，熱愛運動和美食'
  },
  {
    id: 6,
    name: '小玲',
    age: 23,
    location: '台北市',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000',
    distance: '1.2',
    interests: ['舞蹈', '瑜珈', '音樂'],
    bio: '舞蹈老師，熱愛藝術和運動'
  },
  {
    id: 7,
    name: '小傑',
    age: 29,
    location: '新北市',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000',
    distance: '2.8',
    interests: ['科技', '攝影', '旅行'],
    bio: '軟體工程師，喜歡探索新科技'
  },
  {
    id: 8,
    name: '小婷',
    age: 24,
    location: '台北市',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000',
    distance: '1.5',
    interests: ['時尚', '美妝', '購物'],
    bio: '時尚部落客，熱愛美妝和穿搭'
  },
  {
    id: 9,
    name: '小豪',
    age: 26,
    location: '桃園市',
    photo: 'https://images.unsplash.com/photo-1506795660198-e95c6320213d?q=80&w=1000',
    distance: '3.0',
    interests: ['音樂', '電影', '美食'],
    bio: '音樂製作人，熱愛創作和美食'
  },
  {
    id: 10,
    name: '小雅',
    age: 25,
    location: '新竹市',
    photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000',
    distance: '4.2',
    interests: ['閱讀', '寫作', '旅行'],
    bio: '作家，喜歡閱讀和寫作'
  },
  {
    id: 11,
    name: '小偉',
    age: 28,
    location: '台中市',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000',
    distance: '5.0',
    interests: ['健身', '籃球', '電影'],
    bio: '健身教練，熱愛運動和電影'
  },
  {
    id: 12,
    name: '小雯',
    age: 23,
    location: '台北市',
    photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000',
    distance: '1.0',
    interests: ['舞蹈', '瑜珈', '音樂'],
    bio: '瑜珈老師，熱愛運動和音樂'
  },
  {
    id: 13,
    name: '小龍',
    age: 27,
    location: '新北市',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000',
    distance: '2.3',
    interests: ['科技', '攝影', '旅行'],
    bio: '科技部落客，喜歡探索新科技'
  },
  {
    id: 14,
    name: '小潔',
    age: 24,
    location: '台北市',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000',
    distance: '1.7',
    interests: ['時尚', '美妝', '購物'],
    bio: '美妝部落客，熱愛美妝和穿搭'
  },
  {
    id: 15,
    name: '小宏',
    age: 26,
    location: '桃園市',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000',
    distance: '3.5',
    interests: ['音樂', '電影', '美食'],
    bio: '音樂老師，熱愛音樂和美食'
  },
  {
    id: 16,
    name: '小琪',
    age: 25,
    location: '新竹市',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000',
    distance: '4.5',
    interests: ['閱讀', '寫作', '旅行'],
    bio: '編輯，喜歡閱讀和寫作'
  },
  {
    id: 17,
    name: '小志',
    age: 28,
    location: '台中市',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000',
    distance: '5.2',
    interests: ['健身', '籃球', '電影'],
    bio: '籃球教練，熱愛運動和電影'
  },
  {
    id: 18,
    name: '小婷',
    age: 23,
    location: '台北市',
    photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000',
    distance: '1.3',
    interests: ['舞蹈', '瑜珈', '音樂'],
    bio: '舞蹈老師，熱愛運動和音樂'
  },
  {
    id: 19,
    name: '小傑',
    age: 27,
    location: '新北市',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000',
    distance: '2.6',
    interests: ['科技', '攝影', '旅行'],
    bio: '攝影師，喜歡探索新科技'
  },
  {
    id: 20,
    name: '小芳',
    age: 24,
    location: '台北市',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000',
    distance: '1.9',
    interests: ['時尚', '美妝', '購物'],
    bio: '時尚設計師，熱愛美妝和穿搭'
  }
] 