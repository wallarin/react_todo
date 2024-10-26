import React, { useEffect, useState } from 'react';

function MainRight({ todoList, completeTodo, setTodoList }) {

    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (!inputValue.trim()) return;

        const newTodo = {
            id: todoList.length > 0 ? todoList[0].id + 1 : 1,
            title: inputValue,
            reg_date: new Date().toISOString().split('T')[0]
        }

        const updateTodoList = [newTodo, ...todoList]; // 로컬스토리지에 저장된 이전값 가져오기 + 새로 등록된 값을 추가해 새로운 배열을 만든다.
        setTodoList(updateTodoList); // 위의 새로운 배열을 TodoList에 저장한다. 출력하기 위함.
        localStorage.setItem('todos', JSON.stringify(updateTodoList)); // 로컬스토리지에 todos의 값에 새로운 배열로 교체한다.
        setInputValue(''); // 입력창을 초기화 한다.
    }

    // Enter 키가 눌렸을 때 할 일 추가
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    const deleteTodo = (id) => {
        // 삭제 확인
        const confirmDelete = window.confirm("정말로 삭제하시겠습니까?");

        if (!confirmDelete) return;

        const updatedTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(updatedTodoList);
        localStorage.setItem('todos', JSON.stringify(updatedTodoList));
    }

    return (
        <div className="right-box w-2/4 my-3 p-3">
            <div className="view-box max-h-[705px] overflow-hidden overflow-y-auto">
                {todoList.length <= 0 ?
                    <div className='border-4 rounded-lg flex justify-center items-center h-[300px]'>
                        <div className='border-4 border-stone-300 rounded-lg w-80 p-8 text-center font-bold'>등록된 미션이 없습니다. 🙄<br /><br />미션을 추가하여 기록하세요! 😍</div>
                    </div> :
                    todoList.map((data) => (
                        <div className="card-view border-4 border-pink-200 dark:border-border_card rounded-lg p-5 m-3 hover:bg-amber-100 dark:hover:bg-amber-100/50 group" key={data.id}>
                            <div className="date-box text-xs text-gray-400 dark:text-gray-100 font-bold text-right">
                                <span>등록일 : </span>
                                <span>{data.reg_date}</span>
                            </div>
                            <div className="title-box mt-7 mb-3 p-3 border-4 border-gray-300 rounded-lg font-bold text-lg group-hover:bg-amber-200 dark:group-hover:bg-amber-200/50 overflow-hidden">
                                <h3 className={data.title.length > 15 ? 'over-text' : 'not-over-text'}>{data.title}</h3>
                            </div>
                            <div className="button-box text-right">
                                <button className="success-btn bg-green-400 mx-1 p-4 font-bold text-white rounded-lg" onClick={() => completeTodo(data)}>완료하기</button>
                                <button className="success-btn bg-red-400 mx-1 p-4 font-bold text-white rounded-lg" onClick={() => deleteTodo(data.id)}>삭제하기</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <hr className='bg-gray-500 h-px my-3 border-0' />
            <div className="write-box border-4 border-pink-200 dark:border-border_card rounded-lg my-4 ml-3 mr-7 p-2 flex flex-1 justify-center">
                <input
                    className="w-4/5 border-2 border-black p-4 my-3 ml-2 mr-3 rounded-lg focus:border-purple-800 font-bold dark:text-black"
                    type="text"
                    placeholder="할 일을 입력하세요."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <button
                    className='bg-blue-300 p-3 my-3 font-bold text-white rounded-lg min-w-[88px]'
                    onClick={addTodo}
                >
                    등록하기
                </button>
            </div>
        </div>
    )
}

export default MainRight