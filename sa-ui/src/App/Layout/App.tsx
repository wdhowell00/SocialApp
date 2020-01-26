import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { IActivity } from '../Models/activity';
import { NavBar } from '../../Features/nav/NavBar';
import { ActivityDashboard } from '../../Features/Activities/Dashboard/ActivityDashboard';


const App = () => {

  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);
  const [editMode, setEditMode] = useState(false);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.filter(a => a.id === id)[0])
  }

  const handleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  }

  useEffect(() => {
    axios.get<IActivity[]>('https://localhost:44393/api/activities')
      .then((response) => {
        setActivities(response.data)
      });
  }, []);




  return (
    <Fragment>
      <NavBar openCreateForm={handleOpenCreateForm}></NavBar>
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard 
        activities={activities} 
        selectActivity={handleSelectActivity}
        setSelectedActivity={setSelectedActivity}
        selectedActivity={selectedActivity!}
        editMode={editMode}
        setEditMode={setEditMode}
        />
      </Container>
    </Fragment>
  );


}

export default App;
