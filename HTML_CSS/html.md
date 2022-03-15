# HTML
2022/03/12

```
<p>내용</p>
```
열린 태그 - 닫힌 태그

```<h1~6>``` 제목 1~6  
```<p>``` 문단  
  
강조 Emphasis  
```<em>```  
```<strong>``` 

</br> 줄바꿈

```<a> ```Anchor태그  
현위치에서 다른 위치로 이동  
필수 href 속성 -hypertext reference(주소값)  
target 속성   
target ="_blank" 새로운탭에서 열기  
```<a href="www.naver.com">네이버</a> ```웹 주소 작성  
```<a href="./index.html">index</a>``` 상대 주소 작성  
```<a href="#hello"> section </a>``` 섹션으로 이동  
```<a href="mailto:ooo@naver.com">``` 메일쓰기 </a> 메일쓰기  
```<a href="tel:01000000000">``` 전화걸기 </a> 전화걸기  

```<img src="#" alt="">``` image태그  
src - source 이미지 사진  
alt - alternative text 대체텍스트  

리스트  
```<ul>``` ordered list 순서가 중요한 리스트  
```<ol>``` unordered list 순서가 중요하지않은 리스트

```<li>``` list item 리스트 항목
```<ul>```과 ```<il>```의 자식 요소는 무조건 ```<li>```만 가능

```<dl>``` 정의 리스트 Description List  
용어를 정의할때 사용하는 정의 리스트  
key-value로 정보를 제공할때  
```<dt>``` description term 키값  
```<dfn>``` 정의  
```<dd>``` description data   
```<dl>```태그 안에는 ```<div><dt><dfn><dd>``` 만 사용가능하다.

인용  Quotations  
```<blockquote>인용 내용</blockquote>```  
```<q></q>```태그  
```<cite></cite>``` 인용문에서 출저를 뜻한다.


Form 
```<form action="" method=""></form>```  
사용자로부터 인풋(input)을 받기 위한 태그  

action="API주소"  
method="GET/POST"  

input 태그
```<input type=" "```  
type="" 속성 작성해야한다.  
닫는 태그가 없다.  
placeholder="" 속성 빈칸에 글씨를 넣는다.  
maxlength="" 최대글자수 제한  
minlength="" 최소글자수 제한  
required 필수적으로 입력해야하는 조건  
disabled 입력 금지  
value="" 기본값  
type="number"일 때 min="숫자" 입력 최소값 max="숫자" 입력 최대값  
type="file" 일 경우 파일 확장자 제한 accept=".png,.jpg"  

```<label for="id">``` 폼 양식에 이름을 붙이는 태그

---
공부 출처 - [김버그의 HTML&css는 재미있다.](https://edu.goorm.io/lecture/20583/%25EA%25B9%2580%25EB%25B2%2584%25EA%25B7%25B8%25EC%259D%2598-html-css%25EB%258A%2594-%25EC%259E%25AC%25EB%25B0%258C%25EB%258B%25A4)