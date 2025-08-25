// pages/HomePage.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../../contexts/AppContext.jsx'
import TabHeader from '../common/TabHeader.jsx'
import '../../styles/components.css'

export default function HomePage() {
    const { userData } = useApp()
    const navigate = useNavigate()

    const handleInfoEdit = () => navigate('/info')
    const handleGoPolicy = (policyId) => navigate(`/policy/${policyId}`)
    const handleGoChatbot = () => navigate('/chatbot')

    // WelfarePage와 동일한 리스트/카테고리 구성
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
                '필수서류: 신분증, 소득증빙서류',
            ],
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
                '신청방법: 서울청년포털 온라인 신청',
            ],
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
                '사용처: 전기요금, 도시가스, 연료비 등',
            ],
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
                '현장 결제 기준, 타 할인과 중복 적용 불가',
            ],
        },
    ]

    const morePolicies = [
        {
            id: 101,
            title: '경기 농촌일손 긴급지원',
            org: '경기도',
            due: '25.09.30(화) 마감',
            policyName: '2025 경기 농촌일손 긴급지원사업',
            benefit: '일당 최대 15만원 지원',
            period: '25.03.01(토)~25.09.30(화)',
            department: '경기도 농업정책과',
            phone: '031-123-4567',
            content: [
                '대상: 경기도 농업인 및 농촌일손',
                '지원내용: 일당 최대 15만원, 최대 20일 지원',
                '신청조건: 농업경영체 등록자',
                '신청방법: 관할 농협 또는 농업기술센터 방문',
            ],
        },
        {
            id: 102,
            title: '대전 어르신 검진비 지원',
            org: '대전광역시',
            due: '25.12.31(수) 마감',
            policyName: '2025 대전 어르신 건강검진 지원',
            benefit: '건강검진비 전액 지원',
            period: '25.01.01(수)~25.12.31(수)',
            department: '대전광역시 보건정책과',
            phone: '042-123-4567',
            content: [
                '대상: 대전 거주 만 65세 이상 어르신',
                '지원내용: 기본검진 및 암검진 전액 지원',
                '검진기관: 대전시 지정 의료기관',
                '신청방법: 검진기관 방문 시 자동 적용',
            ],
        },
        {
            id: 103,
            title: '전북 농가 재해보험',
            org: '전라북도',
            due: '상시',
            policyName: '2025 전북 농가 재해보험 지원',
            benefit: '보험료 50% 지원',
            period: '상시 신청 가능',
            department: '전라북도 농업정책과',
            phone: '063-123-4567',
            content: [
                '대상: 전북 농업경영체 등록자',
                '지원내용: 재해보험료 50% 지원',
                '보험종류: 농작물재해보험, 시설재배보험',
                '신청방법: 관할 농협 또는 농업기술센터 방문',
            ],
        },
    ]

    const categories = ['전체', '생활/안전', '보건/의료', '신규', '인기']
    const [activeCategory] = useState('전체')
    const filtered = activeCategory === '전체'
        ? allPolicies
        : allPolicies.filter(p => p.category === activeCategory)

    return (
        <div className="home-page">
            <TabHeader />

            {/* ✅ WelfarePage 스타일/구조를 그대로 적용 */}
            <div className="page-content welfare-hero">
                <div
                    className="welfare-hero__panel"
                    onClick={() => navigate('/welfare')}   // ✅ 추천복지 → welfare로 이동
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            navigate('/welfare')               // ✅ 키보드 접근성
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

                {/* ⬆️ 리스트 2: 추가 리스트 — 위로 올림 */}
                <section className="policy-list policy-list--more">
                    {/*<h4>신규 정책</h4>*/}
                    {morePolicies.map(p => (
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

                <img
                    src="/images/alarm.png"
                    alt="알림"
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleInfoEdit();
                    }}
                />

                {/* ⬇️ 리스트 1: 카테고리 필터 대상 — 아래로 내림 */}
                <section className="policy-list">
                    {/*<h4>많이 본 정책</h4>*/}
                    {filtered.map(p => (
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
