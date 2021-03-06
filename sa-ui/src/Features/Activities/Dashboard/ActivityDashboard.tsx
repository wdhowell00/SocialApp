import React, { SyntheticEvent } from 'react'
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
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
    deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
    submitting: boolean;
    target: string;
}

export const ActivityDashboard: React.FC<IProps> = ({ activities, target, selectActivity, submitting, setSelectedActivity, selectedActivity, editMode, setEditMode, createActivity, deleteActivity, editActivity }) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList 
                    activities={activities} 
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                    target={target}
                    submitting={submitting} />
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode && 
                <ActivityDetails 
                    activity={selectedActivity} 
                    setSelectedActivity={setSelectedActivity} 
                    setEditMode={setEditMode} />}
                {editMode && 
                <ActivityForm 
                    key={selectedActivity && (selectedActivity.id || 0)}
                    setEditMode={setEditMode} 
                    activity={selectedActivity}
                    createActivity={createActivity}
                    editActivity={editActivity}
                    submitting={submitting} />}
            </Grid.Column>
        </Grid>
    )
}
