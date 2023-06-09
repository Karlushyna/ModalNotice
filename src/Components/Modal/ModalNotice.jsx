import React from 'react';
import { useState, useEffect } from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import AddToFavorite from './AddToFavorite/AddToFavorite';

import css from './newmodal.module.css';

const ModalNotice = () => {
    const [modal, setModal] = useState(false);

    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
// close on Escape
    useEffect(() => {
        function handleKeyDown(event) {
          if (event.key === 'Escape') {
            setModal(false);
          }
        }
    
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

// phone, Email :

useEffect(() => {
    // Simulating data fetching from backend
    // Replace with your actual API call
    fetch('your-backend-api-endpoint')
      .then((response) => response.json())
      .then((data) => {
        setPhone(data.phone);
        setEmail(data.email);
      })
      .catch((error) => {
        console.log('Error fetching data from backend:', error);
      });
  }, []); 

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneClick = () => {
    // Perform phone contact logic
    console.log('Contacting via phone:', phone);
  };

  const handleEmailClick = () => {
    // Perform email contact logic
    console.log('Contacting via email:', email);
  };
  
    return (
      <>
        <button onClick={toggleModal} className={css.openBtn}>
          Open
        </button>
  
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className={css.overlay}></div>
            <div className={css.content}>
            <div className={css.imgWrap}>
            <img src=""   alt="animal" className={css.avatar} />
            {/* <div className={css.optionContainer}> */}
            <p className={css.optionText}>option back</p>
            {/* </div> */}
            </div>
            <button className={css.closeBtn} onClick={toggleModal}>
              <AiOutlineClose className={css.closeIcon}/>
          </button>
            <div className={css.contentWrap}>
              <h2 className={css.title}>Title from BACKEND</h2>
              <ul>
                <li className={css.item}>
                  <p className={css.itemTitle}>Name:</p>
                  <p className={css.description}>back</p>
                </li>
                <li className={css.item}>
                  <p className={css.itemTitle}>Birthday:</p>
                  <p className={css.description}>back</p>
                </li>
                <li className={css.item}>
                  <p className={css.itemTitle}>Breed:</p>
                  <p className={css.description}>back</p>
                </li>
                <li className={css.item}>
                  <p className={css.itemTitle}>Place:</p>
                  <p className={css.description}>back</p>
                </li>
                <li className={css.item}>
                  <p className={css.itemTitle}>The sex:</p>
                  <p className={css.description}>back</p>
                </li>
                <li className={css.item}>
                  <p className={css.itemTitle}>Email:</p>
                  <p className={css.description}>
                  <a href={`mailto:${email}`} onClick={handleEmailClick}>{email}</a>
                  </p>
                </li>
                <li className={css.item}>
                <p className={css.itemTitle}>Phone:</p>
                  <p className={css.description}>
                    <a href={`tel:${phone}`} onClick={handlePhoneClick}>{phone}</a>
                </p>
                </li>
                
              </ul>
            </div>
            
            <div className={css.textWrap}>
            <p className={css.textContent}>Comments: back</p>
            
                  </div>
              <div className={css.wrap}>
                <button className={css.button}>Contact</button>
                <AddToFavorite/>
              </div>
              </div>
              
          </div>
        )}
      </>
    );

}

export default ModalNotice;