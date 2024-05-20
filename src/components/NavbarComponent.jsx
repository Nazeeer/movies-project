import React from 'react'
import { Container ,Row ,Col } from 'react-bootstrap'

const NavbarComponent = ({search}) => {

    const onSearch = (word)=>{
        search(word);
    }
  return (
    <div className='nav-style w-100'>
        <Container>
            <Row className='pt-2 d-flex justify-content-between'>
                <Col xs="3" lg="4">
                    <h1 className='logo'>Movies</h1>
                </Col>
                <Col xs="9" lg="5" className="d-flex align-items-center">
                    <div className="search w-100">
                        <i className="ri-search-eye-line"></i>
                        <input onChange={(e)=> onSearch(e.target.value)} type="text" className='form-control' placeholder='Search' />
                    </div>
                </Col>
            </Row>
        </Container>

    </div>
  )
}

export default NavbarComponent