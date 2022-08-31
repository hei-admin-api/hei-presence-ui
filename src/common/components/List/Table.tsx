import { keyframes, Table as TableContent, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { TableProps } from '../../../types/proptypes'
import { useData } from '../../../utils/hooks/use-data';

export const Table = ({ fields, resource }: TableProps) => {
  const [dataSet, setDataSet] = useState<any[]>([]);
  const { getList } = useData();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await getList(resource);
        setDataSet(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetch();
  }, []);

  const renderData = useCallback(() => (
    dataSet.map((dataset) => {
      const keys = Object.keys(dataset);
      return (
        <Tr>
          {keys.map((k) => (
            k !== 'id' && <Td>{dataset[k as keyof typeof dataset]}</Td>
          ))}
        </Tr>
      )
    })
  ), [dataSet]);
  
  return (
    <TableContainer bg={useColorModeValue("whiteAlpha.900", "blackAlpha.200")} borderRadius={4}>
      <TableContent variant='simple'>

        <Thead>
          <Tr>
            {fields.map((label) => (
              <Th>{label}</Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          {renderData()}
        </Tbody>
      </TableContent>
    </TableContainer>
  )
}
