import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SettingNGword = ({ NGword, onChange }) => {
  const navigate = useNavigate()

  const handleToGamePage = () => {
    navigate('/game')
  }

  return (
    <form onSubmit={handleToGamePage}>
      <label>
        NGワード：
        <input type='text' value={NGword} onChange={(event) => onChange(event)} />
      </label>
      <input type='submit' value='Submit' />
    </form>
  )
}
