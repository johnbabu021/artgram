import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../styles/dashboard/createpost.css";
import callApi from "../../utils/callapi";

export default function CreatePost() {
  const user=useSelector(state=>state.user)
  const [upImage,setUpImage]=useState(null)
  const [caption,setCaption]=useState('')
  const selectImage=()=>{
    if(typeof window==='object'){
   
  
    
        console.log('hi')
       const file=document.createElement('input')
       file.type="file"
       file.accept="image/*"
       file.click()

       file.addEventListener('change',()=>{
        let image=file.files[0]
        setUpImage(file.files[0])
        // const blobURL=window.URL.createObjectURL(file.files[0])
        // const img=new Image()
        // img.src=blobURL()
        // img.onload=function(ev){
        //   window.URL.revokeObjectURL(blobURL)
        // }
        if(image){
          const fileReader=new FileReader()
          fileReader.readAsDataURL(image)
          fileReader.addEventListener('load',(e)=>{
            const upImage=document.querySelector('.image__up')
            upImage.style.display="block"
            console.log(e.target.result)
            upImage.src=e.target.result
          })
        }
       })
       
      
     
    }
   
  }
  const handleCaption=(e)=>{
setCaption(e.target.value)
  }
  const handlePost=async()=>{

    const form = new FormData();
    console.log(upImage,"upImage")
    form.append("caption","fikner")
form.append("image", upImage);
console.log(form.get('image'))


const options = {
  method: 'POST',
   
  headers: {
    // 'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001',
    'Content-Type':"application/x-www-form-urlencoded",
    authorization: `Bearer ${user.token}`
  },
body:form

};


fetch('http://localhost:8000/api/posts/post', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

}
 
 
  return (
    <div className="create__posts">
      <div className="post__inputs">
        <img alt="" src="logo512.png" />
        <input placeholder="share your thoughts " onChange={handleCaption} />
      </div>
      <div className="upload__types">
        <div className="photo" onClick={selectImage}>
          <img alt="" src="pht.svg" /> Photo
        </div>
        <div>
          <img style={{
            display:'none',
            widht:'50px',
            height:'50px',
            objectFit:'contain'
          }} className="image__up" alt="" />
          </div>
        <div className="post__submit">
          <button onClick={handlePost}>post</button>
        </div>
      </div>
    </div>
  );
}
