import React from 'react'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const apartmentsList = [
  {
    _id: 393023,
    number: 9,
    block: 'A',
    residents: [
      {
        name: 'Ricardo',
        birthdate: '28/04/1999',
        phone: '(47) 992577885',
        email: 'desouzaricardoc@gmail.com',
      },
      {
        name: 'Lara',
        birthdate: '27/01/2000',
        phone: '(99) 9999999',
        email: 'larasoaresbueno@outlook.com',
      },
    ],
  },
  {
    _id: 393024,
    number: 10,
    block: 'A',
    residents: [
      {
        name: 'Lucas',
        birthdate: '20/01/1990',
        phone: '(99) 999999999',
        email: 'desouzaricardoc@gmail.com',
      },
      {
        name: 'Rosalvo',
        birthdate: '21/12/2000',
        phone: '(99) 999999999',
        email: 'rosalvo@outlook.com',
      },
    ],
  },
]

const ApartmentsListWrapper = styled.div`
  display: flex;
  flex-direction: row;

  .link {
    text-decoration: none;
  }

  .apartmentListItem {
    padding: 4px 14px;
    margin-right: 12px;
  }
`

const ApartmentsList = () => {
  return (
    <ApartmentsListWrapper>
      {apartmentsList.map((apartment) => (
        <Link className="link" to={`/apartments/${apartment._id}`}>
          <Paper className="apartmentListItem">
            <p>
              <b>Number: </b>
              {apartment.number}
            </p>
            <p>
              <b>Block: </b>
              {apartment.block}
            </p>
            <div>
              <b>Residents: </b>
              {apartment.residents.map((resident, index) => (
                <span>
                  {' '}
                  {resident.name}
                  {index < apartment.residents.length - 1 ? ',' : ''}
                </span>
              ))}
            </div>
          </Paper>
        </Link>
      ))}
    </ApartmentsListWrapper>
  )
}

export default ApartmentsList
