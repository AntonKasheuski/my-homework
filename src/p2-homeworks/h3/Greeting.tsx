import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onKeyHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onKeyHandler, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = (error.length > 0) ? s.inputError : s.inputCorrect// need to fix with (?:)

    return (
        <div className={s.addNameClass}>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyHandler} className={inputClass}/>
            <span className={s.error}>{error}</span>
            <button onClick={addUser} className={s.add}>add</button>
            <span className={s.count}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
