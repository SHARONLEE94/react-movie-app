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