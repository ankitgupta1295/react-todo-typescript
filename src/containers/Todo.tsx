import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import TodoList from '../components/TodoList'
import AddTask from '../components/AddTask';
import Spinner from '../components/Spinner'
import PriorityFilter from '../components/PriorityFilter';

import { makeRequest } from '../helpers/requestHelper'
import endpoints from '../constants/endpoints'
import { Wrapper } from './todo.style'
import { todoItem } from '../constants/types';
import { generateId } from '../utils/generateId'

let FILTERED_TODOS: todoItem[] | any = []

type Props = {
    match: any
}

const Todo: React.FC<Props> = (props) => {
    const [todos, setTodos] = useState<todoItem[]>([])
    const [loading, setLoading] = useState(false)
    const userId = +props.match.params.userId

    useEffect(() => {
        getTodos(undefined)
    }, [])

    const getTodos = async (priority: number | undefined) => {
        try {
            setLoading(true)
            const response = await makeRequest('GET', endpoints.todos, { priority, userId }, {}, {})
            FILTERED_TODOS = response.data
            setTodos(FILTERED_TODOS.slice(0, 15))
        }
        catch (err) {
            alert('Some Error Occurred!')
            throw err
        }
        finally {
            setLoading(false)
        }
    }


    const handleDelete = async (id: number) => {
        try {
            setLoading(true)
            const response = await makeRequest('DELETE', `${endpoints.todos}/${id}`, {}, {}, {})
            if (response.status === 200) {
                FILTERED_TODOS = todos.filter((todo: todoItem) => todo.id !== id)
                setTodos(todos.filter((todo: todoItem) => todo.id !== id))
            }
        }
        catch (err) {
            alert('Some Error Occurred!')
            throw err
        }
        finally {
            setLoading(false)
        }
    }

    const handleCompleteClick = async (id: number) => {
        try {
            setLoading(true)
            const index: number = todos.findIndex((item: todoItem) => item.id === id)
            const body = { ...todos[index], completed: true }
            const response = await makeRequest('PUT', `${endpoints.todos}/${id}`, {}, body, {})
            if (response.status === 200) {
                todos[index] = body
                setTodos(todos)
            }
        }
        catch (err) {
            alert('Some Error Occurred!')
            throw err
        }
        finally {
            setLoading(false)
        }
    }

    const handleEditClick = async (id: number, editedObj: todoItem) => {
        try {
            setLoading(true)
            const index: number = todos.findIndex((item: todoItem) => item.id === id)
            const body = { ...todos[index], title: editedObj.title, priority: editedObj.priority }
            const response = await makeRequest('PUT', `${endpoints.todos}/${id}`, {}, body, {})
            if (response.status === 200) {
                todos[index] = body
                setTodos(todos)
            }
        }
        catch (err) {
            alert('Some Error Occurred!')
            throw err
        }
        finally {
            setLoading(false)
        }
    }

    const handleAddClick = async (addObj: todoItem) => {
        const body = {
            ...addObj,
            completed: false,
            userId,
            id: generateId()
        }
        try {
            setLoading(true)
            const response = await makeRequest('POST', endpoints.todos, {}, body, {})
            if (response.status === 201) {
                todos.unshift(body)
                FILTERED_TODOS = todos
                setTodos(todos)
            }
        }
        catch (err) {
            alert('Some Error Occurred!')
            throw err
        }
        finally {
            setLoading(false)
        }

    }

    const handleLoadMore = async () => {
        setTodos(todos.concat(FILTERED_TODOS.slice(todos.length, todos.length + 15)))
    }

    return (
        <>
            <Wrapper>
                <AddTask onAddClick={handleAddClick} />
                <div className='list-wrapper'>
                    <h1 style={{ textAlign: 'center' }}>Task Planner</h1>

                    {!loading ?
                        <InfiniteScroll
                            pageStart={0}
                            loadMore={handleLoadMore}
                            hasMore={todos.length < FILTERED_TODOS.length}
                            loader={<div className="loader" key={0}>Loading ...</div>}
                        >
                            <TodoList data={todos} onDeleteClick={handleDelete} onCompleteClick={handleCompleteClick} onEditSaveClick={handleEditClick} />
                        </InfiniteScroll> :
                        <Spinner />
                    }
                </div>

                <PriorityFilter onFilterClick={getTodos} />
            </Wrapper>
        </>
    );
}

export default Todo;
