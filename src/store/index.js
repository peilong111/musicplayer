import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        musicList:[],
        currentPlayIndex:0
    },
    mutations: {
      selectMusic(state,mes){
        // console.log(musicList)
        state.musicList = mes.musicList
        
        state.currentPlayIndex = mes.index
        // console.log(mes.index)
      },
    //   上一首
      last(state){
    //     console.log("上一首")
    //     console.log(state.currentPlayIndex)
        state.currentPlayIndex--
      },
    //   下一首
      next(state){
        // console.log("下一首")
        state.currentPlayIndex++
      }
    }
  })

export default store