import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SettingNGwords = ({ onBlur }) => {
  const navigate = useNavigate()

  const handleToGamePage = () => {
    navigate('/game')
  }

  const NGwords = Array(3).fill(0).map((_, NGword_num) => {
    return (
      <div key={NGword_num}>
        <label>
          NGワード{NGword_num + 1}：
          <input type='text' onBlur={(event) => onBlur(event, NGword_num)} />
        </label>
      </div>
    )
  })

  return (
    <form onSubmit={handleToGamePage}>
      {NGwords}
      <input type='submit' value='Submit' />
    </form>
  )
}
