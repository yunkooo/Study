css 공부 공간

---
2022/02/05

style 태그 - html 문법이지만 태그안에있는 내용은 css

selector 태그 선택자  
declaration 선언  
property 속성  
value 값

* 우선순위  
id 선택자 - class 선택자 - 태그 선택자
같은 클래스 선택자 일 경우 가장 마지막에 등장하는 선택자

id의 값은 단 한번만 사용해야한다.

---
2022/02/07

화면 전체를 쓰는 태그 - block level element

자신의 크기만큼 쓰는 태그 - inline element

display를 통해 변경가능

div block 태그
span inline 태그

midea쿼리 반응형 디자인  
ex)  

<pre><code>
@media(min-width:800px) {  
    div{  
        display:none;  
    }  
}  
</code></pre>
캐싱 저장하다


<br>

---
 
2022/02/09

캐싱의 예제  
웹브라우저에서 한번 다운로드 받은 파일을 임시저장하여 다음요청에서 다운로드 하지않고 저장되어있는 파일을 사용한다.  

캐시는 빈도가 높고 데이터량이 적은곳에 사용하는것이 좋다.  
