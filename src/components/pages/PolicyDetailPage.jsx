// src/pages/PolicyDetailPage.jsx
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { policiesData, convertPolicyData } from '../../data/policies.js'

export default function PolicyDetailPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [policy, setPolicy] = useState(null)

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
                '신청방법: 관할 농협 또는 농업기술센터 방문'
            ]
        },
        {
            id: 102,
            title: '대전 어르신 검진비 지원',
            org: '대전광역시',
            due: '25.12.31(수) 마감',
            policyName: '2025 대전 어르신 건강검진 지원',
            benefit: '건강검진비 전액 지원',
            period: '25.01.01(수)~25.12.31(수)',
            department: '대전시 보건정책과',
            phone: '042-123-4567',
            content: [
                '대상: 대전 거주 만 65세 이상 어르신',
                '지원내용: 기본검진 및 암검진 전액 지원',
                '검진기관: 대전시 지정 의료기관',
                '신청방법: 검진기관 방문 시 자동 적용'
            ]
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
                '신청방법: 관할 농협 또는 농업기술센터 방문'
            ]
        },
    ]

    // 새로운 정책 데이터를 기존 시스템과 호환되도록 변환
    const newPolicies = policiesData.map(convertPolicyData)

    // 모든 정책을 합친 배열
    const allPoliciesCombined = [...allPolicies, ...morePolicies, ...newPolicies]

    useEffect(() => {
        const foundPolicy = allPoliciesCombined.find(p => p.id === id || p.id === parseInt(id))
        if (foundPolicy) {
            setPolicy(foundPolicy)
        } else {
            // 정책을 찾을 수 없는 경우 기본값 설정
            setPolicy({
                id: id,
                title: '알 수 없는 정책',
                org: '알 수 없음',
                due: '알 수 없음',
                category: '알 수 없음',
                policyName: '알 수 없는 정책',
                benefit: '알 수 없음',
                period: '알 수 없음',
                department: '알 수 없음',
                phone: '알 수 없음',
                content: ['정책 정보를 찾을 수 없습니다.']
            })
        }
    }, [id])

    if (!policy) {
        return <div>로딩 중...</div>
    }

    return (
        <div className="policy-detail-page">
            <header className="detail-header">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    ←
                </button>
                <h1 className="detail-title">{policy.policyName}</h1>
                <div className="header-spacer" />
            </header>

            <div className="badge-row">
                <span className="pill pill--danger">{policy.due}</span>
                <span className="pill pill--info">지원 대상</span>
            </div>

            <section className="summary-card">
                <div className="summary-row">
                    <span className="summary-key">지원혜택</span>
                    <span className="summary-val">{policy.benefit}</span>
                </div>
                <div className="summary-row">
                    <span className="summary-key">신청기간</span>
                    <span className="summary-val">{policy.period}</span>
                </div>
                <div className="summary-row">
                    <span className="summary-key">정책기관</span>
                    <span className="summary-val">{policy.org}</span>
                </div>
                <div className="summary-row">
                    <span className="summary-key">담당부서</span>
                    <a className="summary-val" href={`tel:${policy.phone}`}>
                        {policy.phone}
                    </a>
                </div>
            </section>

            <section className="detail-section">
                <h2>지원내용</h2>
                <ul className="bullet-list">
                    {policy.content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>
        </div>
    )
}
