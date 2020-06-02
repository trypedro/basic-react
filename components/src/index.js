import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className='ui container comments' style={{padding: '1rem'}}>

            <ApprovalCard>
                <h4>Warning!</h4>
                Are you sure you want to do this?
            </ApprovalCard>

            <ApprovalCard> 
                <CommentDetail
                    author='Sam'
                    timeAgo='Today at 4:45PM'
                    avatar={faker.image.avatar()}
                    content='Nice blog, liked!'
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author='Alex'
                    timeAgo='Today at 2:00AM' 
                    avatar={faker.image.avatar()} 
                    content='I dont know what to think.' 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author='Jane' 
                    timeAgo='Yesterday at 2:30AM' 
                    avatar={faker.image.avatar()} 
                    content='Ok, but I have some questions about it.' 
                />
            </ApprovalCard>
        </div>
    );
};


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);