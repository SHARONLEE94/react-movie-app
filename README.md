# 리엑트로 영화검색 사이트 만들기

## api 사이트
`https://www.themoviedb.org/`
-> apikey 받기

## Axios 사용
`npm i axios --save` 

## Styled Component
👉 Styled Components는 CSS-in-JS 라이브러리 중 하나로, JavaScript 코드 안에서 직접 스타일을 작성할 수 있도록 도와주는 도구. React에서 많이 사용되며, 컴포넌트 단위로 스타일을 적용할 수 있어 유지보수가 편리하다
`npm install --save styled-components`

## react-router-dom
1. React 애플리케이션에서 라우팅을 관리하는 라이브러리
2. 이를 사용하면 **싱글 페이지 애플리케이션(SPA)**에서도 여러 페이지가 있는 것처럼 동작 가능

### react-router-dom 주요 개념 및 기능
1. **BrowserRouter & HashRouter**
- BrowserRouter: HTML5의 History API를 이용해 URL을 관리 (일반적으로 많이 사용됨)
- HashRouter: URL에 #을 붙여서 경로를 관리 (/#/home처럼 표시됨, 서버 설정 필요 없음)
2. **Routes & Route**
- <Routes>: 여러 개의 <Route>를 감싸는 컨테이너
- <Route>: 특정 경로(path)에 해당하는 컴포넌트를 렌더링하는 역할
3. **Link & NavLink**
- <Link>: a 태그를 대체하며, 클릭 시 페이지를 새로고침하지 않고 이동
- <NavLink>: Link와 비슷하지만, **현재 선택된 링크(active 상태)**를 스타일링할 수 있음
4. **중첩 라우팅(Nested Routing)**
- 부모 경로(레이아웃) 안에서 자식 컴포넌트를 특정 위치에 렌더링할 수 있도록 도와주는 라우팅 방식
- 한 페이지 내에서 공통 레이아웃(네비게이션, 사이드바 등)을 유지하면서 특정 부분만 변경할 때 유용
5.  **Outlet**
- 중첩된 라우트를 렌더링할 때 사용
예: Layout 컴포넌트에서 <Outlet />을 사용하면 하위 컴포넌트가 그 자리에 렌더링됨
6. **useNavigate**
- 프로그래밍적으로 페이지 이동을 할 때 사용
- navigate('/home')처럼 사용하여 특정 경로로 이동 가능
7. **useParams**
- 동적인 URL을 관리할 때 사용
예: /user/:id → useParams()를 사용하면 id 값을 가져올 수 있음
8. **useLocation**
- 현재 URL 경로 정보를 가져올 때 사용

## Debounce
- debounce는 연속적인 함수 실행을 방지하고 마지막 호출만 실행되도록 지연하는 기능
API 요청, 입력 필터링, UI 최적화 등에 활용됨.
- 직접 구현하거나 lodash.debounce를 사용할 수 있음.
- debounce는 마지막 호출 이후 일정 시간이 지나야 실행됨.
- UI 코드가 모든 이벤트를 처리할 필요가 없고 서버로 전송되는 API 호출 수도 줄어들어 성능 향상에 도움이 됨.

## Swiper 모듈
`https://swiperjs.com/react`
Swiper는 터치 기반의 슬라이드(캐러셀, Carousel) 라이브러리로, 모바일 및 웹에서 반응형 슬라이드를 쉽게 구현할 수 있도록 도와주는 오픈소스 라이브러리.
주로 React, Vue, Angular 같은 프레임워크뿐만 아니라 Vanilla JavaScript에서도 사용할 수 있다.
💡 특히, 터치 스와이프(swipe) 지원이 강력해서 모바일 환경에서 부드러운 UX를 제공할 수 있음

## Firebase
Firebase는 Google에서 제공하는 **클라우드 기반 백엔드 서비스(BaaS, Backend-as-a-Service)**로, 모바일 및 웹 애플리케이션 개발을 쉽게 할 수 있도록 다양한 기능을 제공하는 플랫폼
1. Firebase의 장점
- 서버 없이도 백엔드 기능 사용 가능 → 풀스택 개발이 쉬워짐
- Google 클라우드 인프라 활용 → 안정적인 서비스 제공
- 빠른 개발 가능 → API 및 SDK 지원으로 개발 속도 향상
- 무료 요금제 제공 → 기본적인 기능을 무료로 사용 가능

2. Firebase의 단점
- NoSQL 구조라 복잡한 쿼리 처리 어려움
- 무료 요금제에서 일부 기능 제한 있음
- Google 생태계 의존도가 높아지는 문제

## localStorage
localStorage는 브라우저의 저장소로, 데이터를 로컬에 영구적으로 저장 가능하며, 브라우저를 닫거나 컴퓨터를 재부팅해도 데이터가 유지된다.
**특징**
1. localStorage는 문자열 기반으로 영구 저장하는 브라우저 저장소
2. 5MB 제한이 있으며, 보안에 주의해야 한다.
3. 객체 저장 시 JSON.stringify() & JSON.parse() 사용
4. 데이터 삭제 시 removeItem() 또는 clear() 활용
5. sessionStorage는 브라우저 탭이 닫히면 데이터가 사라짐 (일시적 데이터 저장에 적합)
```js
// 객체 저장
const user = { name: "sharon", age: 25 };
localStorage.setItem("user", JSON.stringify(user));
// 객체 불러오기
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // "sharon"
console.log(storedUser.age); // 25
```