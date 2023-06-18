import { useContext } from 'react'
import { ActivityCard } from '../../components/activityCard/activityCard'
import './archivePage.css'
import { ActivityReducerContext } from '../../activityReducerContext/activityReducerContext'

export const ArchivePage = () => {
    const {archive} = useContext(ActivityReducerContext)

    return (
        <div className="archive-page page">
            <p className="head">Archive</p>
            <div className="card-container">
                {archive?.map((activity, index) => (
                    <ActivityCard key={index} activity={activity} />
                ))}
            </div>
        </div>

    )
}