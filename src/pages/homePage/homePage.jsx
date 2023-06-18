import { useContext } from 'react'
import { AddNewHabitModal } from '../../components/addNewHabitModal/addNewHabitModal'
import './homePage.css'
import {TiPlus} from 'react-icons/ti'
import { ActivityReducerContext } from '../../activityReducerContext/activityReducerContext'

export const HomePage = () => {
    const {isAcitivityModalOpen, setIsAcitivityModalOpen} = useContext(ActivityReducerContext)

    return (
        <div className="home-page page">
            {isAcitivityModalOpen && <AddNewHabitModal />}
            <p className="head">Home</p>
            <div className="add-habit" onClick={() => setIsAcitivityModalOpen(!isAcitivityModalOpen)}><TiPlus /></div>
        </div>
    )
}