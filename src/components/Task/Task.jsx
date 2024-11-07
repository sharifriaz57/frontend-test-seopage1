import { useContext, useRef } from 'react';
import { AppContext } from '../../context/AppContext';
import './task.css';

const Task = () => {
    const { appState, setAppState } = useContext(AppContext);

    const attachmentRef = useRef(null);

    const handleClick = () => {
        attachmentRef.current.click();
    }

    const handleAttachment = (e) => {
        const { files } = e.target;

        if (files.length > 0) {
            setAppState(prev => ({ ...prev, isModalOpen: true, originalFiles: files, attachments: [] }))
            const filesArray = Array.from(files);
            const fileData = [];

            filesArray.forEach(file => {
                const reader = new FileReader();

                reader.onloadend = () => {
                    const extension = file.name.split('.').pop();
                    const type = file.type === 'application/pdf' ? 'pdf' : 'image';
                    fileData.push({ type: type, src: reader.result, name: file.name, extension: extension });

                    if (fileData.length == filesArray.length) {
                        setAppState(prev => ({ ...prev, attachments: fileData }));
                    }
                };
                reader.readAsDataURL(file);
            });
        }

    }

    return (
        <div className='task'>
            <div className="task-header">
                <div className="task-header-left">
                    <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="" className="client-img" />
                    <div className='client-title'>Client Name</div>
                </div>
                <div className="task-header-right">
                    <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="" className="assigned-to-img" />
                    <div className='assigned-to-title'>Client Name</div>
                </div>
            </div>

            <div className="task-body">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="stack-icon" viewBox="0 0 16 16">
                        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z" />
                        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z" />
                    </svg>
                </span>

                <div className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur at fugiat laboriosam veritatis libero, sequi quis minus voluptates tenetur dolores tempore, nesciunt in totam molestiae iure. Error perspiciatis quae laborum?</div>

                <div className='body-right'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="task-icon" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
                    </svg>

                    <span>1/2</span>
                </div>
            </div>

            <div className="task-footer">
                <div className="users">
                    <img src="http://placebeard.it/250/250" alt="" className='user-img' />
                    <img src="http://placebeard.it/250/250" alt="" className='user-img' />
                    <div className='user-img'>12+</div>
                </div>

                <div className="footer-right">
                    <div className='footer-right-item'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='chat-icon' viewBox="0 0 16 16">
                            <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356" />
                            <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0" />
                        </svg>

                        <span>15</span>
                    </div>
                    <div className='footer-right-item attachment' onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='attachment-icon' viewBox="0 0 16 16">
                            <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
                        </svg>

                        <span>{appState.attachments.length}</span>
                        <input type="file" ref={attachmentRef} multiple accept='.jpg, .jpeg, .png, .gif, .pdf'
                            className='attachment-input'
                            onChange={handleAttachment}
                        />
                    </div>
                    <div className='footer-right-item'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='calendar-icon' viewBox="0 0 16 16">
                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                        </svg>

                        <span>30/12/2024</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task