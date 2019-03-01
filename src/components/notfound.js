import React from 'react';

const NotFound = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <div className="alert alert-danger" role="alert">
                        Oops! We can't seem to find what you are looking for...here is 404 error code
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;