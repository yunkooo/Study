# HTML
2022/03/12

- 태그 속성  
`<p attr="value"></p>`  
속성은 추가적인 정보를 제공
 
- 열린 태그 - 닫힌 태그  
`<p>내용</p>`  

- 제목  
`<h1~6>` 크기 1~6 
- 문단 구분   
`<p>`   
  
- 강조 Emphasis  
`<em>` <em>강조</em>  
`<strong>` <strong>강조</strong>

- 줄바꿈   
`</br>`

- Anchor 태그  
`<a></a> `  
현위치에서 다른 위치로 이동  
필수 href 속성 -hypertext reference(주소값)  
1. 웹 url  
2. 페이지내 이동 (id로 이동 가능) 
3. 상대경로, 절대경로  
target 속성   
target ="_blank" 새로운탭에서 열기  
`<a href="www.naver.com">네이버</a> `웹 주소 작성  
`<a href="./index.html">index</a>` 상대 주소 작성  
`<a href="#hello"> section </a>` 섹션으로 이동  
`<a href="mailto:ooo@naver.com">` 메일쓰기 </a> 메일쓰기  
`<a href="tel:01000000000">` 전화걸기 </a> 전화걸기  

- image 태그  
`<img src="#" alt="">`  
src - source 이미지 사진  
alt - alternative text 대체텍스트  

- 리스트  
`<ol>` ordered list 순서가 중요한 리스트  
`<ul>` unordered list 순서가 중요하지않은 리스트</br></br>
`<li>` list item 리스트 항목  
`<ul>`과 `<ol>`의 자식 요소는 무조건 `<li>`만 가능
- 정의 리스트 Description List  
`<dl>`  
용어를 정의할때 사용하는 정의 리스트  
key-value로 정보를 제공할때  
`<dt>` description term 키값  
`<dfn>` 정의  
`<dd>` description data   
`<dl>`태그 안에는 `<div><dt><dfn><dd>` 만 사용가능하다.

- 인용  Quotations    
`<blockquote>인용 내용</blockquote>`  
`<q></q>`태그  
`<cite></cite>` 인용문에서 출저를 뜻한다.


- Form 태그 
`<form action="API 주소" method="GET/POST"></form>`   
사용자로부터 인풋(input)을 받기 위한 태그</br></br>
action="API주소"  
method="GET/POST"  

- input 태그   
`<input type=" ">`  
type="" 속성 작성해야한다.  
닫는 태그가 없다.  </br></br>
placeholder="" 속성 빈칸에 글씨를 넣는다.  
maxlength="" 최대글자수 제한  
minlength="" 최소글자수 제한  
required 필수적으로 입력해야하는 조건  
disabled 입력 금지  
value="" 기본값  </br></br>
type="number"일 때 min="숫자" 입력 최소값 max="숫자" 입력 최대값  
type="file" 일 경우 파일 확장자 제한 accept=".png,.jpg"  

    - label 태그  
    `<label for="id">`  
    폼 양식에 이름을 붙이는 태그  
    for="누구" 누구를 위한 라벨인가? = inputID  

    - radio 버튼  
    `<input type="radio" name="같은 그룹" value="" id="">`  
    name 속성을 동일하게 넣어줘야 그룹된다.  
    value 속성 - 선택된 값은 구분  

    - checkbox 버튼  
    ```<input type="checkbox" name="같은 그룹" value="" id="">```  

- select 태그  
```
<select name="">
    <optio value=""></option>
</select>
```
multiple 속성을 추가시 다수 선택 가능
</br></br>

- textarea 태그  
여러줄 입력 받을때 사용  
`<textarea><textarea> `

- button 태그  
`<button type=""> </button>`


- 테이블  
`<table></table` 테이블 만드는 태그  
`<thead>` 테이블 head  
`<tbody>` 테이블 body  
`<th>` 테이블 헤더  
`<tr>` 테이블 행을 만드는 태그  
`<td>` 테이블 열을 만드는 태그  </br></br>
scope="row"  행의 헤더  
scope="col"  열의 헤더  
rowspan 세로 병합  
colspan 가로 병합  

```
<table>
    <tr>
        <th>테이블 헤더<th>
        <td>테이블 데이터</td>
    </tr>
</table>   
```
- 미디어 파일  
    - 오디오 태그  
    `<audio src=""> </audio>`  
controls 속성  
autoplay 자동재생    
loop 반복재생  

    - 비디오 태그  
    `<video src=""></video>`  
    controls

- iframe 태그  
`<iframe>`
---
## 2022/06/29

`<!DOCTYPE html>` - Documet type 

```html
<!DOCTYPE html>

<html>
    <head>
        문서의 정보
    </head>
    <body>
            <h1>제목</h1>
            <p>문단</p>
    </body>
</html>
```

- title  
`<title> 문서의 대제목</title>`  
검색 최적화에 중요  
페이지에 맞게 변경

- link

- style 태그  
html 문서 내에 CSS코드를 작성할때 사용

- script 태그  
body 내에서 마지막에 작성 

- meta 태그   
`<meta name="" conetent="">`  
viewport

이동할때 버튼은 anchor 태그로 작성  
이미지 `<img scr="" alt="">`  
필요없는 사진은 css로 삽입 가능

- Pagination
페이지 버튼

- WAI-ARIA












---
공부 출처 - [김버그의 HTML&css는 재미있다.](https://edu.goorm.io/lecture/20583/%25EA%25B9%2580%25EB%25B2%2584%25EA%25B7%25B8%25EC%259D%2598-html-css%25EB%258A%2594-%25EC%259E%25AC%25EB%25B0%258C%25EB%258B%25A4)









