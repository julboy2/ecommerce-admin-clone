https://www.youtube.com/watch?v=5miHyP6lExg&t=2s
<br />
4:28:00
<br /><br />

### 공유 라이브러리 UI : 세팅도 참고할것
https://ui.shadcn.com/docs/installation
<br />
### 인증 , 권한 , 소셜로그인
https://dashboard.clerk.com/
<br />
https://clerk.com/docs/nextjs/get-started-with-nextjs : next.js 세팅 
<br />
### 파일업로드
https://cloudinary.com/
<br />
설명 : https://next-cloudinary.spacejelly.dev/
<br />
<br />
#### prisma 설치
npm install -D prisma <br />
npm install @prisma/client <br />
npx prisma init : prisma 폴더 생성됨 <br />
** npx prisma migrate reset  : 데이터 모두 지울때 주의할것 **
<br />

#### plenetscale 세팅방법
https://planetscale.com/
<br />
create 선택해서 서비스생성
![image](https://github.com/julboy2/ecommerce-admin-clone/assets/6093105/d35e9d34-29af-4192-8672-7ac196170ca8)

![image](https://github.com/julboy2/ecommerce-admin-clone/assets/6093105/adea84f9-09fb-4501-a4d2-e4498ecc3ded)
<br />
Ready to comment to your database? 클릭해서 초기 비밀번호세팅
<br />
<br />
![image](https://github.com/julboy2/ecommerce-admin-clone/assets/6093105/e36750e4-d99d-43b0-b18a-8469386c6c19)

<br />
Create password  클릭
<br />
<br />
prisma/schema.prisma 에 있는 model 을 orm 에적용 이명령후부터는 인텔리센스가 동작한다. <br />
> npx prisma generate
<br />
prisma/schema.prisma 에 있는 model 을 db 에적용 <br />
> npx prisma db push
<br />

#### 단축키
- Ctrl + shift + p + reload window (visual studio 재부팅 )
