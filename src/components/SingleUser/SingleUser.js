import React from "react";

import css from './singleuser.module.css'

const SingleUser = ({user, setUserId}) => {
    const {id:userId,name, username,email,address:{street, suite, city, zipcode, geo: {lat,lng}},phone,website,company:{name:companyName, catchPhrase, bs}} = user;

    return (
        <div className={css.wrapper}>
            <div>
                <p className={css.pSUser}>name: {name}</p>
                <p className={css.pSUser}>username: {username}</p>
                <p className={css.pSUser}>email: {email}</p>
                <p className={css.pSUser}>street: {street}</p>
                <p className={css.pSUser}>address:</p>
                <p className={css.pSUser}>suite: {suite}</p>
                <p className={css.pSUser}>city: {city}</p>
                <p className={css.pSUser}>zipcode: {zipcode}</p>
                <p className={css.pSUser}>geo:</p>
                <p className={css.pSUser}>lat: {lat}</p>
                <p className={css.pSUser}>lng: {lng}</p>
                <p className={css.pSUser}>phone: {phone}</p>
                <p className={css.pSUser}>website: {website}</p>
                <p className={css.pSUser}>company:</p>
                <p className={css.pSUser}>company name: {companyName}</p>
                <p className={css.pSUser}>catchPhrase: {catchPhrase}</p>
                <p className={css.pSUser}>bs: {bs}</p>
            </div>
            <div>
                <button onClick={()=>{
                    setUserId(userId)

                }}>Get Posts</button>
            </div>

        </div>
    );
};

export {SingleUser};
