import React, { useState } from 'react'
import ResourceList from './ResourceList'
import UserList from './UserList'

const App = () => {

    const [ resourse, setResourse ] = useState('posts')

    return (
            <div className='ui container'>
                <UserList />
                <div>
                    <button onClick={() => setResourse('posts')} className='ui button primary'>Posts</button>
                    <button onClick={() => setResourse('todos')} className='ui button green'>Todos</button>
                </div>

                <ResourceList resource={resourse}/>
            </div>
        )
}


export default App