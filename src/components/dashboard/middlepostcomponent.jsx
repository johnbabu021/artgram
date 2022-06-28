import '../../styles/dashboard/posts.css'

export default function MiddlePostComponent() {
  return(
     <section className="middle__posts">
<div  className="create__posts">
  <div  className='post__inputs'>
<img src="logo512.png"/>
<input  placeholder='share your thoughts '/>
  </div>
  <div  className='upload__types'>
    <div  className='photo'>
    <img src="pht.svg"/>  photo
    </div>
    <div  className='post__submit'>
      <button>post</button>
    </div>

  </div>
  </div>



  </section>);
}
