import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';
import { fetchCharacters as fetchCharactersAction } from '../../actions/actions';
import CharacterCard from '../CharacterCard/CharacterCard';
import Loader from 'react-loader-spinner';

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
                  loader={
                      <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Loader
                            type="ThreeDots"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            timeout={3000}
                        />
                      </div>
                  }
            >
                {
                    characters.map(character => 
                        <CharacterCard 
                            key={character.name}
                            name={character.name}
                            gender={character.gender}
                            birth_year={character.birth_year}
                            height={character.height}
                            films={character.films}
                        />
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