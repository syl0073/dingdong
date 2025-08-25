//WelfarePage.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../../contexts/AppContext.jsx'
import TabHeader from '../common/TabHeader.jsx'
import { policiesData, convertPolicyData } from '../../data/policies.js'
import '../../styles/components.css'

export default function HomePage() {
    const { userData } = useApp()
    const navigate = useNavigate()

    const handleInfoEdit = () => navigate('/info')
    const handleGoPolicy = (policyId) => navigate(`/policy/${policyId}`)
    const handleGoChatbot = () => navigate('/chatbot')

    // 기존 정책 데이터
    const allPolicies = [
        {
            id: 1,
            title: '전북 구강보건사업',
            org: '구강건강관리',
            due: '25.12.31(수) 마감',
            category: '보건/의료',
            policyName: '2025 전북 구강보건사업',
            benefit: '구강검진 및 치료비 지원',
            period: '25.01.01(수)~25.12.31(수)',
            department: '전라북도 구강건강관리과',
            phone: '063-123-4567',
            content: [
                '대상: 전북 거주 만 65세 이상 어르신',
                '지원내용: 구강검진 1회, 치아치료비 최대 10만원',
                '신청방법: 관할 보건소 방문 또는 온라인 신청',
                '필수서류: 신분증, 소득증빙서류'
            ]
        },
        {
            id: 2,
            title: '서울 청년월세 지원',
            org: '서울특별시',
            due: '상시',
            category: '생활/안전',
            policyName: '2025 서울 청년월세 지원사업',
            benefit: '월세 최대 30만원 지원',
            period: '상시 신청 가능',
            department: '서울특별시 주택정책과',
            phone: '02-123-4567',
            content: [
                '대상: 서울 거주 만 19~39세 청년',
                '지원내용: 월세 최대 30만원, 1년간 지원',
                '신청조건: 소득 120% 이하, 무주택자',
                '신청방법: 서울청년포털 온라인 신청'
            ]
        },
        {
            id: 3,
            title: '부산 에너지 바우처',
            org: '부산광역시',
            due: '25.10.15(수) 마감',
            category: '생활/안전',
            policyName: '2025 부산 에너지 바우처 지원',
            benefit: '에너지 바우처 10만원 지급',
            period: '25.01.01(수)~25.10.15(수)',
            department: '부산광역시 에너지정책과',
            phone: '051-123-4567',
            content: [
                '대상: 부산 거주 에너지 취약계층',
                '지원내용: 에너지 바우처 10만원 지급',
                '신청조건: 소득 150% 이하 가구',
                '사용처: 전기요금, 도시가스, 연료비 등'
            ]
        },
        {
            id: 4,
            title: '전남 장성 숙박할인',
            org: '장성군',
            due: '25.12.31(수) 마감',
            category: '신규',
            policyName: '2025 전남 장성 숙박할인 지원사업',
            benefit: '최대 5만원 할인',
            period: '25.05.01(목)~25.12.31(수)',
            department: '전라남도 장성군',
            phone: '042-123-4586',
            content: [
                '대상업소: 전남관광플랫폼(JNTOUR)에 등록된 장성군 숙박업소',
                '할인구간: 10만원 이상 결제 시 → 4만원 할인, 7만원 이상 결제 시 → 3만원 할인, 5만원 이상 결제 시 → 2만원 할인',
                '현장 결제 기준, 타 할인과 중복 적용 불가'
            ]
        },
    ]

    // 새로운 정책 데이터를 기존 시스템과 호환되도록 변환
    const newPolicies = policiesData.map(convertPolicyData) // 모든 정책 표시
    const allPoliciesCombined = [...allPolicies, ...newPolicies] // morePolicies 제거하고 직접 합치기

    const categories = ['전체', '생활/안전', '보건/의료', '신규', '기타'] // 교육/문화, 농업/농촌 제거
    const [activeCategory, setActiveCategory] = useState('전체')
    const filtered = activeCategory === '전체' ? allPoliciesCombined : allPoliciesCombined.filter(p => p.category === activeCategory)

    // 상단 고정 2개 (카테고리와 관계없이 항상 표시)
    const topTwoPolicies = allPoliciesCombined.slice(0, 2)
    // 나머지 모든 정책 (카테고리 필터링 적용)
    const remainingPolicies = activeCategory === '전체' ? allPoliciesCombined.slice(2) : allPoliciesCombined.slice(2).filter(p => p.category === activeCategory)

    return (
        <div className="home-page">
            <TabHeader />
            <div className="page-content welfare-hero">
                <div
                    className="welfare-hero__panel"
                    onClick={() => handleGoPolicy(4)} // 추천 복지는 장성 숙박할인으로 고정
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            handleGoPolicy(4)
                        }
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="welfare-hero__head">
                        <span className="welfare-hero__title">추천 복지</span>
                        <button
                            type="button"
                            className="linklike"
                            onClick={(e) => {
                                e.stopPropagation()
                                handleInfoEdit()
                            }}
                        >
                            정보수정 &gt;
                        </button>
                    </div>
                    <div className="welfare-hero__count">{userData?.recommendedCount ?? 2}건</div>
                </div>

                {/* 리스트 1: 카테고리 필터 대상 */}
                <section className="policy-list">
                    {topTwoPolicies.map(p => ( // 상단 고정 2개
                        <button key={p.id} className="policy-row" onClick={() => handleGoPolicy(p.id)} type="button">
                            <img className="policy-row__logo" src="/images/govLogo.png" alt="보건복지부" />
                            <div className="policy-row__body">
                                <p className="policy-row__title">{p.title}</p>
                                <p className="policy-row__meta">
                                    {p.org} <span className="dot">•</span> {p.due}
                                </p>
                            </div>
                            <div className="policy-row__badge">
                                <span className="badge badge--primary">지원 대상</span>
                            </div>
                        </button>
                    ))}
                </section>

                {/* 카테고리 칩 */}
                <section className="filter-chips filter-chips--below">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`chip ${activeCategory === category ? 'chip--active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </section>


                {/* 리스트 2: 추가 리스트 */}
                <section className="policy-list policy-list--more">
                    {remainingPolicies.map(p => ( // 나머지 모든 정책
                        <button key={p.id} className="policy-row" onClick={() => handleGoPolicy(p.id)} type="button">
                            <img className="policy-row__logo" src="/images/govLogo.png" alt="보건복지부" />
                            <div className="policy-row__body">
                                <p className="policy-row__title">{p.title}</p>
                                <p className="policy-row__meta">
                                    {p.org} <span className="dot">•</span> {p.due}
                                </p>
                            </div>
                        </button>
                    ))}
                </section>
            </div>

            {/* 플로팅 챗봇 */}
            <button className="floating-chatbot" onClick={handleGoChatbot} aria-label="챗봇 열기">
                <img src="/images/chatbot.png" alt="챗봇" />
            </button>
        </div>
    )
}
