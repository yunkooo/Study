# CSS
2022/07/02

## Cascading Style Sheet

```css
/* 선택자 */
selector {
    property : value;
    /* 선언부 */
}
```
- link 로 css 연결  
- style 태그  
- 인라인으로 삽입(좋지 않은 방법)
---
## Selector 선택자


- ### Type Selector
>일반 태그에 꾸미기
- ### Class Selector
>.box  
여러개의 클래스를 갖을수있다.    
`<div class ="box-0 box-1 box-2">` <strong>띄어쓰기 필수</strong>  
`.box1.box2`-`box1이자 box2` 띄어쓰기가 없을 경우 하나로 취급 

- ### ID Selector  
>`<div id=box>`  
`#box`
  
- 자식 선택자  
`parent > child`
- 자손 선택자  
`parent공백descendants`  
- 형제 선택자s  
`?? ~ !!` : ?? 다음부터 !!까지  
`??+!!` : ?? 다음에 오는 !! 태그