import React from 'react'
import laravel from '../../assets/laravel.png'
import './Skill.css';



export default function skill(props) {
  return (
    <div className='list-skill-container'>
      <div className="list-skill">
        <div className="logo-skill">
            <img src={props.image} alt="" />
        </div>
        <div className="keterangan-skill">
            <ul>
                <span> {props.judul}</span>
                <li> {props.keterangan}</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
