import {FC, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import FilterByTagData from "../components/searchByTagData/FilterByTagData.tsx";
import {useAppDispatch} from "../hooks/useAppDispatch.tsx";
import {filterByTagSliceActions} from "../redux/slices/filterByTagSlice/filterByTagSlice.ts";

const SearchByTagPage:FC = () => {
    const [tags, setTags] = useState<string[]>([])
    const dispatch = useAppDispatch();
    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tags').then(value => value.json())
            .then(value => setTags(value))
    }, []);
    return (
        <div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)'}}>
                {
                    tags.map((tag, index) => <Link onClick={() => {
                        dispatch(filterByTagSliceActions.setTag(tag))
                    }} key={index} to={`/recipe/searchByTag/${tag}`}>{tag}</Link>)
                }
            </div>
            <hr/>
            <FilterByTagData/>
        </div>
    );
};

export default SearchByTagPage;