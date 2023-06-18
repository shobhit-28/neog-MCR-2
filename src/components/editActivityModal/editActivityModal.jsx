/* eslint-disable react/prop-types */
import { useContext, useState } from 'react'
import './editActivityModal.css'
import { ActivityReducerContext } from '../../activityReducerContext/activityReducerContext'

export const EditActivityModal = ({ activity }) => {
    const [editedActivity, setEditedActivity] = useState(activity)

    const { isEditAcitivityDetailsModalOpen, setIsEditAcitivityDetailsModalOpen, editActivity } = useContext(ActivityReducerContext)

    const saveClickHandler = () => {
        editActivity(editedActivity)
        setIsEditAcitivityDetailsModalOpen(false)
    }

    return (
        <>
            {isEditAcitivityDetailsModalOpen &&
                <div className="edit-activity-modal-container" onClick={() => setIsEditAcitivityDetailsModalOpen(false)}>
                    <div className="edit-activity-modal" onClick={(event) => event.stopPropagation()}>
                        <label htmlFor="name" className="name">
                            <p className="input-title">Name:</p>
                            <input defaultValue={activity.name} type="text" name="name" id="name" className="name" onChange={(event) => setEditedActivity({ ...activity, name: event.target.value })} />
                        </label>
                        <label htmlFor="repeat" className="repeat">
                            <p className="input-title">Repeat:</p>
                            <select name="repeat" id="repeat" className="repeat" onChange={(event) => setEditedActivity({ ...activity, repeat: event.target.value })}>
                                <option selected={activity.repeat === 'Daily'} value="Daily">Daily</option>
                                <option selected={activity.repeat === 'Monthly'} value="Monthly">Monthly</option>
                                <option selected={activity.repeat === 'Yearly'} value="Yearly">Yearly</option>
                            </select>
                        </label>
                        <label htmlFor="goal" className="goal">
                            <p className="input-title">Goal:</p>
                            <select name="goal" id="goal" className="goal" onChange={(event) => setEditedActivity({ ...activity, goal: event.target.value })}>
                                <option selected={activity.goal === '1 Time Daily'} value="1 Time Daily">1 Time Daily</option>
                                <option selected={activity.goal === '2 Times Daily'} value="2 Times Daily">2 Times Daily</option>
                                <option selected={activity.goal === '3 Times Daily'} value="3 Times Daily">3 Times Daily</option>
                            </select>
                        </label>
                        <label htmlFor="time" className="time">
                            <p className="input-title">Time of day:</p>
                            <select name="time" id="time" className="time" onChange={(event) => setEditedActivity({ ...activity, timeOfDay: event.target.value })}>
                                <option selected={activity.timeOfDay === 'Morning'} value="Morning">Morning</option>
                                <option selected={activity.timeOfDay === 'Evening'} value="Evening">Evening</option>
                                <option selected={activity.timeOfDay === 'Night'} value="Night">Night</option>
                                <option selected={activity.timeOfDay === 'Anytime'} value="Anytime">Anytime</option>
                            </select>
                        </label>
                        <label htmlFor="start" className="start">
                            <p className="input-title">Start Date:</p>
                            <select name="start" id="start" className="start" onChange={(event) => setEditedActivity({ ...activity, startDate: event.target.value })}>
                                <option selected={activity.startDate === 'Today'} value="Today">Today</option>
                                <option selected={activity.startDate === 'Tomorrow'} value="Tomorrow">Tomorrow</option>
                                <option selected={activity.startDate === 'Day After Tomorrow'} value="Day After Tomorrow">Day After Tomorrow</option>
                            </select>
                        </label>
                        <div className="btn-container">
                            <button className="discard"
                            onClick={() => setIsEditAcitivityDetailsModalOpen(false)}
                            >Discard</button>
                            <button className="Save"
                            onClick={() => saveClickHandler()}
                            >Save</button>
                        </div>
                    </div>
                </div>}
        </>
    )
}