export const policiesData = [
  {
    "policyId": "P001",
    "title": "기초연금 지원",
    "description": "만 65세 이상 저소득층 어르신 대상으로 매월 30만원 기초연금을 지급합니다.",
    "conditions": {
      "minAge": 65,
      "maxIncome": 2000000
    },
    "supportAmount": 300000,
    "deadline": "2099-12-31"
  },
  {
    "policyId": "P002",
    "title": "노인 무료 건강검진",
    "description": "만 60세 이상 어르신에게 매 2년마다 무료 건강검진을 제공합니다.",
    "conditions": {
      "minAge": 60
    },
    "supportAmount": 0,
    "deadline": "2099-12-31"
  },
  {
    "policyId": "P003",
    "title": "농어민 연금 지원",
    "description": "농어업 경력 10년 이상인 어르신에게 추가 연금 수당을 지급합니다.",
    "conditions": {
      "minAge": 60,
      "occupation": "farmer",
      "minCareerYears": 10
    },
    "supportAmount": 150000,
    "deadline": "2099-12-31"
  },
  {
    "policyId": "P004",
    "title": "저소득층 주택 개·보수 지원",
    "description": "소득 150만 원 이하 1인 가구 어르신의 주택 개·보수를 지원합니다.",
    "conditions": {
      "maxIncome": 1500000,
      "householdType": "1인 가구"
    },
    "supportAmount": 5000000,
    "deadline": "2025-12-31"
  },
  {
    "policyId": "P005",
    "title": "경로당 식사 제공 서비스",
    "description": "거주지 인근 경로당에서 주 3회 무료 점심 식사를 제공합니다.",
    "conditions": {},
    "supportAmount": 0,
    "deadline": "2026-06-30"
  },
  {
    "policyId": "P006",
    "title": "치매 어르신 돌봄 바우처",
    "description": "치매 진단을 받은 어르신에게 월 20만원 바우처를 지급합니다.",
    "conditions": {
      "healthCondition": "dementia"
    },
    "supportAmount": 200000,
    "deadline": "2026-09-30"
  },
  {
    "policyId": "P007",
    "title": "농촌 지역 교통비 지원",
    "description": "버스·택시 이용이 어려운 농촌 어르신에게 월 5만원 교통비를 지원합니다.",
    "conditions": {
      "residenceType": "rural",
      "minAge": 65
    },
    "supportAmount": 50000,
    "deadline": "2025-11-30"
  },
  {
    "policyId": "P008",
    "title": "노인 문화·여가 활동비",
    "description": "문화 프로그램·여행 체험 등에 사용할 수 있는 연간 10만원 활동비를 지급합니다.",
    "conditions": {
      "minAge": 60
    },
    "supportAmount": 100000,
    "deadline": "2025-12-31"
  },
  {
    "policyId": "P009",
    "title": "무릎 인공관절 수술비 지원",
    "description": "관절염으로 인공관절 수술이 필요한 만 70세 이상 저소득층 어르신의 본인부담금을 지원합니다.",
    "conditions": {
      "minAge": 70,
      "maxIncome": 1800000
    },
    "supportAmount": 1200000,
    "deadline": "2026-12-31",
    "targetRegions": [
      "청양",
      "서산"
    ],
    "tags": [
      "HEALTH_SUPPORT"
    ]
  },
  {
    "policyId": "P010",
    "title": "백내장 수술 본인부담 경감",
    "description": "만 65세 이상 어르신의 백내장 수술 본인부담금을 경감합니다.",
    "conditions": {
      "minAge": 65
    },
    "supportAmount": 300000,
    "deadline": "2027-06-30",
    "tags": [
      "HEALTH_SUPPORT"
    ]
  },
  {
    "policyId": "P011",
    "title": "보청기 구입비 보조",
    "description": "난청 어르신의 보청기 구입에 대해 1회 한정 보조금을 지급합니다.",
    "conditions": {
      "minAge": 65,
      "maxIncome": 2200000
    },
    "supportAmount": 800000,
    "deadline": "2026-03-31",
    "targetRegions": [
      "서산",
      "대천"
    ],
    "tags": [
      "HEARING_AID"
    ]
  },
  {
    "policyId": "P012",
    "title": "안경/돋보기 구입 지원",
    "description": "시력 저하로 어려움을 겪는 어르신에게 안경 또는 돋보기 구입비를 지원합니다.",
    "conditions": {
      "minAge": 65,
      "maxIncome": 2500000
    },
    "supportAmount": 150000,
    "deadline": "2025-12-31",
    "tags": [
      "VISION_AID"
    ]
  },
  {
    "policyId": "P013",
    "title": "노인 우울증 심리상담",
    "description": "전문상담사가 진행하는 무료 심리상담 프로그램을 제공합니다.",
    "conditions": {
      "minAge": 60
    },
    "supportAmount": 0,
    "deadline": "2027-12-31",
    "targetRegions": [
      "청양",
      "대천"
    ],
    "tags": [
      "MENTAL_HEALTH"
    ]
  },
  {
    "policyId": "P014",
    "title": "응급안심서비스(응급호출기)",
    "description": "독거 어르신 가정에 응급호출기·활동감지 센서를 설치해 드립니다.",
    "conditions": {
      "minAge": 65,
      "householdType": "ALONE"
    },
    "supportAmount": 0,
    "deadline": "2026-12-31",
    "tags": [
      "SAFETY_DEVICE"
    ]
  },
  {
    "policyId": "P015",
    "title": "낙상 예방 주거환경 개선",
    "description": "화장실 손잡이, 미끄럼 방지, 경사로 설치 등 낙상 예방 공사를 지원합니다.",
    "conditions": {
      "minAge": 65,
      "maxIncome": 2000000
    },
    "supportAmount": 1200000,
    "deadline": "2025-10-31",
    "targetRegions": [
      "청양"
    ],
    "tags": [
      "HOUSING_REPAIR"
    ]
  },
  {
    "policyId": "P016",
    "title": "겨울철 난방비 바우처",
    "description": "저소득층 어르신의 겨울철 난방비를 지원합니다.",
    "conditions": {
      "minAge": 65,
      "maxIncome": 1500000,
      "householdType": "1인 가구"
    },
    "supportAmount": 300000,
    "deadline": "2025-12-15",
    "targetRegions": [
      "서산",
      "대천"
    ],
    "tags": [
      "ENERGY_SUPPORT"
    ]
  },
  {
    "policyId": "P017",
    "title": "여름철 폭염 대책 지원",
    "description": "무더위 쉼터 이동수단 및 생수·냉풍기 등을 지원합니다.",
    "conditions": {
      "minAge": 65
    },
    "supportAmount": 100000,
    "deadline": "2025-08-31",
    "targetRegions": [
      "청양",
      "서산",
      "대천"
    ],
    "tags": [
      "HEATWAVE"
    ]
  },
  {
    "policyId": "P018",
    "title": "재난/태풍 피해 복구비",
    "description": "주택 파손 등 재난 피해를 입은 어르신에게 복구비를 지원합니다.",
    "conditions": {},
    "supportAmount": 3000000,
    "deadline": "2026-12-31",
    "targetRegions": [
      "대천"
    ],
    "tags": [
      "DISASTER_RELIEF"
    ]
  },
  {
    "policyId": "P019",
    "title": "장기요양 본인부담 완화",
    "description": "장기요양보험 본인부담금을 일정 비율 경감합니다.",
    "conditions": {
      "minAge": 65,
      "healthCondition": "dementia"
    },
    "supportAmount": 0,
    "deadline": "2029-12-31",
    "tags": [
      "LONG_TERM_CARE"
    ]
  },
  {
    "policyId": "P020",
    "title": "치매 가족 휴식(Respite) 서비스",
    "description": "치매 어르신을 돌보는 가족에게 단기 보호시설 이용료 바우처를 제공합니다.",
    "conditions": {
      "healthCondition": "dementia"
    },
    "supportAmount": 400000,
    "deadline": "2026-09-30",
    "tags": [
      "RESPITE"
    ]
  },
  {
    "policyId": "P021",
    "title": "거동불편 의료이송 지원",
    "description": "병원 방문이 어려운 어르신의 왕복 의료이송비를 지원합니다.",
    "conditions": {
      "minAge": 70,
      "maxIncome": 2200000
    },
    "supportAmount": 100000,
    "deadline": "2026-06-30",
    "targetRegions": [
      "청양",
      "서산"
    ],
    "tags": [
      "MEDICAL_TRANSPORT"
    ]
  },
  {
    "policyId": "P022",
    "title": "의치(틀니) 지원",
    "description": "치아 상실로 불편한 어르신의 의치(틀니) 시술 비용을 보조합니다.",
    "conditions": {
      "minAge": 65,
      "maxIncome": 2200000
    },
    "supportAmount": 600000,
    "deadline": "2026-11-30",
    "tags": [
      "DENTAL"
    ]
  },
  {
    "policyId": "P023",
    "title": "스마트폰 사용 교육",
    "description": "어르신 대상 스마트폰·키오스크 사용 교육을 무료로 제공합니다.",
    "conditions": {
      "minAge": 60
    },
    "supportAmount": 0,
    "deadline": "2027-03-31",
    "targetRegions": [
      "서산",
      "대천"
    ],
    "tags": [
      "DIGITAL_EDU"
    ]
  },
  {
    "policyId": "P024",
    "title": "인터넷/모바일 요금 감면",
    "description": "통신요금 감면 대상 어르신에게 월 1만원 요금 감면을 제공합니다.",
    "conditions": {
      "minAge": 65,
      "maxIncome": 2300000
    },
    "supportAmount": 10000,
    "deadline": "2099-12-31",
    "tags": [
      "TELECOM_DISCOUNT"
    ]
  },
  {
    "policyId": "P025",
    "title": "관절 물리치료 이용권",
    "description": "만성 통증 완화를 위한 물리치료 이용권을 제공합니다.",
    "conditions": {
      "minAge": 65,
      "maxIncome": 2500000
    },
    "supportAmount": 200000,
    "deadline": "2026-05-31",
    "targetRegions": [
      "청양"
    ],
    "tags": [
      "REHAB"
    ]
  },
  {
    "policyId": "P026",
    "title": "약제비 본인부담 지원",
    "description": "고혈압·당뇨 등 만성질환 약제비의 본인부담을 지원합니다.",
    "conditions": {
      "minAge": 65,
      "maxIncome": 2000000
    },
    "supportAmount": 100000,
    "deadline": "2025-12-31",
    "tags": [
      "MEDICATION"
    ]
  },
  {
    "policyId": "P027",
    "title": "독거 어르신 안부확인(생활관리사)",
    "description": "생활관리사가 정기 방문/전화로 안전을 확인합니다.",
    "conditions": {
      "minAge": 65,
      "householdType": "독거"
    },
    "supportAmount": 0,
    "deadline": "2029-12-31",
    "targetRegions": [
      "청양",
      "서산",
      "대천"
    ],
    "tags": [
      "VISIT_CHECK"
    ]
  },
  {
    "policyId": "P028",
    "title": "가사·세탁 지원 서비스",
    "description": "신체적 어려움이 있는 어르신에게 가사·세탁·정리 서비스를 제공합니다.",
    "conditions": {
      "minAge": 70,
      "maxIncome": 2200000
    },
    "supportAmount": 300000,
    "deadline": "2026-10-31",
    "tags": [
      "HOME_HELP"
    ]
  },
  {
    "policyId": "P029",
    "title": "목욕/이미용 바우처",
    "description": "위생 관리를 위해 목욕·이미용 바우처를 제공합니다.",
    "conditions": {
      "minAge": 70,
      "maxIncome": 2000000
    },
    "supportAmount": 80000,
    "deadline": "2026-02-28",
    "targetRegions": [
      "서산"
    ],
    "tags": [
      "PERSONAL_CARE"
    ]
  },
  {
    "policyId": "P030",
    "title": "장수수당(지방) 지급",
    "description": "만 80세 이상 어르신에게 분기별 장수수당을 지급합니다.",
    "conditions": {
      "minAge": 80
    },
    "supportAmount": 150000,
    "deadline": "2099-12-31",
    "targetRegions": [
      "청양",
      "대천"
    ],
    "tags": [
      "LONGEVITY_ALLOWANCE"
    ]
  },
  {
    "policyId": "P031",
    "title": "경로대학 수강 지원",
    "description": "경로대학·평생학습 프로그램 수강료를 지원합니다.",
    "conditions": {
      "minAge": 60
    },
    "supportAmount": 100000,
    "deadline": "2026-12-31",
    "tags": [
      "EDU"
    ]
  },
  {
    "policyId": "P032",
    "title": "시니어 일자리(공공형)",
    "description": "지역 환경정비·안전지킴이 등 공공일자리를 제공합니다.",
    "conditions": {
      "minAge": 65,
      "maxIncome": 2500000
    },
    "supportAmount": 300000,
    "deadline": "2026-01-31",
    "targetRegions": [
      "청양",
      "서산",
      "대천"
    ],
    "tags": [
      "SENIOR_JOB"
    ]
  },
  {
    "policyId": "P033",
    "title": "농촌 마을버스 운영 지원",
    "description": "대중교통 취약지역 어르신의 이동권 보장을 위해 마을버스를 운영합니다.",
    "conditions": {
      "residenceType": "rural",
      "minAge": 65
    },
    "supportAmount": 0,
    "deadline": "2027-12-31",
    "targetRegions": [
      "청양"
    ],
    "tags": [
      "TRANSPORT"
    ]
  },
  {
    "policyId": "P034",
    "title": "무료 독감 예방접종",
    "description": "만 65세 이상 어르신 대상 독감 예방접종을 무료로 제공합니다.",
    "conditions": {
      "minAge": 65
    },
    "supportAmount": 0,
    "deadline": "2099-12-31",
    "tags": [
      "VACCINE"
    ]
  },
  {
    "policyId": "P035",
    "title": "코로나19 추가접종 지원",
    "description": "면역저하 어르신 대상 추가접종을 지원합니다.",
    "conditions": {
      "minAge": 65
    },
    "supportAmount": 0,
    "deadline": "2025-12-31",
    "tags": [
      "VACCINE"
    ]
  },
  {
    "policyId": "P036",
    "title": "난방기 교체 지원",
    "description": "노후 난방기(보일러) 교체 비용을 보조합니다.",
    "conditions": {
      "minAge": 65,
      "maxIncome": 1800000
    },
    "supportAmount": 1200000,
    "deadline": "2026-12-31",
    "targetRegions": [
      "대천"
    ],
    "tags": [
      "ENERGY_SUPPORT"
    ]
  },
  {
    "policyId": "P037",
    "title": "에너지 효율개선(단열·창호)",
    "description": "노후 주택의 단열·창호 개선으로 난방비를 절감합니다.",
    "conditions": {
      "minAge": 65,
      "maxIncome": 1800000
    },
    "supportAmount": 2500000,
    "deadline": "2026-09-30",
    "targetRegions": [
      "청양",
      "서산"
    ],
    "tags": [
      "HOME_ENERGY"
    ]
  },
  {
    "policyId": "P038",
    "title": "태양광 미니발전소 지원",
    "description": "전기요금 절감을 위해 베란다 미니 태양광 설치를 보조합니다.",
    "conditions": {
      "minAge": 65
    },
    "supportAmount": 500000,
    "deadline": "2026-07-31",
    "tags": [
      "RENEWABLE"
    ]
  },
  {
    "policyId": "P039",
    "title": "우수(雨水) 저장탱크 설치",
    "description": "생활용수 절약을 위한 빗물 저장탱크 설치를 지원합니다.",
    "conditions": {},
    "supportAmount": 300000,
    "deadline": "2026-05-31",
    "targetRegions": [
      "서산"
    ],
    "tags": [
      "ENV"
    ]
  },
  {
    "policyId": "P040",
    "title": "수도요금 감면",
    "description": "저소득 어르신 가구의 상하수도 요금을 감면합니다.",
    "conditions": {
      "maxIncome": 1600000,
      "minAge": 65
    },
    "supportAmount": 0,
    "deadline": "2099-12-31",
    "tags": [
      "UTILITY_DISCOUNT"
    ]
  },
  {
    "policyId": "P041",
    "title": "보훈대상자 진료비 지원(고령)",
    "description": "고령 보훈대상자의 진료비 부담을 경감합니다.",
    "conditions": {
      "minAge": 70
    },
    "supportAmount": 200000,
    "deadline": "2027-12-31",
    "tags": [
      "VETERAN_HEALTH"
    ]
  },
  {
    "policyId": "P042",
    "title": "노인 맞춤형 운동교실",
    "description": "낙상 예방과 근력 강화를 위한 운동교실을 운영합니다.",
    "conditions": {
      "minAge": 65
    },
    "supportAmount": 0,
    "deadline": "2026-04-30",
    "targetRegions": [
      "청양",
      "대천"
    ],
    "tags": [
      "FITNESS"
    ]
  },
  {
    "policyId": "P043",
    "title": "배회감지기 보급(치매)",
    "description": "배회 위험이 있는 치매 어르신에게 배회감지기를 보급합니다.",
    "conditions": {
      "healthCondition": "dementia"
    },
    "supportAmount": 0,
    "deadline": "2026-03-31",
    "tags": [
      "SAFETY_DEVICE"
    ]
  },
  {
    "policyId": "P044",
    "title": "주야간보호센터 이용료 감면",
    "description": "주·야간보호센터 이용 시 이용료 일부를 감면합니다.",
    "conditions": {
      "minAge": 65,
      "maxIncome": 2000000
    },
    "supportAmount": 200000,
    "deadline": "2026-12-31",
    "tags": [
      "DAYCARE"
    ]
  },
  {
    "policyId": "P045",
    "title": "가정 방문 물리치료",
    "description": "거동이 불편한 어르신 댁으로 방문 물리치료를 제공합니다.",
    "conditions": {
      "minAge": 70
    },
    "supportAmount": 150000,
    "deadline": "2025-11-30",
    "targetRegions": [
      "서산"
    ],
    "tags": [
      "REHAB"
    ]
  },
  {
    "policyId": "P046",
    "title": "목재 펠릿/연탄 지원",
    "description": "난방 취약 어르신에게 겨울철 연탄 또는 펠릿을 지원합니다.",
    "conditions": {
      "minAge": 65,
      "maxIncome": 1400000
    },
    "supportAmount": 200000,
    "deadline": "2025-12-31",
    "targetRegions": [
      "청양",
      "대천"
    ],
    "tags": [
      "ENERGY_SUPPORT"
    ]
  },
  {
    "policyId": "P047",
    "title": "장례비 긴급 지원",
    "description": "저소득 가정의 장례비 부담을 완화합니다.",
    "conditions": {
      "maxIncome": 1600000
    },
    "supportAmount": 800000,
    "deadline": "2025-10-15",
    "tags": [
      "EMERGENCY"
    ]
  },
  {
    "policyId": "P048",
    "title": "노인 치과 스케일링 지원",
    "description": "연 1회 치과 스케일링 비용을 지원합니다.",
    "conditions": {
      "minAge": 65
    },
    "supportAmount": 70000,
    "deadline": "2027-12-31",
    "tags": [
      "DENTAL"
    ]
  },
  {
    "policyId": "P049",
    "title": "수면무호흡 진단/치료 보조",
    "description": "수면무호흡 증상 개선을 위한 진단 및 기기 구입을 지원합니다.",
    "conditions": {
      "minAge": 65,
      "maxIncome": 2300000
    },
    "supportAmount": 400000,
    "deadline": "2026-08-31",
    "tags": [
      "HEALTH_SUPPORT"
    ]
  },
  {
    "policyId": "P050",
    "title": "가정용 안전용품 패키지",
    "description": "가스차단기·화재감지기·소화기 등을 무상 보급합니다.",
    "conditions": {
      "minAge": 65
    },
    "supportAmount": 0,
    "deadline": "2026-12-31",
    "targetRegions": [
      "서산",
      "대천"
    ],
    "tags": [
      "SAFETY_DEVICE"
    ]
  },
  {
    "policyId": "P051",
    "title": "공공병원 왕진 서비스",
    "description": "의사가 댁으로 방문하여 기초 진료를 제공합니다.",
    "conditions": {
      "minAge": 70
    },
    "supportAmount": 0,
    "deadline": "2026-09-30",
    "targetRegions": [
      "청양"
    ],
    "tags": [
      "HOME_VISIT"
    ]
  },
  {
    "policyId": "P052",
    "title": "야간 안심귀가 동행서비스",
    "description": "늦은 시간 이동이 필요한 어르신을 안전요원이 동행합니다.",
    "conditions": {
      "minAge": 70
    },
    "supportAmount": 0,
    "deadline": "2025-12-31",
    "targetRegions": [
      "대천"
    ],
    "tags": [
      "SAFETY"
    ]
  },
  {
    "policyId": "P053",
    "title": "가사도우미 바우처(치매)",
    "description": "치매 어르신 가정에 가사도우미 바우처를 제공합니다.",
    "conditions": {
      "healthCondition": "dementia"
    },
    "supportAmount": 300000,
    "deadline": "2026-06-30",
    "targetRegions": [
      "청양",
      "서산"
    ],
    "tags": [
      "RESPITE"
    ]
  },
  {
    "policyId": "P054",
    "title": "농기계 임대료 감면(고령 농업인)",
    "description": "고령 농업인에게 농기계 임대료를 감면합니다.",
    "conditions": {
      "minAge": 65,
      "occupation": "farmer"
    },
    "supportAmount": 0,
    "deadline": "2027-12-31",
    "targetRegions": [
      "청양",
      "서산"
    ],
    "tags": [
      "FARMER_SUPPORT"
    ]
  },
  {
    "policyId": "P055",
    "title": "텃밭 가꾸기 키트 배포",
    "description": "어르신의 정서 안정과 건강 증진을 위해 텃밭 키트를 제공합니다.",
    "conditions": {
      "minAge": 60
    },
    "supportAmount": 50000,
    "deadline": "2026-04-30",
    "targetRegions": [
      "청양",
      "대천"
    ],
    "tags": [
      "LEISURE"
    ]
  },
  {
    "policyId": "P056",
    "title": "지역 복지관 차량 송영",
    "description": "복지관 프로그램 참여를 위한 차량 송영 서비스를 제공합니다.",
    "conditions": {
      "minAge": 65
    },
    "supportAmount": 0,
    "deadline": "2026-11-30",
    "targetRegions": [
      "서산"
    ],
    "tags": [
      "TRANSPORT"
    ]
  },
  {
    "policyId": "P057",
    "title": "치매 가족 교육 프로그램",
    "description": "치매 환자 가족 대상 돌봄 기술·스트레스 관리 교육을 제공합니다.",
    "conditions": {},
    "supportAmount": 0,
    "deadline": "2027-06-30",
    "tags": [
      "DEMENTIA_EDU"
    ]
  }
];

// 정책 데이터를 기존 시스템과 호환되도록 변환하는 함수
export const convertPolicyData = (policy) => {
  const deadline = new Date(policy.deadline);
  const today = new Date();
  const diffTime = deadline - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // 마감일 포맷팅
  let dueText = '';
  if (diffDays > 0) {
    dueText = `D-${diffDays}`;
  } else if (diffDays === 0) {
    dueText = '오늘 마감';
  } else {
    dueText = '마감됨';
  }

  // 카테고리 결정 (태그 기반)
  let category = '기타';
  if (policy.tags && policy.tags.length > 0) {
    const tag = policy.tags[0];
    if (tag.includes('HEALTH') || tag.includes('VACCINE') || tag.includes('DENTAL')) {
      category = '보건/의료';
    } else if (tag.includes('ENERGY') || tag.includes('TRANSPORT') || tag.includes('SAFETY')) {
      category = '생활/안전';
    } else if (tag.includes('EDU') || tag.includes('LEISURE')) {
      category = '교육/문화';
    } else if (tag.includes('FARMER')) {
      category = '농업/농촌';
    }
  }

  return {
    id: policy.policyId,
    title: policy.title,
    org: policy.targetRegions ? policy.targetRegions.join(', ') : '전국',
    due: dueText,
    category: category,
    policyName: policy.title,
    benefit: policy.supportAmount > 0 ? `${policy.supportAmount.toLocaleString()}원 지원` : '무료 서비스',
    period: `~${policy.deadline}`,
    department: '관할 지자체',
    phone: '1588-0000',
    content: [
      policy.description,
      ...Object.entries(policy.conditions).map(([key, value]) => {
        if (key === 'minAge') return `대상: 만 ${value}세 이상`;
        if (key === 'maxIncome') return `소득조건: 연소득 ${(value/10000).toFixed(0)}만원 이하`;
        if (key === 'occupation') return `직업: ${value === 'farmer' ? '농업인' : value}`;
        if (key === 'householdType') return `가구형태: ${value}`;
        if (key === 'healthCondition') return `건강상태: ${value === 'dementia' ? '치매' : value}`;
        return `${key}: ${value}`;
      }).filter(item => item)
    ]
  };
};
