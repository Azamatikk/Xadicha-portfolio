import React from "react";
import './works.css'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase.config'

const Project = () => {

  const [posts, setPosts] = useState([])

  const allPostCollection = collection(db, 'works')

  const getAllPosts = async () => {
    try {
      const data = await getDocs(allPostCollection)
      const postsArray = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setPosts(postsArray)
    } catch (error) {
      console.log(error)
    }
  }

  const deletePost = async postId => {
    try {
      await deleteDoc(doc(db, 'works', postId))
      setPosts(posts.filter(post => post.id !== postId))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllPosts()
  }, [])


  return (
    <section className="works_started">
      <div className="my_work">
        <h1>My works</h1>
      </div>

      <div className='cards'>
      {posts.map(post => (
        <div className="card">
        <div className="left-text">
          <h2>{post.title}</h2>
          <p>{post.desc}</p> 
         <div className="my_buttons">
            <button>More</button>
          </div>
        </div>
        <div className="right-img" >
            <img src={post.imageUrl} alt="" />
        </div>
      </div>
      ))}
    </div>

    </section>
  );
};

export default Project;
