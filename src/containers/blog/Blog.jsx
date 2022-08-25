import React from 'react'
import { Article } from '../../components';
import './blog.css';
import {blog01, blog02, blog03, blog04, blog05} from "./imports";
const blog = () => {
  return (
    <div className='modern__blog section__padding' id='blog'>
      <div className="modern__blog-heading">
        <h1 className="gradient__text">
          A lot is happening,<br/>We are blogging about it
        </h1>
      </div>

      <div className="modern__blog-container">
        <div className="modern__blog-container_groupA">
          <Article date="Sep 25, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" imgUrl={blog01} />
        </div>
        <div className="modern__blog-container_groupB">
          <Article date="Sep 25, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" imgUrl={blog02} />
          <Article date="Sep 25, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" imgUrl={blog03} />
          <Article date="Sep 25, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" imgUrl={blog04} />
          <Article date="Sep 25, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" imgUrl={blog05} />
        </div>
      </div>
    </div>
  )
}

export default blog