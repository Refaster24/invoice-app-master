import { createSlice } from '@reduxjs/toolkit'
import data from './data.json'


const filterSlice = createSlice({
    name : 'filter',
    initialState:{
        globalState:data,
        filterState:[...data]
    },
    reducers:{

        draft(state){
            const filter =()=>{ 
                const filtering = []
                
                for(let i=0;i<state.globalState.length;i++){
                    if(state.globalState[i].status === 'draft'){
                        filtering.push(state.globalState[i])
                    }
                }
                return filtering
            }
            return {...state,filterState:filter()}
        },

        paid(state){
            const filter =()=>{ 
                const filtering = []
                
                for(let i=0;i<state.globalState.length;i++){
                    if(state.globalState[i].status === 'paid'){
                        filtering.push(state.globalState[i])
                    }
                }
                return filtering
            }
            return {...state,filterState:filter()}
        },
        pending(state){
            const filter =()=>{ 
                const filtering = []
                
                for(let i=0;i<state.globalState.length;i++){
                    if(state.globalState[i].status === 'pending'){
                        filtering.push(state.globalState[i])
                    }
                }
                return filtering
            }
            return {...state,filterState:filter()}
        },
        all(state){
            return {...state,filterState:state.globalState}
        },
        newInvoice(state,action){
            state.globalState.push(action.payload)
            state.filterState.push(action.payload)
        },
        deleteInvoice(state,action){
            const global = state.globalState.filter(invoice=>{
                return invoice.id !== action.payload.id
            })
            const filter = state.filterState.filter(invoice=>{
                return invoice.id !== action.payload.id
            })
            return {...state,filterState:[...filter],globalState : [...global]}
        },
    }
})

export const {draft,paid,pending,all,newInvoice,deleteInvoice,toPaid} = filterSlice.actions
export default filterSlice.reducer