import Image from 'next/image';
import React from 'react'

const AuthPagesHeader = () => {
  return (
    <div className="self-start flex items-center gap-1">
      <span className="relative size-14 px-3 rounded-full">
        <Image
          src="/images/logo.jpg"
          alt="Centinair's Logo"
          fill
          priority
          className="object-contain rounded-full"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </span>
      <h1 className='font-semibold text-3xl lg:text-4xl'>Centinair</h1>
    </div>
  )
}

export default AuthPagesHeader;