import React, { useEffect, useState } from 'react'

function MainLeft({ compleTodos, setCompleTodos }) {

    const compleTodoDelete = (id, title) => {

        const confirmDelete = window.confirm("정말로 삭제하시겠습니까?");

        if (!confirmDelete) return;

        const updatedCompleteList = compleTodos.filter((comple) => !(comple.id === id && comple.title === title));
        setCompleTodos(updatedCompleteList);
        localStorage.setItem('comple_todo', JSON.stringify(updatedCompleteList))
    }


    return (
        <div className="left-box w-2/4 my-3 p-3">
            <div className="left-view-box max-h-[800px] overflow-hidden overflow-y-auto">
                {compleTodos.length <= 0 ?
                    <div className='border-4 rounded-lg flex justify-center items-center h-[300px]'>
                        <div className='border-4 border-stone-300 rounded-lg w-80 p-8 text-center font-bold'>완료된 항목이 없습니다. 😥<br /><br />미션을 추가하여 완수하세요! 🤗</div>
                    </div> :
                    compleTodos.map((item) => (
                        <div className="card-view border-4 border-pink-200 dark:border-border_card rounded-lg p-5 m-3 hover:bg-amber-100 dark:hover:bg-amber-100/50 group" key={item.id}>
                            <div className="left-date-box text-xs text-gray-400 dark:text-gray-100 font-bold text-right">
                                <span>등록일 : </span>
                                <span>{item.reg_date}</span>
                                <br />
                                <span>완료일 : </span>
                                <span>{item.comple_date}</span>
                            </div>
                            <div className="title-box my-3 p-3 border-4 border-gray-300 rounded-lg font-bold text-lg group-hover:bg-amber-200 dark:group-hover:bg-amber-200/50 overflow-hidden">
                                <h3 className={item.title.length > 15 ? 'over-text line-through' : 'not-over-text line-through'}>{item.title}</h3>
                            </div>
                            <div className="button-box text-right">
                                <button className="cancle-btn bg-orange-300 p-4 font-bold text-white rounded-lg" onClick={() => compleTodoDelete(item.id, item.title)}>완료항목 삭제</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MainLeft