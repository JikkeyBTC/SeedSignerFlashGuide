# JikKey SeedSigner OS 설치 가이드

정적 HTML 가이드입니다. 빌드 없이 GitHub Pages에서 그대로 서비스됩니다.

| 파일 | 내용 |
| --- | --- |
| `index.html` | microSD 준비 → OS 이미지 다운로드 → Imager 설치 → 쓰기 → 부팅 확인 |
| `verify.html` | GPG 서명 + SHA256 해시로 이미지 무결성 검증 (Windows) |
| `assets/css/styles.css` | jikkey.com과 같은 디자인 토큰 (흰 바탕, `#f5f5f7` 밴드, `#0071e3` 블루) |
| `assets/js/main.js` | 단계 내비, 복사 버튼, 버전 치환, 이미지 확대 |

## SeedSigner 새 버전이 나오면

`assets/js/main.js` 맨 위 `DEFAULT_VERSION` 값만 바꾸면 두 페이지의 파일 이름과 명령어가 모두 바뀝니다.
`data-version-text="...{v}..."` 속성이 붙은 요소가 치환 대상입니다.
검증 페이지에서 방문자가 직접 다른 버전을 입력할 수도 있습니다.

## 로컬 미리보기

```
python3 -m http.server 8000
```
