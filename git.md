# Git

Git : 분산 버전 관리 시스템 VCS(version control system)  
Github : git의 데이터를 저장하는 서버  

origin: 원격 서버의 이름   
branch : 독립된 작업공간
      
* git init  
　git 폴더 생성  
　local repository 생성 
* git clone  
　remote repository의 파일을 local repository로 복사
* git pull  
　remote repository의 파일을 local repository에 병합
* git add  
　git add . 현재 디렉토리 모든 변경사항 추가  
　git add ./~~~/~~~~/~~~~~ 특정 디렉터리 변경사항 추가  
　git add ./~~~/~~~~/file.md 특정 파일 변경사항 추가  
　git add .p 변경된 사항을 확인하면 추가  
* git status  
　상태를 확인  
* git commit -m "commit 내용"  
　add 한 파일을 local repository에 저장  
* git remote add origin {remote repository 주소}  
　local repository에 remote repository 연결
* git push  
　local repository를 remote repository에 업로드

참고  
https://victorydntmd.tistory.com/72?category=682764  
https://evan-moon.github.io/2019/07/25/git-tutorial/  
https://tagilog.tistory.com/377  
https://www.zerocho.com/  

오류 정리  
----------------------------------------------------------
* error: src refspec master does not match any  
error: failed to push some refs to  
　원격 저장소와 로컬 저장소에 상태가 달라서 생기는 오류라고 추정  
　먼저 pull을 한 다음에 push  
* fatal: couldn't find remote ref master  
　저장소를 새로 만들었을경우 기본 브랜치가 'main'으로 되어있는경우가있다.  
　'main' -> 'master'변경  
* commit을 하지않으면 push를 하여도 아무런 변화는 없다.

* 정리  
git init을 하므로써 내 컴퓨터 안 폴더에 로컬 저장소를 생성한다.  
remote를 통해 로컬 저장소와 원격 저장소를 연결해준다.  
파일을 생성 수정 변경을 하여 add를 통하여 로컬저장소에 변경 내용을 추가한다.  
commit을 통하여 변경된 내용을 로컬 저장소에 저장한다.  
push를 통하여 원격 저장소에 업로드한다.  
pull을 통해 원격저장소의 내용을 로컬 저장소에 병합 할 수 있다. 
clone을 통해 원격저장소의 소스를 로컬저장소에 복사 할 수 있다.