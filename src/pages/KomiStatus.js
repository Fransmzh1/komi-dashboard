import axios from 'axios'
import React, {useEffect, useState} from 'react'

function KomiStatus() {
    const [stats, setStats] = useState(null)
    useEffect(()=> {
      fetch('/api/monitoringApp/checkService')
        // axios.get('/api/monitoringApp/checkService')
        .then(res=>res.json())
        .then(res=> {
          console.log(res)
          // setStats(res)
        })
        .catch(err=> {
          console.log(err)
        })
        })
    return (
        <div>KomiStatus</div>
    )
}

export default KomiStatus