import { createStore } from 'vuex'
import * as noeloStore from './modules/noeloStore.js'

export default createStore({
  modules: {
    noeloStore
  }
  // 데이터저장 객체
  // state: {},

  // request 호출 : 외부 서버(http 주소) 및 파일(json, xml...) 및 기타 호출
  // Response를 통해서 결과 및 데이터를 받는다.
  // 만약 response의 결과가 (Errpr) 라면 catch처리, mutations에 위탁 
  // 만약 response의 결과가 (Success) 라면 then처리, mutations에 위탁 
  // actions: {},

  // actions로 부터 전달 받은 상황을 실제 처리
  // 여기에서의 처리는 : state를 업데이트 합니다.
  // mutations: {},

  // state(데이터)를 컴포넌트(View영역)에 넣어서 화면갱신한다.
  // 통상 getters는 컴포넌트에서 computed로 받는 경우가 많다.
  // computed는 컴퍼넌트에 내용 갱신시 캐쉬에 대기중이다.
  // getters: { }
})