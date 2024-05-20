import React from 'react'

const NotFound = () => {
  return (
<div className="d-flex align-items-center justify-content-center mt-5">
            <div className="text-center mt-5">
                <h1 className="display-1 mt-5 fw-bold">404</h1>
                <p className="fs-3 "> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                </p>
            </div>
        </div>
  )
}

export default NotFound