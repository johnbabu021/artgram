import {  HeartOutlined, MessageOutlined } from '@ant-design/icons'
import  '../../styles/dashboard/allpost.css'
//HeartFilled

export default function AllPosts(){
    return(
        <div    className='single__post__list'>
<header className='single__post__header'>
    <img    alt="" className='author__profile' src="logo512.png"/>
    <h1>John</h1>
</header>
<section    className='posts__description'>
<p>this is a description not for something crazy fr tw lines f  cmpermise not for something crazy fr tw lines f  cmper</p>
<img    alt=""   className='post__image' src="logo512.png"/>
</section>
<footer className='post__actions'>
<HeartOutlined />
{/* <HeartFilled /> */}
<MessageOutlined />
</footer>

            </div>
    )
}