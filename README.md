<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=9FC700&height=150&section=header" />

# 🌿 Buddle 🌿 </br> 교내 장애인 학우를 위한 봉사 활동 장려 웹 개발  
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/tailwindcss-a5f3fc?style=for-the-badge&logo=tailwindcss&logoColor=black"/>

# 🖥️ 개발 배경 🖥️
**마이크로 자원봉사**에 관한 접근성 향상을 통한 봉사 인식 변화를 도모하고, <br/>
봉사의 생활화를 통한 선한 영향교내 장애인 학우를 위한 **봉사 활동 장려 웹 서비스**의 개발

NFT를 통한 리워드 차등 지급으로 봉사에 대한 참여도를 향상시켜 종합적으로는 교내 장애인 학우를 위한 봉사 활동 장려 웹 개발을 하게 됐습니다.

# 💚Team FE Members💚
<img width="200px" src="https://github.com/BuddlIes/FrontEnd/assets/76727686/3739d3ed-bfc2-4975-8007-41be5f2ab6d8"/> | <img width="200px" src="https://github.com/BuddlIes/FrontEnd/assets/76727686/ce8475c6-f28c-40d5-8ef8-be945ffea397"/> | 
|:-----:|:-----:|
|[김유림](https://github.com/Yurim222)|[한도연](https://github.com/wsd9489)|[박민서 (Lamp)](https://github.com/FpRaArNkK)|
|프론트엔드 개발 및 PM 겸임 👩‍💻|프론트엔드 개발 및 팀장 겸임 🧑‍💻|
</div>


<div align="center">
  
# ✍️ 주요 기능 ✍️
</div>

### ☘️ 봉사자 구인 및 도움 요청 글 작성 기능
### ☘️ 봉사 신청 기능 및 댓글 기능
- 봉사 활동 신청 버튼 클릭시 신청 가능
- 추후 socket.io를 이용한 채팅 기능으로 발전시킬 예정
### ☘️ 봉사 활동 현황에 따른 리워드 차등 지급 기능
- NFT를 이용하여 봉사 활동 점수에 따라 리워드를 차등으로 지급 가능
## 

<div align="center">
  
# 📜 Rules 📜

</div>

## Navigation
1. [Branch Rules](#branch-rules)
2. [Commit Rules](#commit-rules)

## Branch Rules
### Main Branch
#### 브랜치 이름 : `Main` <br>
최종 배포가 가능한 상태만을 관리하는 브랜치입니다. <br>
배포 이력을 관리하기 위한 브랜치이므로 배포 이전까지는 병합하지 않을 예정입니다.

### Develop Branch
#### 브랜치 이름 : `Develop` <br>
배포 버전을 개발하는 브랜치입니다. <br>
이 브랜치를 기반으로 기능을 추가하고 버그 없이 안정적으로 배포가 가능한 상태인 경우만 `Main branch`에 병합합니다.

## Commit Rules
[참고자료](https://beomseok95.tistory.com/328) <br><br>
일관성 없는 커밋 메시지는 어떤 작업을 했는지 명확하게 알아볼 수 없거나 추후 커밋 히스토리를 파악하는 데 어려움을 줄 수 있습니다. <br>
반대로 네이밍(naming)을 명시적이고 규칙적으로 작성하고 해당 커밋에 대한 내용을 잘 작성한다면 코드를 일일히 분석하지 않아도 해당 커밋의 내용을 알아볼 수 있어요! 👀

1. 제목과 본문을 `빈 행으로 구분` 합니다.
2. 제목을 `50글자 이내` 로 제한합니다.
3. 제목의 첫 글자는 `대문자` 로 작성합니다.
4. 제목의 끝에는 `마침표를 넣지 않습니다`.
5. 제목은 `명령문` 으로 작성하고 `과거형을 사용하지 않습니다`.
6. 본문의 `각 행은 72글자 내로 제한`합니다.
7. 어떻게 보다는 `무엇` 과 `왜` 를 설명합니다.

### Commit Message 구조
헤더는 필수이며, 범위(scope), 본문(body), 바닥글(footer)은 선택사항입니다.

```
<type>(<scope>): <subject>          -- 헤더
<BLANK LINE>
<body>                              -- 본문
<BLANK LINE>
<footer>                            -- 바닥글
```

`type`은 해당 커밋의 성격을 나타내며 아래 중 하나여야 합니다.
```
Feat : 새로운 기능에 대한 커밋
Fix : 버그 수정에 대한 커밋
Build : 빌드 관련 파일 수정에 대한 커밋
Chore : 그 외 자잘한 수정에 대한 커밋
Ci : CI관련 설정 수정에 대한 커밋
Docs : 문서 수정에 대한 커밋
Style : 코드 스타일 혹은 포맷 등에 관한 커밋
Refactor :  코드 리팩토링에 대한 커밋
Test : 테스트 코드 수정에 대한 커밋
```

`body`는 본문으로 헤더로 표현할 수 없는 상세한 내용을 적습니다.
헤더로 표현이 가능하다면 생략 가능합니다.
`footer`는 바닥글로 어떤 이슈에서 왔는지 같은 참조 정보들을 추가하는 용도로 사용합니다.
예를 들어 특정 이슈를 참조하려면 close #1 과 같이 추가하면 됩니다.
close는 이슈를 참조하면서 main 브랜치로 푸시될 때 이슈를 닫게 됩니다.

---



<img src="https://capsule-render.vercel.app/api?type=waving&color=9FC700&height=150&section=footer" />
