import { useState } from 'react';
import styles from './todo.module.scss';

function App() {
    const [todo, setTodo] = useState([
        'test 목록 1 test 목록 1 test 목록 1 test 목록 1 test 목록 1 test 목록 1',
        'test 목록 2',
        'test 목록 3',
        'test 목록 1',
        'test 목록 2',
        'test 목록 3',
        'test 목록 1',
        'test 목록 2',
        'test 목록 3',
        'test 목록 1',
        'test 목록 2',
        'test 목록 3',
        'test 목록 1',
        'test 목록 2',
        'test 목록 3',
        'test 목록 1',
        'test 목록 2',
        'test 목록 3',
        'test 목록 1',
        'test 목록 2',
        'test 목록 3'
    ]);

    const handleDelete = (index) => {
        setTodo(todo.filter((_, i) => i !== index));
    };

    return (
        <div className="App" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: '100vh' }}>
            <div className={styles.todoMain}>
                <div className={styles.todoMain__leftSide}>
                    <h1 className={styles.todoMain__title}>할 일 목록</h1>
                    <ul className={styles.todoMain__todoUl}>
                        {todo.map((item, index) => (
                            <li key={index} className={styles.todoMain__todoLi}>
                                <input type='checkbox' id={`todo-${index}`} className={styles.todoMain__checkbox} />
                                <label htmlFor={`todo-${index}`} className={styles.todoMain__label}>
                                    {item}
                                </label>
                                <span className={styles.todoMain__delete} onClick={() => handleDelete(index)}>❌</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.todoMain__rightSide}>
                    <h1>옆에 있는 장소</h1>
                </div>
            </div>
        </div>
    );
}

export default App;
