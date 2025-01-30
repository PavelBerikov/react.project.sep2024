import {FC} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";
import { searchSliceActions } from '../../redux/slices/searchSlice/searchSlice.ts';

const SearchForm:FC = () => {
    const {handleSubmit, register} = useForm<{value: string}>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    function foo(value:{value:string}) {
        dispatch(searchSliceActions.setWord(value.value))
        navigate(`/auth/recipes/search`);

    }

    return (
        <form onSubmit={handleSubmit(foo)}>
            <input type="text" placeholder={'search'} {...register('value')}/>
            <button>Go!</button>
        </form>
    );
};

export default SearchForm;