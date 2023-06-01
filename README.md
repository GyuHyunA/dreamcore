# 디지털콘텐츠디자인학과 졸업전시회

### University of Ulsan

## Digital Contents 24th Graduation Exhibition

---

<br>

# 실행 방법

> npm start

---

<br>
  
# 패키지 설치
## 기존버전으로 설치
> npm i
## 최신버전 업데이트 후 설치
> npm ci
---
<br>

# 깃허브 배포

## 1. 깃허브 파일 수정

### index.js

```js
<React.StrictMode>
  {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */} //해당 부분 주석 제거
  <BrowserRouter>
    {" "}
    //해당 부분 주석
    <App />
  </BrowserRouter>
</React.StrictMode>
```

<br>

### package.json

```json
"__homepage":"https://gyuhyuna.github.io/dreamcore" //__제거
```

<br>

## 2. 깃허브 빌드
### build
>npm run build
### deploy
>npm run deploy

<br>


# 업데이트 정보

버전 정보를 알고 싶으면 [이곳](https://quartz-license-30e.notion.site/DREAMCORE-04815b77b745471cb945ff571b10b1ce)을 클릭하세요
