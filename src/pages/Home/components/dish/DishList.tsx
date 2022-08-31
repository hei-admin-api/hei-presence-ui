import React, { useCallback, useMemo } from 'react';
import { Table } from '../../../../common/components';
import { EditDrawer } from '../../../../common/components/edit/EditDrawer';

export const DishList = () => {
  const columns = useMemo(() => ['Nom', 'Prix', 'Catégorie', 'Quantité',], []);

  const renderTable = useCallback(() => <Table resource="dishes" fields={columns} />, []);

  return (
    <>
      {renderTable()}
      <EditDrawer />
    </>
    );
  }
