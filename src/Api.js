import React from 'react'

export default function Api(){
    const [starWarsData, setStarWarsData] = React.useState({})
    const[count, setCount] = React.useState(1)
    console.log('Component rendered')


    React.useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    },[count])

   
    return(
        <section className='api_body'>
            <div className='api_page'>
                <h1 className='api_title'>The count is {count}</h1>
                <button className='api_btn' onClick={()=>setCount(prevCount=>prevCount+1)}>Get next Chracter</button>
                <pre className='api_data'>{JSON.stringify(starWarsData,null,2)}</pre>
            </div>
        </section>
    )
}