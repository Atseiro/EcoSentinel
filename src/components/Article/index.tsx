import React from 'react'

type Props = {
    title: string,
    content: string
}

const index = (props: Props) => {
  return (
    <div>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
    </div>
  )
}

export default index