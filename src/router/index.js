import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  // 웹브라우저 주소에서 #id 이동하는 흔적을 남기지 않는다.
  history: createWebHistory(),
  // 컴포넌트 연결정보
  // routes : [{path:'/글자', name:'path의 별칭', component: 연결시켜줄 컴포넌트}]
  // routes : [{path:'/good', name:'Good', component: Goodview}]
  // 가능하면, route에 사용하는 컴포넌트는 src/view폴더를 생성하고
  // 이자리에 여러 컴포넌트를 포함하는 vue 파일을 생성한다.
  // 가능하면, 파일명은 페이지이름View 라고 생성하기 추천! 
  routes: [
    {
      path:'/',
      name: 'Home',
      component:''
    },
  ]
})

  // router라는 변수를 다른 파일에서 사용하기 위해
  // router 변수를 내보낼 겁니다.
  // 여기서는 2개만 내보낼겁니다.
export default router;