import React, { useState } from 'react'

export default function FormSelectList() {
  const [form, setForm] = useState({
    animal: ['cat', 'rabbit'],
  })

  const handleFormSelectList = (e) => {
    const data = []

    const opts = e.target.options
    console.log(e.target, opts)

    for (const opt of opts) {
      console.log(opt)
      if (opt.selected) data.push(opt.value)
    }

    setForm({
      ...form,
      [e.target.name]: data,
    })
  }

  const show = () => {
    // console.log(`좋아하는 동물: ${form.animal}`)
  }

  return (
    <>
      <form>
        <label htmlFor="animal">좋아하는 동물: </label>
        <select
          id="animal"
          name="animal"
          value={form.animal}
          onChange={handleFormSelectList}
          size="4"
          multiple={true}
        >
          <option value="dog">개</option>
          <option value="cat">고양이</option>
          <option value="hamster">햄스터</option>
          <option value="rabbit">토끼</option>
        </select>

        <button type="button" onClick={show}>
          보내기
        </button>
      </form>

      <p>좋아하는 동물: {form.animal.join(', ')}</p>
    </>
  )
}
