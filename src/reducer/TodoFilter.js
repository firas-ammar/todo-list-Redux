let tablist=[
                {id:'0', title:'Watch the GodFadher 1',test:false },
                {id:'1',  title:'Watch the GodFadher 2',test:false  },
                {id:'2',  title:'Watch the GodFadher 3',test:false  }
            ]

const TodoFilter = (state = tablist, action) => {

    if(action.type === 'ADD_TODO') {

        return [...state,action.todo]
    }

    if(action.type === 'EDIT_TODO') {

        return state.map((el,index) =>index==action.id? action.todo:el)
       }
    
    if(action.type === 'DELETE_TODO') {

      
        return state.filter((el,index)=>index!=action.cin)
    }
    if(action.type === 'DONE_TODO') {

      
        return state.map((el,index)=> index=== action.id ? {title:el.title,
            test:!el.test} : el)
    }
    return state
}

export default TodoFilter