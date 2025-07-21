import React from 'react'

const AddTodo = () => {
  return (
    <div>
        <div>
            <h1>Add Todo</h1> 
            <div>
                <form action="">
                    <div>
                        <label htmlFor="title">Title</label> 
                        <input type="text" name="title" id="" />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description"></textarea>
                    </div>
                    <div>
                        <label htmlFor='date'> Date </label>
                        <input type="date" name="date" id="" />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddTodo