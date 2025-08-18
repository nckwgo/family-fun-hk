"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  MapPin,
  Clock,
  Store,
  Filter,
  Users,
  Calendar,
  Plus,
  MessageCircle,
  Share2,
  BarChart3,
  TrendingUp,
  Settings,
  DollarSign,
  Edit,
  Trash2,
  Bot,
  X,
  Eye,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"

const activities = [
  {
    id: 1,
    title: "G-Dragon 2025 World Tour",
    description: "韓國巨星G-Dragon世界巡迴演唱會香港站",
    category: "文化",
    categoryColor: "purple",
    location: "紅磡體育館",
    duration: "3小時",
    price: 880,
    rating: 4.9,
    participants: 8000,
    tags: ["音樂", "演唱會"],
    ageRange: "12歲以上",
    image: "/gd-concert-purple.png",
    isSubsidized: false,
    date: "2025-08-09",
    time: "20:00",
    endTime: "23:00",
  },
  {
    id: 2,
    title: "中秋節慶祝活動",
    description: "傳統中秋節慶典，包括燈籠展示和月餅製作",
    category: "節慶",
    categoryColor: "orange",
    location: "維多利亞公園",
    duration: "全日",
    price: 0,
    rating: 4.7,
    participants: 2000,
    tags: ["免費", "傳統文化", "親子"],
    ageRange: "全年齡",
    image: "/mid-autumn-festival.png",
    isSubsidized: false,
    date: "2025-10-06",
    time: "10:00",
    endTime: "22:00",
  },
  {
    id: 3,
    title: "重陽節登高活動",
    description: "傳統重陽節登山健行，欣賞秋日美景",
    category: "節慶",
    categoryColor: "orange",
    location: "太平山頂",
    duration: "4小時",
    price: 50,
    rating: 4.6,
    participants: 150,
    tags: ["戶外", "健康", "傳統"],
    ageRange: "8歲以上",
    image: "/hong-kong-peak-autumn.png",
    isSubsidized: false,
    date: "2025-10-29",
    time: "08:00",
    endTime: "12:00",
  },
  {
    id: 4,
    title: "香港冬日節慶2025",
    description: "大型冬季節慶活動，包括燈飾、市集和表演",
    category: "節慶",
    categoryColor: "orange",
    location: "尖沙咀海濱",
    duration: "全日",
    price: 0,
    rating: 4.8,
    participants: 5000,
    tags: ["免費", "燈飾", "親子", "購物"],
    ageRange: "全年齡",
    image: "/hk-winter-waterfront.png",
    isSubsidized: false,
    date: "2025-12-01",
    time: "16:00",
    endTime: "23:00",
  },
  {
    id: 5,
    title: "Clockenflap 2025音樂節",
    description: "香港最大型戶外音樂節，匯聚國際和本地音樂人",
    category: "文化",
    categoryColor: "purple",
    location: "中環海濱",
    duration: "3日",
    price: 1280,
    rating: 4.9,
    participants: 15000,
    tags: ["音樂", "戶外", "國際"],
    ageRange: "16歲以上",
    image: "/hk-music-fest.png",
    isSubsidized: false,
    date: "2025-11-29",
    time: "14:00",
    endTime: "23:00",
  },
  {
    id: 6,
    title: "公園藝術節2025",
    description: "戶外藝術表演和展覽，適合全家參與",
    category: "文化",
    categoryColor: "purple",
    location: "香港公園",
    duration: "2日",
    price: 120,
    rating: 4.5,
    participants: 800,
    tags: ["藝術", "戶外", "親子"],
    ageRange: "全年齡",
    image: "/hk-park-art.png",
    isSubsidized: true,
    date: "2025-11-30",
    time: "10:00",
    endTime: "18:00",
  },
  {
    id: 7,
    title: "史雲頓廣場白色聖誕街頭市集",
    description: "聖誕主題街頭市集，有手工藝品和美食",
    category: "節慶",
    categoryColor: "orange",
    location: "太古廣場",
    duration: "5日",
    price: 0,
    rating: 4.4,
    participants: 3000,
    tags: ["免費", "聖誕", "市集", "購物"],
    ageRange: "全年齡",
    image: "/white-christmas-market.png",
    isSubsidized: false,
    date: "2025-12-04",
    time: "11:00",
    endTime: "21:00",
  },
  {
    id: 8,
    title: "史丹利廣場聖誕市集",
    description: "海邊聖誕市集，享受節日氣氛和海景",
    category: "節慶",
    categoryColor: "orange",
    location: "赤柱",
    duration: "2週",
    price: 0,
    rating: 4.6,
    participants: 1500,
    tags: ["免費", "聖誕", "海景", "市集"],
    ageRange: "全年齡",
    image: "/christmas-market-stanley.png",
    isSubsidized: false,
    date: "2025-12-15",
    time: "10:00",
    endTime: "22:00",
  },
  {
    id: 9,
    title: "香港美食節2025",
    description: "年度美食盛會，品嚐本地和國際美食",
    category: "節慶",
    categoryColor: "orange",
    location: "會展中心",
    duration: "4日",
    price: 80,
    rating: 4.7,
    participants: 10000,
    tags: ["美食", "文化", "親子"],
    ageRange: "全年齡",
    image: "/placeholder-tbtx4.png",
    isSubsidized: false,
    date: "2025-12-27",
    time: "11:00",
    endTime: "21:00",
  },
  {
    id: 10,
    title: "除夕煙花倒數",
    description: "維港除夕煙花匯演和新年倒數慶典",
    category: "節慶",
    categoryColor: "orange",
    location: "維多利亞港",
    duration: "4小時",
    price: 0,
    rating: 4.9,
    participants: 50000,
    tags: ["免費", "煙花", "新年", "倒數"],
    ageRange: "全年齡",
    image: "/new-year-fireworks-hong-kong.png",
    isSubsidized: false,
    date: "2025-12-31",
    time: "20:00",
    endTime: "00:30",
  },
]

const forumPosts = [
  {
    id: 1,
    category: "推薦",
    title: "銅鑼灣親子陶藝工作坊超讚！",
    content: "上週末帶小朋友去參加了陶藝工作坊，導師很有耐心，小朋友玩得很開心！成品也很漂亮，推薦給大家～",
    author: {
      name: "陳媽媽",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "陳",
    },
    timestamp: "2小時前",
    likes: 12,
    comments: 5,
    tags: ["親子活動", "手工藝", "銅鑼灣"],
    isLiked: false,
    relatedActivity: "親子陶藝工作坊",
  },
  {
    id: 2,
    category: "問題",
    title: "有沒有適合SEN小朋友的活動推薦？",
    content: "我家小朋友有自閉症，想找一些適合的親子活動，希望環境不要太嘈雜，有經驗的家長可以分享一下嗎？",
    author: {
      name: "李爸爸",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "李",
    },
    timestamp: "5小時前",
    likes: 8,
    comments: 15,
    tags: ["SEN", "特殊需要", "求助"],
    isLiked: true,
    relatedActivity: null,
  },
  {
    id: 3,
    category: "評論",
    title: "海洋公園新展覽值得一去",
    content:
      "昨天去了海洋公園的新海洋生物展覽，小朋友學到很多知識，互動體驗也很豐富。不過人比較多，建議平日去會比較好。",
    author: {
      name: "王媽媽",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "王",
    },
    timestamp: "1天前",
    likes: 25,
    comments: 8,
    tags: ["海洋公園", "教育", "親子遊"],
    isLiked: false,
    relatedActivity: "海洋公園探索之旅",
  },
  {
    id: 4,
    category: "討論",
    title: "大家覺得親子活動的價格合理嗎？",
    content: "最近發現很多親子活動的價格都在上升，想聽聽大家的看法。是否有一些性價比高的活動推薦？",
    author: {
      name: "張爸爸",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "張",
    },
    timestamp: "2天前",
    likes: 18,
    comments: 23,
    tags: ["價格", "討論", "性價比"],
    isLiked: false,
    relatedActivity: null,
  },
  {
    id: 5,
    category: "推薦",
    title: "中秋節燈籠製作活動分享",
    content:
      "剛參加完旺角的燈籠製作活動，小朋友做了一個很漂亮的兔子燈籠！導師教得很仔細，材料也很齊全，推薦給想體驗傳統文化的家庭。",
    author: {
      name: "林媽媽",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "林",
    },
    timestamp: "3天前",
    likes: 15,
    comments: 7,
    tags: ["中秋節", "傳統文化", "手工藝"],
    isLiked: true,
    relatedActivity: "中秋節燈籠製作",
  },
]

const forumComments = [
  {
    id: 1,
    postId: 1,
    author: {
      name: "黃媽媽",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "黃",
    },
    content: "我們也去過，真的很不錯！小朋友現在還在家裡玩泥巴呢～",
    timestamp: "1小時前",
    likes: 3,
  },
  {
    id: 2,
    postId: 1,
    author: {
      name: "劉爸爸",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "劉",
    },
    content: "請問價格大概多少？想帶我家小朋友去試試",
    timestamp: "30分鐘前",
    likes: 1,
  },
]

const getCategoryColor = (category: string, colorName: string) => {
  const colors = {
    purple: "bg-blue-500/10 text-blue-600 border-blue-500/20", // Changed from purple to blue
    blue: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    green: "bg-green-500/10 text-green-600 border-green-500/20",
    orange: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  }
  return colors[colorName as keyof typeof colors] || colors.blue // Changed default from purple to blue
}

// Calendar helper functions
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay()
}

const formatDate = (year: number, month: number, day: number) => {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
}

const useFavoriteActivities = () => {
  return useState<number[]>([])
}

const getActivitiesForDate = (date: string) => {
  return activities.filter((activity) => activity.date === date)
}

const openGoogleMaps = (location: string) => {
  const query = encodeURIComponent(`${location}, Hong Kong`)
  window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank")
}

const addToGoogleCalendar = (title: string, location: string, date: string, time: string) => {
  try {
    // Parse the date more reliably
    const [year, month, day] = date.split("-").map(Number)
    const [hours, minutes] = time.split(":").map(Number)

    const startDate = new Date(year, month - 1, day, hours, minutes)

    // Check if date is valid
    if (isNaN(startDate.getTime())) {
      console.error("[v0] Invalid date:", { date, time, year, month, day, hours, minutes })
      alert("Invalid date format. Please check the event details.")
      return
    }

    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000) // 2 hours duration

    const formatDateForCalendar = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
    }

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${formatDateForCalendar(startDate)}/${formatDateForCalendar(endDate)}&location=${encodeURIComponent(location)}&details=${encodeURIComponent(`Family Fun HK 活動: ${title}`)}`

    window.open(calendarUrl, "_blank")
  } catch (error) {
    console.error("[v0] Error adding to Google Calendar:", error)
    alert("Error adding event to calendar. Please try again.")
  }
}

const shareEvent = async (activity: any) => {
  const shareData = {
    title: activity.title,
    text: `${activity.description}\n📍 ${activity.location}\n🕐 ${activity.date} ${activity.time}\n💰 $${activity.price}`,
    url: window.location.href,
  }

  if (navigator.share) {
    try {
      await navigator.share(shareData)
    } catch (err) {
      console.log("Error sharing:", err)
    }
  } else {
    // Fallback for browsers that don't support Web Share API
    navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`)
    alert("活動資訊已複製到剪貼板！")
  }
}

export default function FamilyFunHK() {
  const [language, setLanguage] = useState<"zh-TW" | "zh-CN" | "en">("zh-TW")

  const [activeTab, setActiveTab] = useState("discover")
  const [showAIChat, setShowAIChat] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    {
      role: "assistant",
      content: "你好！我是Family Fun HK的AI助手。我可以幫你找到最適合的親子活動，有什麼可以幫到你？",
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [loginForm, setLoginForm] = useState({ email: "", password: "" })
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "", confirmPassword: "" })
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)

  const [editingActivity, setEditingActivity] = useState<any>(null)
  const [showEditForm, setShowEditForm] = useState(false)

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [senFriendly, setSenFriendly] = useState(false)
  const [subsidized, setSubsidized] = useState(false)

  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [calendarView, setCalendarView] = useState<"month" | "day">("month")

  const [forumCategory, setForumCategory] = useState("all")
  const [forumSearchQuery, setForumSearchQuery] = useState("")
  const [showNewPostForm, setShowNewPostForm] = useState(false)
  const [newPostTitle, setNewPostTitle] = useState("")
  const [newPostContent, setNewPostContent] = useState("")
  const [newPostCategory, setNewPostCategory] = useState("推薦")
  const [selectedPost, setSelectedPost] = useState<number | null>(null)
  const [newComment, setNewComment] = useState("")
  const [likedPosts, setLikedPosts] = useState<number[]>([2, 5])

  const [merchantView, setMerchantView] = useState("dashboard")
  const [showNewActivityForm, setShowNewActivityForm] = useState(false)
  const [newActivityTitle, setNewActivityTitle] = useState("")
  const [newActivityDescription, setNewActivityDescription] = useState("")
  const [newActivityCategory, setNewActivityCategory] = useState("文化")
  const [newActivityPrice, setNewActivityPrice] = useState("")
  const [newActivityLocation, setNewActivityLocation] = useState("")
  const [showCreateForm, setShowCreateForm] = useState(false)

  const [showAIRecommendations, setShowAIRecommendations] = useState(true)
  const [aiChatOpen, setAiChatOpen] = useState(false)
  const [aiChatMinimized, setAiChatMinimized] = useState(false)
  const [aiChatMessages, setAiChatMessages] = useState([
    {
      id: 1,
      type: "ai" as const,
      message: "您好！我是 Family Fun HK 的 AI 助手。我可以幫您找到最適合的家庭活動，有什麼可以幫到您嗎？",
      timestamp: new Date().toLocaleTimeString(),
    },
  ])
  const [aiChatInput, setAiChatInput] = useState("")
  const [aiSearchSuggestions, setAiSearchSuggestions] = useState<string[]>([])
  const [showAiSuggestions, setShowAiSuggestions] = useState(false)

  const [favoriteActivities, setFavoriteActivities] = useFavoriteActivities()

  const texts = {
    "zh-TW": {
      title: "Family Fun HK",
      subtitle: "香港家庭親子活動平台",
      discover: "探索活動",
      calendar: "活動日曆",
      favorites: "活動收藏",
      community: "社群論壇",
      merchant: "商戶中心",
      todayActivities: "今天活動",
      login: "登入",
      register: "註冊",
      logout: "登出",
      welcome: "歡迎",
      search: "搜尋活動...",
      filter: "篩選",
      allRegions: "所有地區",
      allCategories: "所有類別",
      allPrices: "所有價格",
      free: "免費",
      paid: "收費",
      senFriendly: "SEN友善",
      subsidized: "有資助",
      monthView: "月檢視",
      dayView: "日檢視",
      noActivities: "這天沒有安排活動",
      activitiesCount: "個活動",
      timeSchedule: "時間表",
      morning: "上午",
      afternoon: "下午",
      evening: "晚上",
    },
    "zh-CN": {
      title: "Family Fun HK",
      subtitle: "香港家庭亲子活动平台",
      discover: "探索活动",
      calendar: "活动日历",
      favorites: "活动收藏",
      community: "社群论坛",
      merchant: "商户中心",
      todayActivities: "今天活动",
      login: "登录",
      register: "注册",
      logout: "登出",
      welcome: "欢迎",
      search: "搜寻活动...",
      filter: "筛选",
      allRegions: "所有地区",
      allCategories: "所有类别",
      allPrices: "所有价格",
      free: "免费",
      paid: "收费",
      senFriendly: "SEN友善",
      subsidized: "有资助",
      monthView: "月检视",
      dayView: "日检视",
      noActivities: "这天没有安排活动",
      activitiesCount: "个活动",
      timeSchedule: "时间表",
      morning: "上午",
      afternoon: "下午",
      evening: "晚上",
    },
    en: {
      title: "Family Fun HK",
      subtitle: "Hong Kong Family Activities Platform",
      discover: "Discover",
      calendar: "Calendar",
      favorites: "Favorites",
      community: "Community",
      merchant: "Merchant",
      todayActivities: "Today's Activities",
      login: "Login",
      register: "Register",
      logout: "Logout",
      welcome: "Welcome",
      search: "Search activities...",
      filter: "Filter",
      allRegions: "All Regions",
      allCategories: "All Categories",
      allPrices: "All Prices",
      free: "Free",
      paid: "Paid",
      senFriendly: "SEN Friendly",
      subsidized: "Subsidized",
      monthView: "Month View",
      dayView: "Day View",
      noActivities: "No activities scheduled for this day",
      activitiesCount: "activities",
      timeSchedule: "Schedule",
      morning: "Morning",
      afternoon: "Afternoon",
      evening: "Evening",
    },
  }

  const t = texts[language]

  const regions = [
    "all",
    "港島線",
    "荃灣線",
    "觀塘線",
    "將軍澳線",
    "東涌線",
    "機場快線",
    "東鐵線",
    "西鐵線",
    "馬鞍山線",
    "中環",
    "金鐘",
    "銅鑼灣",
    "天后",
    "炮台山",
    "北角",
    "鰂魚涌",
    "太古",
    "西灣河",
    "筲箕灣",
    "杏花邨",
    "柴灣",
    "上環",
    "西營盤",
    "香港大學",
    "堅尼地城",
    "灣仔",
    "跑馬地",
    "黃竹坑",
    "利東",
    "海怡半島",
    "南港島線",
    "尖沙咀",
    "佐敦",
    "油麻地",
    "旺角",
    "太子",
    "深水埗",
    "長沙灣",
    "荔枝角",
    "美孚",
    "荃灣西",
    "荃灣",
    "彩虹",
    "九龍灣",
    "牛頭角",
    "觀塘",
    "藍田",
    "油塘",
    "調景嶺",
    "將軍澳",
    "坑口",
    "寶琳",
    "康城",
    "東涌",
    "青衣",
    "機場",
    "博覽館",
    "羅湖",
    "落馬洲",
    "上水",
    "粉嶺",
    "太和",
    "大埔墟",
    "大學",
    "火炭",
    "沙田",
    "大圍",
    "車公廟",
    "沙田圍",
    "第一城",
    "石門",
    "大水坑",
    "恆安",
    "馬鞍山",
    "烏溪沙",
    "紅磡",
    "何文田",
    "土瓜灣",
    "宋皇臺",
    "啟德",
    "鑽石山",
    "黃大仙",
    "樂富",
    "九龍塘",
    "石硤尾",
    "南昌",
    "美孚",
    "荃灣西",
    "錦上路",
    "元朗",
    "朗屏",
    "天水圍",
    "兆康",
    "屯門",
  ]

  const categories = [
    "all",
    "文化",
    "教育",
    "工作坊",
    "節慶",
    "球類",
    "嘉年華",
    "商場",
    "室內",
    "室外",
    "酒店",
    "音樂",
    "藝術",
    "科技",
    "運動",
  ]

  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  const today = new Date()
  const todayString = formatDate(today.getFullYear(), today.getMonth(), today.getDate())

  const getAIRecommendations = () => {
    // Mock AI recommendations based on user behavior and preferences
    const recommendations = [
      {
        id: 1,
        title: "親子陶藝工作坊",
        reason: "基於您對手工藝活動的興趣",
        confidence: 95,
        category: "工作坊",
        price: 280,
        location: "銅鑼灣",
        image: "/kids-pottery-workshop.png",
      },
      {
        id: 5,
        title: "STEM機械人工作坊",
        reason: "適合您孩子的年齡和學習需求",
        confidence: 88,
        category: "教育",
        price: 380,
        location: "沙田",
        image: "/kids-robotics-programming.png",
      },
      {
        id: 6,
        title: "親子烹飪班",
        reason: "其他家長推薦給類似家庭",
        confidence: 82,
        category: "工作坊",
        price: 250,
        location: "九龍塘",
        image: "/family-cooking-class.png",
      },
    ]
    return recommendations
  }

  const generateAISearchSuggestions = (query: string) => {
    if (query.length < 2) {
      setAiSearchSuggestions([])
      setShowAiSuggestions(false)
      return
    }

    const suggestions = [
      `${query} 適合3-6歲`,
      `${query} SEN友善`,
      `${query} 週末活動`,
      `${query} 室內活動`,
      `${query} 親子互動`,
    ].filter((s) => s.toLowerCase().includes(query.toLowerCase()))

    setAiSearchSuggestions(suggestions.slice(0, 3))
    setShowAiSuggestions(true)
  }

  const handleAiChatSend = () => {
    if (!aiChatInput.trim()) return

    const userMessage = {
      id: aiChatMessages.length + 1,
      type: "user" as const,
      message: aiChatInput,
      timestamp: new Date().toLocaleTimeString(),
    }

    setAiChatMessages((prev) => [...prev, userMessage])

    // Mock AI response
    setTimeout(() => {
      const aiResponse = {
        id: aiChatMessages.length + 2,
        type: "ai" as const,
        message: generateAIResponse(aiChatInput),
        timestamp: new Date().toLocaleTimeString(),
      }
      setAiChatMessages((prev) => [...prev, aiResponse])
    }, 1000)

    setAiChatInput("")
  }

  const generateAIResponse = (input: string) => {
    const responses = {
      推薦: "根據您的需求，我推薦以下活動：親子陶藝工作坊（適合創意發展）、STEM機械人工作坊（適合邏輯思維）。這些活動都很受家長歡迎！",
      SEN: "我們有很多SEN友善的活動！推薦親子陶藝工作坊和STEM機械人工作坊，這些活動環境較安靜，導師也有特殊需要兒童的教學經驗。",
      價格: "我們有不同價格範圍的活動：$150-250（手工藝類）、$250-350（烹飪類）、$350-450（科技類）。也有資助活動可以申請！",
      地點: "活動遍佈全港：港島區（銅鑼灣、中環）、九龍區（旺角、沙田）、新界區（元朗、屯門）。您希望在哪個區域參加活動？",
    }

    for (const [key, response] of Object.entries(responses)) {
      if (input.includes(key)) {
        return response
      }
    }

    return "感謝您的查詢！我可以幫您推薦活動、查詢價格、尋找地點或解答其他問題。請告訴我您的具體需求，我會為您提供最合適的建議。"
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const monthNames = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ]

  const weekDays = ["日", "一", "二", "三", "四", "五", "六"]

  // Filter activities based on search and filters
  const filteredActivities = activities.filter((activity) => {
    const matchesSearch =
      activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRegion = selectedRegion === "all" || activity.location.includes(selectedRegion)
    const matchesCategory = selectedCategory === "all" || activity.category === selectedCategory
    const matchesSEN = !senFriendly || activity.tags.includes("SEN友善")
    const matchesSubsidy = !subsidized || activity.isSubsidized

    let matchesPrice = true
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number)
      matchesPrice = activity.price >= min && (max ? activity.price <= max : true)
    }

    return matchesSearch && matchesRegion && matchesCategory && matchesSEN && matchesSubsidy && matchesPrice
  })

  // Get today's activities
  const todaysActivities = getActivitiesForDate(todayString)

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  const filteredForumPosts = forumPosts.filter((post) => {
    const matchesCategory = forumCategory === "all" || post.category === forumCategory
    const matchesSearch =
      post.title.toLowerCase().includes(forumSearchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(forumSearchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getCategoryColorForum = (category: string) => {
    const colors = {
      推薦: "bg-green-500/10 text-green-600 border-green-500/20",
      評論: "bg-blue-500/10 text-blue-600 border-blue-500/20",
      問題: "bg-orange-500/10 text-orange-600 border-orange-500/20",
      討論: "bg-blue-500/10 text-blue-600 border-blue-500/20", // Changed from primary to blue
    }
    return colors[category as keyof typeof colors] || colors["討論"]
  }

  const handleNewPost = () => {
    if (newPostTitle.trim() && newPostContent.trim()) {
      // In a real app, this would make an API call
      console.log("New post:", { title: newPostTitle, content: newPostContent, category: newPostCategory })
      setNewPostTitle("")
      setNewPostContent("")
      setShowNewPostForm(false)
    }
  }

  const handleNewComment = (postId: number) => {
    if (newComment.trim()) {
      // In a real app, this would make an API call
      console.log("New comment for post", postId, ":", newComment)
      setNewComment("")
    }
  }

  const addToAppleCalendar = (activity: any) => {
    // Placeholder function for adding to Apple Calendar
    alert("將活動添加到 Apple 日曆的功能尚未實作。")
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate API call
    if (loginForm.email && loginForm.password) {
      setUser({ name: "用戶", email: loginForm.email })
      setIsLoggedIn(true)
      setShowLogin(false)
      setLoginForm({ email: "", password: "" })
      alert("登入成功！")
    } else {
      alert("請填寫所有欄位")
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (registerForm.password !== registerForm.confirmPassword) {
      alert("密碼不一致")
      return
    }
    if (registerForm.name && registerForm.email && registerForm.password) {
      setUser({ name: registerForm.name, email: registerForm.email })
      setIsLoggedIn(true)
      setShowRegister(false)
      setRegisterForm({ name: "", email: "", password: "", confirmPassword: "" })
      alert("註冊成功！")
    } else {
      alert("請填寫所有欄位")
    }
  }

  const shareEvent = async (activity: any) => {
    const shareData = {
      title: `Family Fun HK - ${activity.title}`,
      text: `${activity.description}\n📍 ${activity.location}\n🕐 ${activity.date} ${activity.time}\n💰 $${activity.price}\n\n快來參加這個精彩活動！`,
      url: `${window.location.origin}?event=${activity.id}`,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
        console.log("[v0] Event shared successfully")
      } catch (err) {
        console.log("[v0] Error sharing:", err)
        // Fallback to clipboard
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`)
        alert("活動資訊已複製到剪貼板！")
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      try {
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`)
        alert("活動資訊已複製到剪貼板！分享給朋友吧！")
      } catch (err) {
        // Final fallback
        const textArea = document.createElement("textarea")
        textArea.value = `${shareData.title}\n${shareData.text}\n${shareData.url}`
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand("copy")
        document.body.removeChild(textArea)
        alert("活動資訊已複製到剪貼板！")
      }
    }
  }

  const toggleFavorite = (activityId: number) => {
    setFavoriteActivities((prev) =>
      prev.includes(activityId) ? prev.filter((id) => id !== activityId) : [...prev, activityId],
    )
  }

  const getTodayActivities = () => {
    return activities.filter((activity) => activity.date === todayString)
  }

  const groupActivitiesByTimePeriod = (activities: any[]) => {
    const groupedActivities: { [key: string]: any[] } = {
      [t.morning]: [],
      [t.afternoon]: [],
      [t.evening]: [],
    }

    activities.forEach((activity) => {
      const hour = Number.parseInt(activity.time.split(":")[0])
      if (hour >= 6 && hour < 12) {
        groupedActivities[t.morning].push(activity)
      } else if (hour >= 12 && hour < 18) {
        groupedActivities[t.afternoon].push(activity)
      } else {
        groupedActivities[t.evening].push(activity)
      }
    })

    return groupedActivities
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FF</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">{t.title}</h1>
                  <p className="text-xs text-gray-500">{t.subtitle}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
                {(["zh-TW", "zh-CN", "en"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2 py-1 text-xs rounded transition-colors ${
                      language === lang ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {lang === "zh-TW" ? "繁中" : lang === "zh-CN" ? "简中" : "EN"}
                  </button>
                ))}
              </div>

              {isLoggedIn ? (
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600">
                    {t.welcome}, {user?.name}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsLoggedIn(false)
                      setUser(null)
                      alert(language === "en" ? "Logged out successfully" : "已登出")
                    }}
                  >
                    {t.logout}
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" onClick={() => setShowLogin(true)}>
                    {t.login}
                  </Button>
                  <Button size="sm" onClick={() => setShowRegister(true)}>
                    {t.register}
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex border-t">
            <nav className="flex space-x-8 py-4">
              {[
                { id: "discover", label: t.discover, icon: Search },
                { id: "calendar", label: t.calendar, icon: Calendar },
                { id: "today", label: t.todayActivities, icon: Clock }, // Added today's activities tab
                { id: "favorites", label: t.favorites, icon: Heart },
                { id: "community", label: t.community, icon: MessageCircle },
                { id: "merchant", label: t.merchant, icon: Store },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Activity Discovery */}
        {activeTab === "discover" && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{t.title}</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder={t.search}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2"
                >
                  <Filter className="w-4 h-4" />
                  <span>{t.filter}</span>
                </Button>
              </div>

              {showFilters && (
                <div className="mt-6 pt-6 border-t space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">{t.allRegions}</label>
                      <select
                        value={selectedRegion}
                        onChange={(e) => setSelectedRegion(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                      >
                        <option value="all">{t.allRegions}</option>
                        {regions.slice(1).map((region) => (
                          <option key={region} value={region}>
                            {region}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">{t.allCategories}</label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                      >
                        <option value="all">{t.allCategories}</option>
                        {categories.slice(1).map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">{t.allPrices}</label>
                      <select
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                      >
                        <option value="all">{t.allPrices}</option>
                        <option value="free">{t.free}</option>
                        <option value="paid">{t.paid}</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={senFriendly}
                        onChange={(e) => setSenFriendly(e.target.checked)}
                        className="rounded"
                      />
                      <span className="text-sm">{t.senFriendly}</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={subsidized}
                        onChange={(e) => setSubsidized(e.target.checked)}
                        className="rounded"
                      />
                      <span className="text-sm">{t.subsidized}</span>
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Activities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video relative">
                    <img
                      src={activity.image || "/placeholder.svg"}
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(activity.category)}`}
                      >
                        {activity.category}
                      </span>
                    </div>
                    {activity.senFriendly && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          SEN友善
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">{activity.title}</h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{activity.description}</p>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{activity.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{activity.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <button
                          onClick={() => openGoogleMaps(activity.location)}
                          className="text-blue-600 hover:underline"
                        >
                          {activity.location}
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-4 h-4" />
                          <span className="font-medium text-blue-600">{activity.price}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleFavorite(activity.id)}
                        className={favoriteActivities.includes(activity.id) ? "text-red-500" : ""}
                      >
                        <Heart
                          className={`w-4 h-4 ${favoriteActivities.includes(activity.id) ? "fill-current" : ""}`}
                        />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          addToGoogleCalendar(activity.title, activity.location, activity.date, activity.time)
                        }
                      >
                        <Calendar className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => shareEvent(activity)}>
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Today's Activities Section */}
        {activeTab === "today" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">{t.todayActivities}</h2>
              <div className="text-sm text-gray-500">
                {new Date().toLocaleDateString(language === "en" ? "en-US" : "zh-TW")}
              </div>
            </div>

            {getTodayActivities().length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-sm border">
                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">{t.noActivities}</h3>
                <p className="text-gray-500">
                  {language === "en" ? "Check back tomorrow for new activities!" : "明天再來看看新活動吧！"}
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {Object.entries(groupActivitiesByTimePeriod(getTodayActivities())).map(
                  ([period, activities]) =>
                    activities.length > 0 && (
                      <div key={period} className="bg-white rounded-2xl p-6 shadow-sm border">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <Clock className="w-5 h-5 mr-2 text-blue-600" />
                          {period} ({activities.length} {t.activitiesCount})
                        </h3>

                        <div className="space-y-3">
                          {activities.map((activity) => (
                            <div key={activity.id} className="flex border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                              {/* Time column on the left */}
                              <div className="w-20 flex-shrink-0 p-3 text-center bg-blue-100 rounded-l-lg">
                                <div className="text-sm font-medium text-blue-700">{activity.time}</div>
                              </div>

                              {/* Activity content */}
                              <div className="flex-1 p-3">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <h4 className="font-medium text-gray-900">{activity.title}</h4>
                                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                                      <button
                                        onClick={() => openGoogleMaps(activity.location)}
                                        className="flex items-center space-x-1 text-blue-600 hover:underline"
                                      >
                                        <MapPin className="w-3 h-3" />
                                        <span>{activity.location}</span>
                                      </button>
                                      <span className="flex items-center space-x-1">
                                        <DollarSign className="w-3 h-3" />
                                        <span>{activity.price}</span>
                                      </span>
                                    </div>
                                  </div>

                                  {/* Action buttons */}
                                  <div className="flex gap-1 ml-4">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => toggleFavorite(activity.id)}
                                      className={favoriteActivities.includes(activity.id) ? "text-red-500" : ""}
                                    >
                                      <Heart
                                        className={`w-4 h-4 ${favoriteActivities.includes(activity.id) ? "fill-current" : ""}`}
                                      />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() =>
                                        addToGoogleCalendar(
                                          activity.title,
                                          activity.location,
                                          activity.date,
                                          activity.time,
                                        )
                                      }
                                    >
                                      <Calendar className="w-4 h-4" />
                                    </Button>
                                    <Button variant="ghost" size="sm" onClick={() => shareEvent(activity)}>
                                      <Share2 className="w-4 h-4" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ),
                )}
              </div>
            )}
          </div>
        )}

        {/* Favorites Section */}
        {activeTab === "favorites" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">{t.favorites}</h2>
              <div className="text-sm text-gray-500">
                {favoriteActivities.length} {t.activitiesCount}
              </div>
            </div>

            {favoriteActivities.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-sm border">
                <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {language === "en" ? "No favorite activities yet" : "還沒有收藏的活動"}
                </h3>
                <p className="text-gray-500">
                  {language === "en"
                    ? "Start exploring and save activities you love!"
                    : "開始探索並收藏你喜歡的活動吧！"}
                </p>
                <Button className="mt-4" onClick={() => setActiveTab("discover")}>
                  {language === "en" ? "Explore Activities" : "探索活動"}
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities
                  .filter((activity) => favoriteActivities.includes(activity.id))
                  .map((activity) => (
                    <div
                      key={activity.id}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-md transition-shadow"
                    >
                      <div className="aspect-video relative">
                        <img
                          src={activity.image || "/placeholder.svg"}
                          alt={activity.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(activity.category)}`}
                          >
                            {activity.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-4 space-y-3">
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">{activity.title}</h3>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{activity.description}</p>
                        </div>

                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{activity.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{activity.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <button
                              onClick={() => openGoogleMaps(activity.location)}
                              className="text-blue-600 hover:underline"
                            >
                              {activity.location}
                            </button>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <DollarSign className="w-4 h-4" />
                              <span className="font-medium text-blue-600">{activity.price}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleFavorite(activity.id)}
                            className="text-red-500"
                          >
                            <Heart className="w-4 h-4 fill-current" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              addToGoogleCalendar(activity.title, activity.location, activity.date, activity.time)
                            }
                          >
                            <Calendar className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => shareEvent(activity)}>
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}

        {/* Event Calendar */}
        {activeTab === "calendar" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">{t.calendar}</h2>
              <div className="flex gap-2">
                <Button
                  variant={calendarView === "month" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCalendarView("month")}
                >
                  {t.monthView}
                </Button>
                <Button
                  variant={calendarView === "day" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCalendarView("day")}
                >
                  {t.dayView}
                </Button>
              </div>
            </div>

            {calendarView === "month" && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">
                    {currentDate.getFullYear()}年 {currentDate.getMonth() + 1}月
                  </h3>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-4">
                  {["日", "一", "二", "三", "四", "五", "六"].map((day) => (
                    <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 35 }, (_, i) => {
                    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
                    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
                    const dayNumber = i - firstDay + 1
                    const isCurrentMonth = dayNumber > 0 && dayNumber <= daysInMonth
                    const dateString = isCurrentMonth
                      ? `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(dayNumber).padStart(2, "0")}`
                      : ""
                    const dayActivities = isCurrentMonth ? getActivitiesForDate(dateString) : []
                    const isSelected = selectedDate === dateString

                    return (
                      <button
                        key={i}
                        onClick={() => (isCurrentMonth ? setSelectedDate(dateString) : null)}
                        className={`p-2 h-16 text-sm border rounded-lg transition-colors relative ${
                          isCurrentMonth
                            ? isSelected
                              ? "bg-blue-100 border-blue-300 text-blue-700"
                              : dayActivities.length > 0
                                ? "bg-blue-50 border-blue-200 hover:bg-blue-100"
                                : "hover:bg-gray-50 border-gray-200"
                            : "text-gray-300 border-gray-100"
                        }`}
                        disabled={!isCurrentMonth}
                      >
                        {isCurrentMonth && (
                          <>
                            <div className="font-medium">{dayNumber}</div>
                            {dayActivities.length > 0 && (
                              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              </div>
                            )}
                          </>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {selectedDate && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">
                  {selectedDate} {t.timeSchedule} ({getActivitiesForDate(selectedDate).length} {t.activitiesCount})
                </h3>

                {getActivitiesForDate(selectedDate).length === 0 ? (
                  <div className="text-center py-8">
                    <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">{t.noActivities}</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {getActivitiesForDate(selectedDate)
                      .sort((a, b) => {
                        const timeA = a.time.split(":").map(Number)
                        const timeB = b.time.split(":").map(Number)
                        return timeA[0] * 60 + timeA[1] - (timeB[0] * 60 + timeB[1])
                      })
                      .map((activity) => (
                        <div key={activity.id} className="flex border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                          {/* Time column on the left like Google Calendar */}
                          <div className="w-20 flex-shrink-0 p-3 text-center bg-blue-100 rounded-l-lg">
                            <div className="text-sm font-medium text-blue-700">{activity.time}</div>
                          </div>

                          {/* Activity content */}
                          <div className="flex-1 p-3">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900">{activity.title}</h4>
                                <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                                  <button
                                    onClick={() => openGoogleMaps(activity.location)}
                                    className="flex items-center space-x-1 text-blue-600 hover:underline"
                                  >
                                    <MapPin className="w-3 h-3" />
                                    <span>{activity.location}</span>
                                  </button>
                                  <span className="flex items-center space-x-1">
                                    <DollarSign className="w-3 h-3" />
                                    <span>{activity.price}</span>
                                  </span>
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(activity.category)}`}
                                  >
                                    {activity.category}
                                  </span>
                                </div>
                              </div>

                              {/* Action buttons */}
                              <div className="flex gap-1 ml-4">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => toggleFavorite(activity.id)}
                                  className={favoriteActivities.includes(activity.id) ? "text-red-500" : ""}
                                >
                                  <Heart
                                    className={`w-4 h-4 ${favoriteActivities.includes(activity.id) ? "fill-current" : ""}`}
                                  />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() =>
                                    addToGoogleCalendar(activity.title, activity.location, activity.date, activity.time)
                                  }
                                >
                                  <Calendar className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm" onClick={() => shareEvent(activity)}>
                                  <Share2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Community Section */}
        {activeTab === "community" && (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">社群論壇</h1>
              <p className="text-xl text-gray-600">分享您的親子活動經驗，交流心得，尋找靈感</p>
            </div>

            {/* Forum Filters */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="搜尋帖子、標題或內容..."
                    value={forumSearchQuery}
                    onChange={(e) => setForumSearchQuery(e.target.value)}
                    className="pl-10 pr-10 border-0 focus-visible:ring-0 bg-transparent"
                  />
                </div>
                <div className="flex gap-2">
                  <Select value={forumCategory} onValueChange={setForumCategory}>
                    <SelectTrigger className="w-32 bg-transparent">
                      <SelectValue placeholder="類別" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">全部類別</SelectItem>
                      <SelectItem value="推薦">推薦</SelectItem>
                      <SelectItem value="問題">問題</SelectItem>
                      <SelectItem value="評論">評論</SelectItem>
                      <SelectItem value="討論">討論</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" onClick={() => setShowNewPostForm(true)} className="bg-transparent">
                    <Plus className="w-4 h-4 mr-2" />
                    發表新帖
                  </Button>
                </div>
              </div>
            </div>

            {/* Forum Posts */}
            <div className="space-y-4">
              {filteredForumPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl p-4 shadow-sm border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <h4 className="font-semibold text-gray-900">{post.title}</h4>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColorForum(post.category)}`}
                          >
                            {post.category}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">{post.timestamp}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{post.content}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => toggleLike(post.id)}
                            className={`flex items-center gap-1 text-sm ${
                              likedPosts.includes(post.id) ? "text-blue-600" : "text-gray-500"
                            } hover:text-blue-600 transition-colors`}
                          >
                            <Heart className={`w-4 h-4 ${likedPosts.includes(post.id) ? "fill-current" : ""}`} />
                            {post.likes}
                          </button>
                          <button
                            onClick={() => setSelectedPost(post.id)}
                            className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors"
                          >
                            <MessageCircle className="w-4 h-4" />
                            {post.comments}
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* New Post Form */}
            {showNewPostForm && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl p-6 w-full max-w-md">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">發表新帖</h2>
                    <Button variant="ghost" size="sm" onClick={() => setShowNewPostForm(false)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">標題</label>
                      <Input
                        type="text"
                        placeholder="請輸入標題"
                        value={newPostTitle}
                        onChange={(e) => setNewPostTitle(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">內容</label>
                      <textarea
                        className="w-full p-3 border rounded-lg resize-none"
                        rows={4}
                        placeholder="請輸入內容"
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">類別</label>
                      <Select value={newPostCategory} onValueChange={setNewPostCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="選擇類別" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="推薦">推薦</SelectItem>
                          <SelectItem value="問題">問題</SelectItem>
                          <SelectItem value="評論">評論</SelectItem>
                          <SelectItem value="討論">討論</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button onClick={handleNewPost} className="flex-1">
                        發表
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setShowNewPostForm(false)}>
                        取消
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Selected Post and Comments */}
            {selectedPost && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">帖子詳情</h2>
                    <Button variant="ghost" size="sm" onClick={() => setSelectedPost(null)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Post Content */}
                  <div className="space-y-4">
                    {forumPosts
                      .filter((post) => post.id === selectedPost)
                      .map((post) => (
                        <div key={post.id} className="space-y-3">
                          <div className="flex items-start gap-4">
                            <img
                              src={post.author.avatar || "/placeholder.svg"}
                              alt={post.author.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                  <h4 className="font-semibold text-gray-900">{post.title}</h4>
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColorForum(post.category)}`}
                                  >
                                    {post.category}
                                  </span>
                                </div>
                                <span className="text-sm text-gray-500">{post.timestamp}</span>
                              </div>
                              <p className="text-gray-600 text-sm">{post.content}</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() => toggleLike(post.id)}
                                className={`flex items-center gap-1 text-sm ${
                                  likedPosts.includes(post.id) ? "text-blue-600" : "text-gray-500"
                                } hover:text-blue-600 transition-colors`}
                              >
                                <Heart className={`w-4 h-4 ${likedPosts.includes(post.id) ? "fill-current" : ""}`} />
                                {post.likes}
                              </button>
                              <button className="flex items-center gap-1 text-sm text-gray-500">
                                <MessageCircle className="w-4 h-4" />
                                {post.comments}
                              </button>
                            </div>
                            <div className="flex items-center gap-2">
                              {post.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}

                    {/* Comments */}
                    <h5 className="text-lg font-semibold">評論</h5>
                    <div className="space-y-3">
                      {forumComments
                        .filter((comment) => comment.postId === selectedPost)
                        .map((comment) => (
                          <div key={comment.id} className="flex items-start gap-3">
                            <img
                              src={comment.author.avatar || "/placeholder.svg"}
                              alt={comment.author.name}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between text-sm">
                                <span className="font-medium text-gray-900">{comment.author.name}</span>
                                <span className="text-gray-500">{comment.timestamp}</span>
                              </div>
                              <p className="text-gray-600">{comment.content}</p>
                            </div>
                          </div>
                        ))}
                    </div>

                    {/* New Comment Form */}
                    <div className="mt-4">
                      <label className="block text-sm font-medium mb-1">發表新評論</label>
                      <div className="flex items-center space-x-2">
                        <Input
                          type="text"
                          placeholder="請輸入評論內容..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                        />
                        <Button onClick={() => handleNewComment(selectedPost)} size="sm">
                          發表
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Merchant Portal */}
        {activeTab === "merchant" && (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">商戶中心</h1>
              <p className="text-xl text-gray-600">管理您的活動，追蹤報名情況，查看數據分析</p>
            </div>

            {/* Merchant Navigation */}
            <div className="flex flex-wrap gap-2 bg-white rounded-xl p-2 border">
              {[
                { id: "dashboard", label: "總覽", icon: BarChart3 },
                { id: "activities", label: "活動管理", icon: Calendar },
                { id: "registrations", label: "報名管理", icon: Users },
                { id: "analytics", label: "數據分析", icon: TrendingUp },
                { id: "profile", label: "商戶資料", icon: Settings },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setMerchantView(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    merchantView === item.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>

            {/* Activities Management */}
            {merchantView === "activities" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">活動管理</h3>
                  <Button onClick={() => setShowCreateForm(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    新增活動
                  </Button>
                </div>

                <div className="space-y-4">
                  {activities.slice(0, 5).map((activity) => (
                    <div key={activity.id} className="bg-white rounded-xl p-4 border">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-gray-900">{activity.title}</h4>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(activity.category, activity.categoryColor)}`}
                            >
                              {activity.category}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-500">
                            <span>📍 {activity.location}</span>
                            <span>
                              🕐 {activity.date} {activity.time}
                            </span>
                            <span>💰 ${activity.price}</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-2 line-clamp-2">{activity.description}</p>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <span className="text-sm text-gray-500">報名: 12/30</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setEditingActivity(activity)
                              setShowEditForm(true)
                            }}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">登入</h2>
              <Button variant="ghost" size="sm" onClick={() => setShowLogin(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">電郵地址</label>
                <Input
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  placeholder="請輸入電郵地址"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">密碼</label>
                <Input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  placeholder="請輸入密碼"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                登入
              </Button>
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => {
                    setShowLogin(false)
                    setShowRegister(true)
                  }}
                  className="text-sm text-blue-600 hover:underline"
                >
                  還沒有帳戶？立即註冊
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegister && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">註冊</h2>
              <Button variant="ghost" size="sm" onClick={() => setShowRegister(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">姓名</label>
                <Input
                  type="text"
                  value={registerForm.name}
                  onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                  placeholder="請輸入姓名"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">電郵地址</label>
                <Input
                  type="email"
                  value={registerForm.email}
                  onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                  placeholder="請輸入電郵地址"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">密碼</label>
                <Input
                  type="password"
                  value={registerForm.password}
                  onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                  placeholder="請輸入密碼"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">確認密碼</label>
                <Input
                  type="password"
                  value={registerForm.confirmPassword}
                  onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                  placeholder="請再次輸入密碼"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                註冊
              </Button>
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => {
                    setShowRegister(false)
                    setShowLogin(true)
                  }}
                  className="text-sm text-blue-600 hover:underline"
                >
                  已有帳戶？立即登入
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Activity Modal */}
      {showEditForm && editingActivity && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">編輯活動</h2>
              <Button variant="ghost" size="sm" onClick={() => setShowEditForm(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">活動名稱</label>
                  <Input defaultValue={editingActivity.title} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">類別</label>
                  <Select defaultValue={editingActivity.category}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="文化">文化</SelectItem>
                      <SelectItem value="教育">教育</SelectItem>
                      <SelectItem value="工作坊">工作坊</SelectItem>
                      <SelectItem value="節慶">節慶</SelectItem>
                      <SelectItem value="球類">球類</SelectItem>
                      <SelectItem value="嘉年華">嘉年華</SelectItem>
                      <SelectItem value="商場">商場</SelectItem>
                      <SelectItem value="室內">室內</SelectItem>
                      <SelectItem value="室外">室外</SelectItem>
                      <SelectItem value="酒店">酒店</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">活動描述</label>
                <textarea
                  className="w-full p-3 border rounded-lg resize-none"
                  rows={3}
                  defaultValue={editingActivity.description}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">地點</label>
                  <Input defaultValue={editingActivity.location} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">日期</label>
                  <Input type="date" defaultValue={editingActivity.date} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">時間</label>
                  <Input type="time" defaultValue={editingActivity.time} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">價格 (HKD)</label>
                  <Input type="number" defaultValue={editingActivity.price} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">最大參加人數</label>
                  <Input type="number" defaultValue="30" />
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <Button type="submit" className="flex-1">
                  儲存更改
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowEditForm(false)}>
                  取消
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* AI Chat */}
      {showAIChat && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-2xl shadow-2xl border flex flex-col z-50">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium">AI 助手</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setShowAIChat(false)} className="hover:bg-gray-100">
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 space-y-2 overflow-y-auto">
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`text-sm ${message.role === "assistant" ? "text-gray-700" : "text-blue-700 text-right"}`}
              >
                {message.content}
              </div>
            ))}
            {isTyping && <div className="text-sm text-gray-700">AI 助手正在輸入...</div>}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-2">
              <Input
                type="text"
                placeholder="輸入您的問題..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && newMessage.trim() !== "") {
                    // Handle sending message
                  }
                }}
              />
              <Button
                size="sm"
                onClick={() => {
                  // Handle sending message
                }}
              >
                發送
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* AI Chat Button */}
      <div className="fixed bottom-4 right-4 md:hidden">
        <Button onClick={() => setShowAIChat(true)} className="rounded-full w-14 h-14 shadow-lg">
          <Bot className="w-6 h-6" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-40">
        <div className="grid grid-cols-6 gap-1 p-2">
          {[
            { id: "discover", label: t.discover, icon: Search },
            { id: "calendar", label: t.calendar, icon: Calendar },
            { id: "today", label: t.todayActivities, icon: Clock },
            { id: "favorites", label: t.favorites, icon: Heart },
            { id: "community", label: t.community, icon: MessageCircle },
            { id: "merchant", label: t.merchant, icon: Store },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
                activeTab === item.id ? "bg-blue-100 text-blue-700" : "text-gray-600"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
