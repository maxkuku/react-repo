import {useCallback, useState} from 'react'


// можно начальные данные передавать в useState и в
// setFormState, но это неэкономично
// поэтому создадим переменную
const initialState = {login: '', password: ''}



// props чтобы использовать данные заполнения
// формы дальше
export const LoginForm = ({handleSubmit} /* props */) => {

    

    const [formState, setFormState] = useState(initialState)


    // форма сбрасывается по кнопке ресет
    // но реакт ее отрисовывает снова
    // – чиним
    const resetForm = () => {
        // передадим начальное состояние формы
        setFormState(initialState)
    }


    // форма будет пытаться отправиться по адресу
    // это не нужно. Нужно получить объект данных
    // формы
    const onSubmit = (event) => {
        event.preventDefault();
        // console.log перенесен в App.js
        // console.log(formState);

        // onSubmit может быть не передан - проверяем
        if(handleSubmit){
            handleSubmit(formState)
        }

        resetForm()
    }



    // useCallback сохраняет ссылку на функцию, чтобы каждый раз
    // её не рендерить заново. Если ничего не изменилось,
    // то просто отдаст старое значение

    const onChangeLogin = useCallback((event) => {
        // console.log(event.target.value);
        setFormState((formState) => {
            return {
                ...formState,
                login: event.target.value
            }
        }) 
    }, [])


    const onChangePassword = useCallback((event) => {
        // console.log(event.target.value);
        setFormState((formState) => {

            return {
            ...formState,
            password: event.target.value
            }
        }) 
    }, [])


    return <form id='loginForm' onReset={resetForm} onSubmit={onSubmit}>



        <label><span>Логин: </span>
        <input 
        onChange={onChangeLogin} 
        type='text' name='login' value={formState.login}/>
        </label>




        <label><span>Пароль: </span>
        <input 
        onChange={onChangePassword} 
        type='password' name='password' value={formState.password}/>
        </label>




        <label>
        <button type='reset'>
            Сбросить
        </button>
        
        <button type='submit'>
            Отправить
        </button>
        </label>

    </form>

}