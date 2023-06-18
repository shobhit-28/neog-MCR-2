import { useContext, useState } from 'react'
import './addNewHabitModal.css'
import { ActivityReducerContext } from '../../activityReducerContext/activityReducerContext'

export const AddNewHabitModal = () => {
    const [activity, setActivity] = useState({
        id: '',
        name: '',
        repeat: 'Daily',
        goal: '1 time daily',
        timeOfDay: 'Morning',
        startDate: 'Today'
    })
    const {isAcitivityModalOpen, setIsAcitivityModalOpen, addActivity} = useContext(ActivityReducerContext)

    const saveClickHandler = () => {
        addActivity(activity)
        setIsAcitivityModalOpen(false)
    }

    const discardHandler = () => {
        setIsAcitivityModalOpen(false)
    }

    return (
        <>
            {isAcitivityModalOpen &&
                (<div className="add-activity-container" onClick={() => setIsAcitivityModalOpen(false)}>
                    <div className="add-new-activity-modal" onClick={(event) => event.stopPropagation()}>
                        <p className="head">New Habit</p>
                        <label htmlFor="name" className="name">
                            <p className="input-title">Name:</p>
                            <input type="text" name="name" id="name" className="name" onChange={(event) => setActivity({ ...activity, name: event.target.value })} />
                        </label>
                        <label htmlFor="repeat" className="repeat">
                            <p className="input-title">Repeat:</p>
                            <select name="repeat" id="repeat" className="repeat" onChange={(event) => setActivity({ ...activity, repeat: event.target.value })}>
                                <option value="Daily">Daily</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </label>
                        <label htmlFor="goal" className="goal">
                            <p className="input-title">Goal:</p>
                            <select name="goal" id="goal" className="goal" onChange={(event) => setActivity({ ...activity, goal: event.target.value })}>
                                <option value="1 Time Daily">1 Time Daily</option>
                                <option value="2 Times Daily">2 Times Daily</option>
                                <option value="3 Times Daily">3 Times Daily</option>
                            </select>
                        </label>
                        <label htmlFor="time" className="time">
                            <p className="input-title">Time of day:</p>
                            <select name="time" id="time" className="time" onChange={(event) => setActivity({ ...activity, timeOfDay: event.target.value })}>
                                <option value="Morning">Morning</option>
                                <option value="Evening">Evening</option>
                                <option value="Night">Night</option>
                                <option value="Anytime">Anytime</option>
                            </select>
                        </label>
                        <label htmlFor="start" className="start">
                            <p className="input-title">Start Date:</p>
                            <select name="start" id="start" className="start" onChange={(event) => setActivity({ ...activity, startDate: event.target.value })}>
                                <option value="Today">Today</option>
                                <option value="Tomorrow">Tomorrow</option>
                                <option value="Day After Tomorrow">Day After Tomorrow</option>
                            </select>
                        </label>
                        <div className="btn-container">
                            <button className="discard" onClick={() => discardHandler()}>Discard</button>
                            <button className="Save" onClick={() => saveClickHandler()}>Save</button>
                        </div>
                    </div>
                </div>)
            }
        </>
    )
}