import React, { useState } from 'react'
import { Task } from '../App'
import classes from '../css/components/inputDropdown.module.css'

interface Props {
    onSubmit: () => void
    visible: boolean
    initialTitle?: string
    initialStatus?: string
    setTitle: (t: string) => void
    setStatus: (s: string) => void
}

export default function InputDropDown(props: Props) {
    const { onSubmit, initialStatus, initialTitle, visible , setTitle, setStatus} = props
    // const [title, setTitle] = useState<string>(initialTitle ? initialTitle : '')
    // const [status, setStatus] = useState<string>(initialStatus ? initialStatus : '')

    return (
        <div className={`${classes.root} ${visible ? classes.show : ''}`}>
            <div>
                <h3>Titulo</h3>
                <input onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <h3>Status</h3>
                <input onChange={(e) => setStatus(e.target.value)} />
            </div>
            <button onClick={onSubmit}>Enviar</button>
        </div>
    )
}