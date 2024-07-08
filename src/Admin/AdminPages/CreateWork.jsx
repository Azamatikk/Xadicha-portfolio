import React from 'react'
import './CreateWork.css'
import { addDoc, collection } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useState } from 'react'
import { v4 } from 'uuid'
import { db, imgdb } from '../../firebase.config'

export default function CreateWork() {

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [img, setImg] = useState(null) // Use null for file input
  const [link, setLink] = useState('')

  const enterWork = collection(db, 'works')

  const createWork = async () => {
    try {
      let imageUrl = ''
      if (img) {
        const imgRef = ref(imgdb, `files/${v4()}`)
        await uploadBytes(imgRef, img)
        imageUrl = await getDownloadURL(imgRef)
      }

      await addDoc(enterWork, {
        title: title,
        desc: desc,
        link: link,
        imageUrl: imageUrl, // Save image URL in Firestore
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="create_work">
      <input type="title" placeholder='Name' onChange={event => setTitle(event.target.value)} />
      <textarea placeholder='Text' onChange={event => setDesc(event.target.value)}></textarea>
      <input type="Link" placeholder='Link' onChange={event => setLink(event.target.value)} />
      <input type="file" placeholder='Name' onChange={event => setImg(event.target.files[0])} />
      <button onClick={createWork}>Submit</button>
    </div>

  )
}
