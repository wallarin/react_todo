import React from 'react'
import AddTodo from './todo_components/Add/AddTodo'
import styles from './todo.css'

function App() {
    return (
        <div className='App'>
            <AddTodo />
            <div className="mx-auto my-7 w-5/6 py-7 flex justify-center border-4 border-solid border-violet-500 rounded-lg text-white text-3xl font-semibold bg-zinc-400">
                <div>
                    <h1 className='hi'>WelCome Your ToDo List! 😀</h1>
                </div>
            </div>
            <div className="contents-box mx-auto w-5/6 border-4 border-fuchsia-300 rounded-lg flex max-h-[900px]">
                <div className="left-box w-2/4 my-3 p-3">
                    <div className="left-view-box max-h-[800px] overflow-hidden overflow-y-auto">
                        <div className="card-view border-2 border-pink-200 rounded-lg p-5 m-3 hover:bg-amber-100 group">
                            <div className="left-date-box text-xs text-gray-400 font-bold text-right">
                                <span>등록일 : </span>
                                <span>20XX-XX-XX</span>
                                <br />
                                <span>완료일 : </span>
                                <span>20XX-XX-XX</span>
                            </div>
                            <div className="title-box my-3 p-3 border-2 border-gray-300 rounded-lg font-bold text-lg group-hover:bg-amber-200 overflow-hidden">
                                <h3 className=''>설거지하기설거지하기설거지하기설거지하기설거지하기 1
                                    설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기 끝!
                                </h3>
                            </div>
                            <div className="button-box text-right">
                                <button className="cancle-btn bg-rose-400 p-4 font-bold text-white rounded-lg">삭제하기</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-box w-2/4 my-3 p-3">
                    <div className="view-box max-h-[705px] overflow-hidden overflow-y-auto">
                        <div className="card-view border-2 border-pink-200 rounded-lg p-5 m-3 hover:bg-amber-100 group">
                            <div className="date-box text-xs text-gray-400 font-bold text-right">
                                <span>등록일 : </span>
                                <span>20XX-XX-XX</span>
                            </div>
                            <div className="title-box mt-7 mb-3 p-3 border-2 border-gray-300 rounded-lg font-bold text-lg group-hover:bg-amber-200 overflow-hidden">
                                <h3>설거지하기설거지하기설거지하기설거지하기설거지하기 1
                                    설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기설거지하기 끝!
                                </h3>
                            </div>
                            <div className="button-box text-right">
                                <button className="success-btn bg-green-400 p-4 font-bold text-white rounded-lg">완료하기</button>
                            </div>
                        </div>
                    </div>
                    <hr className='bg-gray-500 h-px my-3 border-0'/>
                    <div className="write-box border-2 border-pink-200 rounded-lg my-4 ml-3 mr-7 p-2 flex flex-1 justify-center">
                        <input className="w-4/5 border-2 border-black p-4 my-3 mr-3 rounded-lg focus:border-purple-800 font-bold" type="text" placeholder="할 일을 입력하세요." />
                        <button className='bg-blue-300 p-3 my-3 font-bold text-white rounded-lg'>등록하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App