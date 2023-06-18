/* eslint-disable react/prop-types */
import { useContext } from 'react'
import {useLocation} from 'react-router-dom'
import './activityDetailsModal.css'
import { ActivityReducerContext } from '../../activityReducerContext/activityReducerContext'

export const ActivityDetailsModal = ({ activity }) => {
    const { isAcitivityDetailsModalOpen, setIsAcitivityDetailsModalOpen, setIsEditAcitivityDetailsModalOpen, deleteActivity, addToArchive } = useContext(ActivityReducerContext)

    const location = useLocation()

    const editClickHandler = () => {
        setIsEditAcitivityDetailsModalOpen(true)
        setIsAcitivityDetailsModalOpen(false)
    }
    const deleteClickHandler = () => {
        deleteActivity(activity)
        setIsAcitivityDetailsModalOpen(false)
    }
    const archiveClickHandler = () => {
        addToArchive(activity)
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
                        <button className="delete" onClick={() => deleteClickHandler()}>Delete</button>
                        {location.pathname === '/' && <button className="archive" onClick={() => archiveClickHandler()}>Archive</button>}
                    </div>
                </div>
            }
            
        </>
    )
}