import React from 'react';
import './blog.css';
import {Article} from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './import';

const Blog = () => {
  return (
    <div className="gpt3__blog section_padding">
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3_blog-container">
        
        <div className="gpt3_blog-container-groupA">
        <Article imageUrl={blog01} date="Feb 23, 2023" title="GPT-3 and Open AI is the future. Let us explore how it is?"/>
        </div>
          
        <div className="gpt3_blog-container-groupB">
          <Article imageUrl={blog02} date="Feb 23, 2023" title="GPT-3 and Open AI is the future. Let us explore how it is?"/>
          <Article imageUrl={blog03} date="Feb 23, 2023" title="GPT-3 and Open AI is the future. Let us explore how it is?"/>
          <Article imageUrl={blog04} date="Feb 23, 2023" title="GPT-3 and Open AI is the future. Let us explore how it is?"/>
          <Article imageUrl={blog05} date="Feb 23, 2023" title="GPT-3 and Open AI is the future. Let us explore how it is?"/>
        </div>

        </div>
    </div>
  )
}

export default Blog