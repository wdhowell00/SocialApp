import React from 'react'
import { Grid } from 'semantic-ui-react'
import { IActivity } from '../../../App/Models/activity'
import { ActivityList } from './ActivityList'
import { ActivityDetails } from '../Details/ActivityDetails'
import { ActivityForm } from '../Form/ActivityForm'

interface IProps {
    activities: IActivity[];
    selectActivity: (id: string) => void;
    selectedActivity: IActivity;
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
    setSelectedActivity: (activity: IActivity | null) => void;
}

export const ActivityDashboard: React.FC<IProps> = ({ activities, selectActivity, setSelectedActivity, selectedActivity, editMode, setEditMode }) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList activities={activities} selectActivity={selectActivity} />
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode && 
                <ActivityDetails activity={selectedActivity} setSelectedActivity={setSelectedActivity} setEditMode={setEditMode} />}
                {editMode && <ActivityForm setEditMode={setEditMode} />}
            </Grid.Column>
        </Grid>
    )
}
