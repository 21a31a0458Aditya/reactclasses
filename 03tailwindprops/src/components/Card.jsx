import React from 'react'

function Card({username="Adhi",post="Not assigned",image="https://i.ibb.co/1JqSp8gV/Snapchat-1496329218.jpg"}) {
  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl bg-dark-200">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src={image} />
  </div>
  <div className="flex flex-col items-center md:items-start gap-1">
    <span className="text-2xl font-medium">{username}</span>
    <span className="font-medium text-sky-500">{post}</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      An aspiring student who had full web development knowledge
    </span>
  </div>
</div>
  )
}

export default Card