import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './modal.css';

const Modal = ({ title }) => {
    const { appState, setAppState } = useContext(AppContext);
    console.log(appState.attachments);

    const closeModal = () => {
        setAppState(prev => ({ ...prev, isModalOpen: false }))
    }

    const uploadFiles = async () => {
        const formData = new FormData();

        for (let i = 0; i < appState.originalFiles.length; i++) {
            formData.append('files[]', appState.originalFiles[i]);
        }
        console.log('form', formData);


        fetch('http://localhost:8000/api/file-upload', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(res => {
                console.log(res.message);
                setAppState(prev => ({ ...prev, isModalOpen: false, originalFiles: [], attachments: [] }))
                alert(res.message);
            })
            .catch((error) => {
                alert(error.error);
            });
    }

    return (
        <div className="modal" style={{ display: appState.isModalOpen ? 'block' : 'none' }}>
            <div className="modal-header">
                <div className='title'>{title}</div>

                <div onClick={closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="close-icon" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                </div>
            </div>

            <div className="modal-body">
                <div className="files">
                    {appState.attachments.length > 0 && appState.attachments.map((attch, i) => (
                        <div key={i} className='file-preview'>
                            {attch.type == 'pdf'
                                ? <>
                                    <iframe src={attch.src} className='file'></iframe>
                                    <div className='extension'>.{attch.extension}</div>
                                </>
                                : <>
                                    <img src={attch.src} alt={attch.name} className='file' />
                                    <div className='extension'>.{attch.extension}</div>
                                </>
                            }
                        </div>
                    ))}
                </div>
            </div>

            <div className="modal-footer">
                <button className='btn btn-upload' onClick={uploadFiles}>Upload</button>
            </div>
        </div>
    )
}

export default Modal