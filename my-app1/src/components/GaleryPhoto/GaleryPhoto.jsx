import react, { useEffect, useState } from 'react'




const GaleryPhoto = (props) => {

    const [file, setFile] = useState(null);

    useEffect(() => {
        setFile()
    }, [props])

    const fileHandler = (e) => {
        setFile(e.target.files[0])
    }



    return (
        <div>

            <img src={file ? URL.createObjectURL(file) : null} alt={file ? file.name : null} />
            <input type={'file'} onChange={fileHandler} />
        </div>
    );
}
export default GaleryPhoto