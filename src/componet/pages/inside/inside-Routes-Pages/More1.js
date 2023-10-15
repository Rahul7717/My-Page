import React from 'react'

const More1 = () => {
  function handleRefreshClick () {
    window.location.reload(false);
  };
  return (
   <>

<div onClick={handleRefreshClick}>

</div>


   </>
  )
}

export default More1
