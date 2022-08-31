import React, { useCallback, useEffect, useState } from 'react';
import { Box, Button, Divider, FormLabel, HStack, Input, Select, Stack } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { EditDrawer as proptypes } from '../../../../types/proptypes/edit/drawer';
import { EditDrawer } from '../../../../common/components';
import { Dish } from '../../../../types/models/Dish';
import { Order } from '../../../../types/models/Order';
import { useData } from '../../../../utils/hooks/use-data';
import { DishCategory } from '../../../../types/models/DishCategory';
import { filterDishes } from '../../../../utils/functions';

export const OrderEdit = ({ label, mode }: proptypes) => {
  const { save, update, getOne, getList } = useData<Partial<Order | DishCategory> | Dish>();
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('');
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [categories, setCategories] = useState<DishCategory[]>([]);
  const { id } = useParams();
  const [order, setOrder] = useState<Partial<Order>>({
    ref: '',
    dish: 0,
    quantity: 0,
    clientName: '',
    contact: '',
    address: '',
    orderDate: '',
    status: 'DELIVRED'
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrder(prev => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    filterDishesByCategory();
    const fetch = async () => {
      try {
        const { data } = await getList('dishes');
        const categories = await getList('categories');
        setDishes(data as Dish[]);
        setCategories(categories.data as DishCategory[]);
        if (mode === 'update' && id) {
          const getOrder = await getOne('orders', +id);
          setOrder(getOrder as Partial<Dish>)
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetch();
  }, []);

  const filterDishesByCategory = useCallback(() => (
    filterDishes(selectedFilter, dishes)
  ), [selectedFilter]);
  
  const SaveEdit = () => {
    const execute = async () => {
      try {
        if (mode === 'update' && id) {
          const response = await update('orders', +id, order);
          console.log(response);
          navigate(`/admin/orders`);
        } else {
          save('orders', order);
        }
      } catch (err) {
        console.log(err);
      }
    }

    execute();
  }

  return (
    <EditDrawer label={label} mode={mode}>
      <Box>
        <FormLabel htmlFor="name">Nom du client</FormLabel>
        <Input
          placeholder='exemple: client'
          name="client_name"
          value={order.clientName}
          onChange={handleChange}
        />
      </Box>


      <Box>
        <FormLabel htmlFor='contact'>Contact</FormLabel>
        <Input
          placeholder='exemple: 034 032 512 36'
          onChange={handleChange}
          name="price"
          value={order.contact}
        />
      </Box>

      <Box>
        <FormLabel htmlFor='quantity'>Quantité</FormLabel>
        <Input
          placeholder='exemple: 6'
          onChange={handleChange}
          name="quantity"
          value={order.quantity}
        />
      </Box>

      <Box>
        <HStack width="container.md">
          <Box>
            <FormLabel htmlFor='category'>Selectionner la categorie</FormLabel>
            <Select onChange={(e) => setSelectedFilter(e.target.value)} name="filterMethod" value={selectedFilter} defaultValue={"none"}>
              {categories.map((category) => (
                <option value={category.label} key={category.id}>{category.label}</option>
              ))}
              <option value="none">Afficher tout</option>
            </Select>
          </Box>

          <Box>
            <FormLabel htmlFor='category'>Selectionner le plat</FormLabel>
            <Select onChange={handleChange} name="dish" value={order.dish}>
              {filterDishesByCategory().map((dish: Dish) => (
                <option value={dish.id} key={dish.id}>{dish.name}</option>
              ))}
            </Select>
          </Box>

        </HStack>
      </Box>

      <Divider />

      <Stack spacing='24px' direction="row">
        <Button colorScheme="whatsapp" onClick={SaveEdit}>Enregistrer</Button>
        <Button colorScheme='red' onClick={() => navigate(`/admin/orders`)}>Annuler la modification</Button>
      </Stack>
    </EditDrawer>
  );
}
