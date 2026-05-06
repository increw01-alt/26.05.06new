# 상품권 상담 랜딩 (정적 템플릿)

이 폴더는 **상품권 구입/판매(매입) 상담 유도용** 정적 웹사이트 템플릿입니다.  
구글/네이버 검색 노출을 위한 기본 SEO 설정(메타/구조화데이터/사이트맵/robots)을 포함합니다.

## 실행 방법

- `index.html`을 더블클릭해서 브라우저로 열면 됩니다.
- (선택) 로컬 서버로 보고 싶다면 VS Code/Cursor의 Live Server 같은 확장 기능을 사용하세요.

## 파일 구성

- `index.html`: 메인 페이지(업종 문구/섹션/연락처/구조화데이터 포함)
- `styles.css`: 전체 스타일(반응형/FAQ 포함)
- `script.js`: 테마 토글(라이트/다크), 푸터 연도 표시
- `assets/logo.svg`, `favicon.svg`: 로고/파비콘
- `robots.txt`: 크롤러 안내 + 사이트맵 위치
- `sitemap.xml`: 사이트맵(배포 도메인으로 수정 필요)

## 빠른 커스터마이징

- 사이트 이름: `index.html`에서 “상품권 상담센터” 텍스트 변경
- 연락처:
  - 전화: `tel:+821000000000`
  - 이메일: `mailto:hello@example.com`
- 배포 도메인 반영(중요):
  - `index.html`의 `canonical`, `og:url`, `og:image`의 `https://example.com/` 를 실제 도메인으로 변경
  - `robots.txt`, `sitemap.xml`의 `https://example.com/` 를 실제 도메인으로 변경
- 네이버/구글 서치콘솔:
  - 배포 후 서치콘솔 등록 → 사이트맵 제출 → 소유권 메타태그(필요 시) `index.html`에 추가
