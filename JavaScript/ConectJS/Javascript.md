Javascript  
객체기반의 스크립트 언어


변수  
변경가능한 값을 저장하기 위한 기억 공간

개행문자  

리터럴

자동 세미콜론

선언
var, let, const

원시값 불변   
재할당 해줘야함

엄격한 비교 ===  
느슨한 비교 ==

삼항 연산자

자바스크립트 함수는 무조건 return 해야한다.
다른문법의 void 같은 형식이 없다.

---
scope - 변수 유효범위  
-내부에서 외부로는 접근 가능  
-외부에서 내부로는 접근 불가  

var 로 만든 변수는 함수-단위  
`var varVal = '함수-단위'`  
어디서나 접근이가능해서 위험하다.   
const 로 만든 변수는 블럭-단위   
`const constVal = '블럭-단위'`  

---
호이스팅

---
object는 Object() 혹은 {}를 통해 생성   
object 개체는 key:value 형태, 접근 object.key

객체복사 문제점
```Javascript
let user = {
    name : "kim",
    age : "23",
};

let admin = user;
admin.name ="park";
// user.name 마저 "park"으로 출력
```
object를 복사할때는 대상 전체가 아닌 object 내 주소 값만 복사되서 문제 발생  
객체복사 문제점을 해결하기 위해 얕은복사, 깊은복사가 있다.

얕은복사
1. for문 복사
2. assign()
3. let admin = {...user}  

얕은복사의 문제점 - 객체 내 또 다른 객체가 있다면 복사되지 않음  

깊은 복사
1. for 문
2. json객체 이용 stringfy

---
비교연산자    
`--` 는 단순 값의 같음을 비교  
`===`는ㄴ 자료형까지 같음을 비교

---
## scope
변수 혹은 상수에 접근할 수 있는 범위  
Global scope / Local scope  
Global scope : 전역에 선언되어 어디에서도 접근가능  
Local scope : 특정지역에 선언되어, 해당 지역 내에서만 접근 가능  

```js
let x = 1;
let y = 2;

console.log(x); // 출력 : 1
console.log(y); // 출력 : 2

// Loccal scope
{
    let x = 3;
    let y = 4;

    console.log(x); // 출력 : 3
    console.log(y); // 출력 : 4
}
// Loccal scope
function scope() {
    let x = 5;
    let y = 6;

    console.log(x); // 출력 : 5
    console.log(y); // 출력 : 6
}
console.log(x); // 출력 : 1
console.log(y); // 출력 : 2
```

---
### 3항 연산자  
`변수 = (조건식) ? 참일때 값 : 거짓일때 값`


자바스크립트함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않음]

---
### call by  
* call by value  
값에 의한 복사로 함수 내에서 매개변수 값을 변경 시켜도 영향이 미치지 않음  
원시타입(primitive type)을 매개 변수로 넘겼을때 발생  
```javascript
let a = 1;
let add = function (b) {b = b + 1; }; //callee
add(a); //caller
console.log(a); //출력 : 1
```

* call by reference  
주소에 대한 복사로 함수 내에서 매개 변수 내 값을 변경 시키면 원본 데이터에도 영향을 받음  
객체 타입(object type)을 매개변수로 넘겼을 때 발생
```javascript
var a = { v : 1};
var add = function (b) {b.v = b.v + 1; }; //callee
add(a); //caller
console.log(a.v); //출력 : 2
```
---
```js
//함수 선언식
function add_1(x,y){
    return x+y;
}
// 함수 표현식
const add_2 = function(x,y){
    return x+y;
}
// 화살표 함수
const add_3 = (x,y) => x+y;

const add_4 = add_1;
```

---
### method  
객체에 저장된 값이 함수인 경우, 이를 메서드(method)라고 한다.

this
메서드에서 객체 내부의 속성(property) 값을 접근할수있는 지시자

---
### Number
```js
// 형변환
let us = 1e-6;
us.toString();
String(us);
(us+"");

Number.parseInt("123.123");
Number.parseFloat("123.123");

```

---
### String

```js
// 문자열 검색
let text = "hello, world!!!";

console.log(text.indexOf("l")) //출력 : 2
console.log(text.indexOf("l",3)) // 출력 : 3
console.log(text.lastIndexOf("l",3)) // 출력 : 3

console.log(text.includes("hello"));  //출력 : true
console.log(text.startsWith("ello", 1))'
console.log(text.endsWith("!!!"))';

text.toUpperCase(); //대문자로 만들기
text.toLowerCase(); //소문자로 만들기

```

* 문자열 치환  
-처음만나는 요소는 문자열 치환 : String.replace(origin, change)  
-정규표현식 활용 문자열 치환 : 치환 문자열에 정규 표현식 기입  
 -> /치환문자열/g(전체)i(대소문자 구분 X)

 * 문자열 추출  
 -위치기반 문자열 추출 : String.slice(start,end), String.substring(start,end)  
 -길이 기반 문자열 추출 : String.substr(start, length)

 * 문자열 분할  
 -배열로 문자열 분할 : String.split(Separator,limit)