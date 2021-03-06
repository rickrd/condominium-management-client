import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Table = styled.div`
  padding: 1em;
  border: 1px solid #e3e4e6;
  max-width: 100%;
`

const TableRow = styled.div`
  display: flex;

  &:not(:last-child) {
    border-bottom: 1px solid #e3e4e6;
  }

  &:hover {
    background: #f7f9fa;
    cursor: pointer;
    color: #303f9f;
  }
`

const TableCell = styled.span`
  flex: 1 auto;
  padding: 0.5em;
  font-size: 0.8em;
`

const HeaderTableRow = styled(TableRow)`
  &:hover {
    background: initial;
    color: initial;
    cursor: auto;
  }
`

const HeaderTableCell = styled(TableCell)`
  color: #a0a1a2;
`

const TableContent = styled.div`
  max-height: 40em;
  overflow-y: overlay;
`

/**
 * Renders the table header based on schema properties
 *
 * @param {Array} propertiesKeys The array of properties keys for accessing properties contents
 * @param {Object} properties The schema properties object for defining header elements
 */
const renderTableHeader = (propertiesKeys, properties) => (
  <HeaderTableRow>
    {propertiesKeys.map((propertyKey) => {
      const currentProperty = properties[propertyKey]
      const { title } = currentProperty

      return <HeaderTableCell key={propertyKey}>{title}</HeaderTableCell>
    })}
  </HeaderTableRow>
)

/**
 * Component responsible for rendering a dynamic listing table based on a GraphQL query and a JSON schema
 *
 * @param {Object} schema The JSON schema what will be used for defining the table structure
 * @param {Object} query The query used for getting and populating data
 * @param {Function} onRowClick The handler that will be called when clicking on a row
 */
const QueryDataList = ({ schema: { properties, onRowClick = false }, query: { value, nest } }) => {
  const { loading, error, data } = useQuery(value)

  const propertiesKeys = Object.keys(properties)

  const history = useHistory()

  const handleClick = (path) => {
    history.push(path)
  }

  return (
    <Table>
      {renderTableHeader(propertiesKeys, properties)}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured. Please try again</p>
      ) : (
        <TableContent>
          {data[nest[0]].map((dataItem, i) => {
            return nest.length <= 1 ? (
              <TableRow onClick={onRowClick ? () => handleClick(onRowClick(dataItem)) : () => true} key={i}>
                {propertiesKeys.map((property) => {
                  const currentProperty = properties[property]
                  const { renderCell } = currentProperty

                  return <TableCell key={property}>{renderCell ? renderCell(dataItem) : dataItem[property]}</TableCell>
                })}
              </TableRow>
            ) : (
              dataItem[nest[1]].map((item, i) => (
                <TableRow onClick={onRowClick ? () => onRowClick(item) : () => true} key={i}>
                  {propertiesKeys.map((property) => {
                    const currentProperty = properties[property]
                    const { renderCell } = currentProperty

                    return <TableCell key={property}>{renderCell ? renderCell(item) : item[property]}</TableCell>
                  })}
                </TableRow>
              ))
            )
          })}
        </TableContent>
      )}
    </Table>
  )
}

export default QueryDataList
