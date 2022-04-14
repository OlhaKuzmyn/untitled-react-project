import React from 'react';

const Post = ({post}) => {
    const {userId,id,title,body} = post;
    return (
        <div>
            <p>{userId} {id} {title} {body}</p>
        </div>
    );
};

export {Post};