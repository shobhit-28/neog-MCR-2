import { useContext } from 'react'
import { AddNewHabitModal } from '../../components/addNewHabitModal/addNewHabitModal'
import './homePage.css'
import {TiPlus} from 'react-icons/ti'
import { ActivityReducerContext } from '../../activityReducerContext/activityReducerContext'
import { ActivityCard } from '../../components/activityCard/activityCard'

export const HomePage = () => {
    const {isAcitivityModalOpen, setIsAcitivityModalOpen, activities} = useContext(ActivityReducerContext)

    return (
        <div className="home-page page">
            {isAcitivityModalOpen && <AddNewHabitModal />}
            <p className="head">Home</p>
            <div className="add-habit" onClick={() => setIsAcitivityModalOpen(!isAcitivityModalOpen)}><TiPlus /></div>
            <div className="card-container">
                {activities.map((activity, index) => (
                    <ActivityCard key={index} activity={activity} />
                ))}
            </div>
        </div>
    )
}