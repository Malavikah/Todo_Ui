const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
        formData.append('date', date);

        axios.post('http://localhost:8080/api/images/upload', formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error uploading file:', error);
            });
    };

    const handleGetImage = () => {
        // Replace 1 with the actual ID of the image you want to retrieve
        axios.get('http://localhost:8080/api/images/1')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error getting image:', error);
            });
    };

    return (
        <div>
            <h1>Image Upload</h1>
            <input type="file" onChange={handleFileChange} />
            <input type="text" placeholder="Title" onChange={handleTitleChange} />
            <input type="date" onChange={handleDateChange} />
            <button onClick={handleUpload}>Upload</button>

            <h2>Get Image</h2>
            <button onClick={handleGetImage}>Get Image</button>
        </div>
    );
}

export default