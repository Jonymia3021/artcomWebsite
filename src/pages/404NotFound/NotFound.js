import React from 'react';

const NotFound = () => {

    const style = {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        height: '600px'
    };

    return (
        <section>
            <div style={style} className="container">
                <h1>Sorry, Page Not Found :( </h1>
            </div>
        </section>
    );
};

export default NotFound;