import React from 'react'
import { DiscoverHeader, NavigationBar, ProductListing } from "../../components"

export const DiscoverPage = () => {
  return (
    <div className='w-full'>
        <DiscoverHeader />
        <ProductListing />
        <NavigationBar />
    </div>
  )
}
