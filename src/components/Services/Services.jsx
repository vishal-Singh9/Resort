import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from '../Title';
import  './Services.css';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free Cocktails',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, placeat',
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, placeat',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, placeat',
      },
      {
        icon: <FaBeer />,
        title: 'Tastiest Beer',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, placeat',
      },
    ],
  };
  render() {
    return (
      <section className='services'>
        <Title title='Services' />
        <br />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service-card'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
