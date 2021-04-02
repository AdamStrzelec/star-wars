import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters as fetchCharactersAction } from '../../actions/actions';

type Props = {
    characters: Array<any>,
    hasNextPage: boolean,
    fetchCharacters: Function
}

const CharactersContainer: React.FC<Props> = ({ characters, hasNextPage, fetchCharacters }) => {

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        fetchCharacters(1, characters)
    },[])
    

    return(
        <div>

        </div>
    )
}
const mapStateToProps = (state: any) => ({
    characters: state.characters,
    hasNextPage: state.hasNextPage
})
const mapDispatchToProps = (dispatch: any) => ({
    fetchCharacters: (pageNumber: number, characters: Array<any>) => dispatch(fetchCharactersAction(pageNumber, characters))
})

export default connect(mapStateToProps, mapDispatchToProps)(CharactersContainer);