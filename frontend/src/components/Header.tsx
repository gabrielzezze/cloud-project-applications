import React from 'react'
import classes from '../css/components/header.module.css'
import { FaPlusCircle} from 'react-icons/fa'

interface Props {
    onAddClick: () => void
}

export default function Header(props: Props) {
    const { onAddClick } = props
    return (
        <header className={classes.root}>
            <h1>Bem vindo ao Task Manager V2</h1>
            <FaPlusCircle onClick={onAddClick} />
        </header>
    )
}