import React, { useCallback, useMemo } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { Table } from '../../../../common/components';

export const OrderList = () => {
  const columns = useMemo(() => ['Réference', 'Catégrorie', 'Plat', 'Qté', 'Nom du client', 'Contact', 'Adresse', 'Effectué le', 'Etat'], []);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderTable = useCallback(() => <Table resource="orders" fields={columns} />, []);

  return (
    <>
      {renderTable()}
    </>
  );
}
