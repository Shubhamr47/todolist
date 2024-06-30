"use client";
import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log([...mainTask, { title, desc }]);
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className="flex justify-between mb-5 w-2/3">
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-lg font-medium'>{t.desc}</h6>
          </div>
          <button
            onClick={() => deleteHandler(i)}
            className='bg-red-400 text-white px-4 py-2 rounded font-bold'
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Shubham's Todo List</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2'
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2'
          placeholder="Enter Description here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          type="submit"
          className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'
        >
          Add Task
        </button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Page;
