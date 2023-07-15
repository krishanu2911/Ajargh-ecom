import React from 'react'

export const SingleProdPageHeader = () => {
  return (
    <div className="pt-12 md:px-11 px-6 flex justify-between items-center">
        <img src="/arrow-right.svg" alt='right-arrow' />
        <h1 className="text-4xl font-bold">Details</h1>
        <img src="/notification.svg" alt="notification-icon" />
    </div>
  )
}
