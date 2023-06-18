/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { ActivityReducerContext } from '../../activityReducerContext/activityReducerContext'
import './activityCard.css'
import { ActivityDetailsModal } from '../activityDetailsModal/activityDetailsModal'
import { EditActivityModal } from '../editActivityModal/editActivityModal'

export const ActivityCard = ({ activity }) => {
    const { isAcitivityDetailsModalOpen, setIsAcitivityDetailsModalOpen, isEditAcitivityDetailsModalOpen } = useContext(ActivityReducerContext)

    return (
        <>
            <div className="activity-card" onClick={() => setIsAcitivityDetailsModalOpen(true)}>
                <p className="activity-title">
                    {activity.name}
                </p>
            </div>
            {isAcitivityDetailsModalOpen && <ActivityDetailsModal activity={activity} />}
            {isEditAcitivityDetailsModalOpen && <EditActivityModal activity={activity} />}
        </>
    )
}