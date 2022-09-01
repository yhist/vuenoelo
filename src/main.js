import { createApp } from 'vue'
import App from './App.vue'
// 라우터 연결
// 파일의 확장자가 .js라서 생략했다.
import router from './router/index.js'

// vuex를 연결
import store from './store/store.js'

createApp(App).use(router).use(store).mount('#app')
// vue가 실행이 될때 제일 처음 불러서 실행하는 .js파일입니다.
// Entry Point 역할을 합니다.
// vue 어플리케이션에서 모두 참조가 됩니다.
// router, vuex를 기본적으로 많이 추가합니다.
