import { useState } from 'react'

export default function FormSelect() {
  const [form, setForm] = useState({
    animal: 'dog',
  })

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const show = () => {
    alert(`좋아하는 동물: ${form.animal}`)
  }

  return (
    <form>
      <label htmlFor="animal">좋아하는 동물</label>
      <select
        id="animal"
        name="animal"
        value={form.animal}
        onChange={handleForm}
      >
        <option value="dog">개</option>
        <option value="cat">고양이</option>
        <option value="hamster">햄스터</option>
        <option value="rabbit">토끼</option>
      </select>

      <button type="button" onClick={show}>
        보내기
      </button>

      <p>좋아하는 동물: {form.animal}</p>
    </form>
  )
}
