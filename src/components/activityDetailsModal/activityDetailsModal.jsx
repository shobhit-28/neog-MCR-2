/* eslint-disable react/prop-types */
import { useContext } from 'react'
import './activityDetailsModal.css'
import { ActivityReducerContext } from '../../activityReducerContext/activityReducerContext'

export const ActivityDetailsModal = ({ activity }) => {
    const { isAcitivityDetailsModalOpen, setIsAcitivityDetailsModalOpen, setIsEditAcitivityDetailsModalOpen, deleteActivity, addToArchive } = useContext(ActivityReducerContext)

    const editClickHandler = () => {
        setIsEditAcitivityDetailsModalOpen(true)
        setIsAcitivityDetailsModalOpen(false)
    }

    return (
        <>
            {isAcitivityDetailsModalOpen &&
                <div className="activity-detail-modal-container" onClick={() => setIsAcitivityDetailsModalOpen(false)}>
                    <div className="activity-details-modal" onClick={(event) => event.stopPropagation()}>
                        <p className="name">{activity.name}</p>
                        <p className="name">{activity.repeat}</p>
                        <p className="name">{activity.goal}</p>
                        <p className="name">{activity.timeOfDay}</p>
                        <p className="name">{activity.startDate}</p>
                        <button className="edit" onClick={() => editClickHandler()}>Edit</button>
                        <button className="delete" onClick={() => deleteActivity(activity)}>Delete</button>
                        <button className="archive" onClick={() => addToArchive(activity)}>Archive</button>
                    </div>
                </div>
            }
            
        </>
    )
}