import {defineStore} from 'pinia'

export const characterStore = defineStore('characterStore',{
    state: ()=>({
        characterName:'Unknown Adventurer',
        pronouns:'None',
        alignment:'None',
        playerName:'Unknown Player'
    }),
    getters:{
      getCharacterName(state){
          return state.characterName
      },
      getPronouns(state){
          return state.pronouns
      },
      getAlignment(state){
          return state.alignment
      },
      getPlayerName(state){
          return state.playerName
      }
    },

    actions:{
        patchCharacterName(newName){
            this.characterName=newName
            console.log(this.characterName)
        },
        patchPronouns(newPronouns){
            this.pronouns=newPronouns
            console.log(this.pronouns)
        },
        patchAlignment(newAlignment){
            this.alignment=newAlignment
            console.log(this.alignment)
        },
        patchPlayerName(newPlayerName){
            this.playerName = newPlayerName
            console.log(this.playerName)
        }

    }
})