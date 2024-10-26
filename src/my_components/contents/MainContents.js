import React, { useEffect, useState } from 'react'
import MainLeft from './MainLeft'
import MainRight from './MainRight'

function MainContents() {

    const [todoList, setTodoList] = useState([]);  // 할 일 목록 상태
    const [compleTodos, setCompleTodos] = useState([]);  // 완료된 할 일 상태

    // 날짜 차이를 계산하는 함수 (완료일로부터 현재까지 며칠 지났는지 계산)
    const calculateDateDifference = (compleDate) => {
        const currentDate = new Date();
        const completedDate = new Date(compleDate);
        const timeDifference = currentDate.getTime() - completedDate.getTime();
        const dayDifference = timeDifference / (1000 * 3600 * 24); // 밀리초를 일 단위로 변환
        return dayDifference;
    };

    // 7일 지난 항목을 로컬스토리지에서 제거하는 함수
    const removeOldCompletedTodos = (todos) => {
        const filteredTodos = todos.filter(todo => calculateDateDifference(todo.comple_date) <= 7);
        setCompleTodos(filteredTodos);
        localStorage.setItem('comple_todo', JSON.stringify(filteredTodos));
    };

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodoList(savedTodos);

        const savedCompleTodos = JSON.parse(localStorage.getItem('comple_todo')) || [];
        removeOldCompletedTodos(savedCompleTodos);
    }, []) // 렌더링시에 로컬스토리지의 값을 가져오고 todoList에 저장한다.

    // 할 일 완료 처리 함수
    const completeTodo = (todo) => {
        const reCheck = window.confirm("완료 처리하시겠습니까?");

        if(!reCheck) return;

        const completedTodo = {
            ...todo,
            comple_date: new Date().toISOString().split('T')[0],  // 완료된 날짜
        };

        const updatedCompletedTodoList = [completedTodo, ...compleTodos];
        setCompleTodos(updatedCompletedTodoList);
        localStorage.setItem('comple_todo', JSON.stringify(updatedCompletedTodoList));

        const updatedTodoList = todoList.filter((t) => t.id !== todo.id);
        setTodoList(updatedTodoList);
        localStorage.setItem('todos', JSON.stringify(updatedTodoList));
    };

    return (
        <div className="contents-box mx-auto w-5/6 border-4 border-fuchsia-300 dark:border-border_contents dark:bg-gray-700 rounded-lg flex min-w-[690px] max-h-[900px]">
            <MainLeft compleTodos={compleTodos} setCompleTodos={setCompleTodos} />
            <MainRight todoList={todoList} completeTodo={completeTodo} setTodoList={setTodoList} />
        </div>
    )
}

export default MainContents