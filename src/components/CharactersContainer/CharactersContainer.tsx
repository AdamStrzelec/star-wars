import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
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
            <InfiniteScroll
                  dataLength={characters.length}
                  next={() => {
                        setCurrentPage(currentPage+1)
                        fetchCharacters(currentPage+1, characters)
                    }}
                  hasMore={hasNextPage}
                  loader={<h4>Loading...</h4>}
            >
                {
                    characters.map(character => 
                        <div key={character.name}>
                            <h1>Name: {character.name}</h1>
                            <h2>Gender: {character.gender}</h2>
                            <h2>Birth year: {character.birth_year}</h2>
                        </div>
                    )
                }
            </InfiniteScroll>
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