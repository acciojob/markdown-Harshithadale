import React, { useState } from 'react'
import MarkdownEditor from './MarkdownEditor'
import { useEffect } from 'react'
import '../styles/styles.css'

function App() {
  const [markdown,setMarkDown] = useState(``)
  const [loading,setLoading] = useState(false)
    useEffect(()=>{
      if(loading){
        const timer = setTimeout(()=>{
          setLoading(false)
        },300)
         return () => clearTimeout(timer); 
      }
    console.log("markdown will updated")

  },[markdown,loading])
  return (
    <div className='app'>
      <MarkdownEditor markdown = {markdown} setMarkDown = {setMarkDown} loading={loading} setLoading={setLoading}/>
    </div>
  )
}

export default App

