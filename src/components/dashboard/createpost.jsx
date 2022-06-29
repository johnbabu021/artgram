import '../../styles/dashboard/createpost.css'

export default function CreatePost(){
    return(
        <div className="create__posts">
        <div className="post__inputs">
          <img src="logo512.png" />
          <input placeholder="share your thoughts " />
        </div>
        <div className="upload__types">
          <div className="photo">
            <img src="pht.svg" /> Photo
          </div>
          <div className="post__submit">
            <button>post</button>
          </div>
        </div>
      </div>
    )
}