import React from 'react'
import { Feature } from '../../components';
import './what.css';
const What = () => {
  return (
    <div className='modern__what section__margin' id='wmod'>
        <div className="modern__what-feature">
          <Feature title="What is Modern" text= "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
        </div>
        <div className="modern__what-heading">
          <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
          <p>Explore The Library</p>
        </div>
        <div className="modern__what-container">
          <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "/>
          <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
          <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments" />
        </div>
    </div>
  )
}

export default What