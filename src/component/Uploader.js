import React, { useState } from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

const Uploader = () => {

    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState('No selected file');
  return (
    <div>
        <form
        onClick={()=> document.querySelector(".file-input").click()}
        >
            <input type="file" accept='image/*' className='file-input' hidden
            onChange={({ target : { files } }) => {
                files[0] && setFileName(files[0].name);
                if(files){
                    setImage(URL.createObjectURL(files[0]));
                }
            }}
            />
            {image ? 
            <img src={image} width={60} height={60} alt={fileName} />
            :
            <>
            <MdCloudUpload color='#1475cf' size={60}/>
            <p>Browse File to upload</p>
            </>
        }
        </form>
    </div>
  )
}

export default Uploader