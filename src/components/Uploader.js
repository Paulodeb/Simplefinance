import React, { useRef, useState } from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

const Uploader = () => {

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('No selected file');
    const inputRef = useRef();

    const handeDragover = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setFile(file);
        setFileName(file.name);
    }

    if(file) return (
        <div className='d-flex'>
            <div className='d-flex flex-column'>
                {Array.from(file).map((item, index) => <div key={index} className='d-flex align-items-center'>
                    {/* {file.name.split('.').pop() === 'png' || file.name.split('.').pop() === 'jpg' || file.name.split('.').pop() === 'jpeg' ? <AiFillFileImage className='me-2' /> : <MdCloudUpload className='me-2' />} */}
                    <span>{item.name}</span>
                    <MdDelete className='ms-2' onClick={() => setFile(null)} />
                </div>)}
            </div>
        </div>
    )

  return (
    <>
        {!file && (
            <div className='d-flex justify-content-center align-items-center border h-100 w-100'
            onDragOver={handeDragover}
            onDrop={handleDrop}
            >
                <MdCloudUpload color='' className='ms-2 me-2' />
                <h3 className='fs-8 me-2'>Drag and Drop Files to Upload or</h3>
                <input type='file' 
                id='file' 
                className='inputfile'
                multiple
                onChange={(e)=>setFile(e.target.files)}
                hidden 
                ref={inputRef} />
                <button 
                onClick={()=>inputRef.current.click()}
                className='btn btn-primary'>Select Files</button>
            </div>
        )}
    </>
  )
}

export default Uploader