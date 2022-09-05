import axios from "axios"

const state = {
  mbMenuData: []
}

// 외부 백엔드 연동 또는 .json호출
const actions = {
  // ./data/menu.json호출
  fetchMenu({commit}){
    axios.get('./data/menu.json')
    .then(response => {
      // console.log(response.data)
      // commit('mutation메소트', 자료)
      commit('UPDATE_MENU', response.data)
    })
    .catch(err => console.log(err))

  }
}

// store의 state 업데이트 용도 
const mutations = {
  UPDATE_MENU(state, payload){
    state.mbMenuData = payload

  }
}
const getters = {
  getMbMenuData(state){
    // 여러가지 데이터를 원하는 값으로 정렬하는 과정이 필요
    return state.mbMenuData
  }
}

export {state, actions, mutations, getters};
