import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)
const App = () => (
    <Provider store={store}>
        <div>
            <AddTodo/>
            <VisibleTodoList/>
            <Footer/>
        </div>
    </Provider>
    
)

export default App;