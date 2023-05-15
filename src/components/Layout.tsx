import React, { FC } from 'react'

interface Props {
    children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <div className='h-screen w-full overflow-hidden'>
            <div className=' h-full w-full overflow-hidden bg-sideColor'>{children}</div>
        </div>
    )
}

export default Layout