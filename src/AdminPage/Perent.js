import React from 'react'
import Signup from '../HeaderSection/Signup'
import UserNewComponent from './UserNewComponent'


const Perent = () => {
  return (
    <>
     <DataContext.Provider value={{ userData: [], setUserData: () => {} }}>
     <Signup/>
     <UserNewComponent/>
    </DataContext.Provider>
      
    </>
  )
}

export default Perent
