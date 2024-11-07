
import Task from '../Task/Task';
import './taskCard.css';

const TaskCard = ({ title, indicator = false, indicatorColor = '#999' }) => {

    return (
        <div className='task-card'>
            <div className="task-card-header">
                <div className='task-card-header-left'>
                    {indicator && <div className='indicator' style={{ backgroundColor: indicatorColor }}></div>}
                    <div className='task-title'>{title}</div>
                </div>
                <div className='task-count'>0</div>
            </div>

            <div className="task-card-body">
                {Array(6).fill().map((_, i) => <Task key={i} />)}
            </div>
        </div>
    )
}

export default TaskCard