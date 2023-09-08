import React, {useEffect, useState} from 'react'
import axios from 'axios';

function Apirequest() {
    const {data, setData} = useState(null);
    const {message, setMessage} = useState(null)

    useEffect(() => {
        fetch('/api/fetch')
        .then(response => {
            const res = JSON.parse(response)
            console.log(res);
        })
        .then(data => {
            console.log(data);
            setData(data.message) // Process the JSON data
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
    }, [])

    const flashMesages = (msg) => {
        setMessage(msg);
        setTimeout(() => {
            setMessage(null)
        }, 5000)

    }
  return (
    <div>
        <h1>
            {data ? data : <p>We are processing your data</p>}
        </h1>

        {
            message && (
                <div>
                    {message}
                </div>
            )
        }

        <button onClick={() => flashMesages('Error loading')}>Show message</button>
      
    </div>
  )
}

export default Apirequest
