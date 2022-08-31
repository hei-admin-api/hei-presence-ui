import { Box, Button, Divider, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Textarea, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EditDrawer as proptypes } from '../../../../types/proptypes/edit/drawer';
import { EditDrawer } from '../../../../common/components';
import { Dish } from '../../../../types/models/Dish';
import { Order } from '../../../../types/models/Order';
import { useData } from '../../../../utils/hooks/use-data';

export const OrderEdit = ({ label, mode }: proptypes) => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const { save, update, getOne, getList } = useData<Partial<Order> | Dish>();
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState<Partial<Order>>({
    ref: '',
    category: '',
    dish: '',
    quantity: 0,
    client_name: '',
    contact: '',
    address: '',
    order_date: '',
    status: 'DELIVRED'
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrder(prev => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await getList('dishes');
        if (mode === 'update' && id) {
          const getOrder = await getOne('orders', +id);
          setOrder(getOrder as Partial<Dish>)
        }
        setDishes(data as Dish[]);
      } catch (err) {
        console.log(err);
      }
    }

    fetch();
  }, []);

  const SaveEdit = () => {
    const execute = async () => {
      try {
        if (mode === 'update' && id) {
          const response = await update('orders', +id, order);
          console.log(response);
          navigate(`/orders`);
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
          value={order.client_name}
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
        <FormLabel htmlFor='category'>Selectionner la catégorie du plat</FormLabel>
        <Select id='owner' onChange={handleChange} name="dish" value={order.category}>
          {dishes.map((dish) => (
            <option value={dish.name}>{dish.name}</option>
          ))}
        </Select>
      </Box>

      <Box>
        <FormLabel htmlFor='category'>Selectionner la catégorie du plat</FormLabel>
        <Select id='owner' defaultValue='segun' onChange={handleChange} name="status" value={order.status === 'DELIVRED' ? 'livré' : 'en cours'}>
          <option value={order.status}>Livré</option>
          <option value={order.status}>en cours</option>
        </Select>
      </Box>


      <Divider />

      <Stack spacing='24px' direction="row">
        <Button colorScheme="whatsapp" onClick={SaveEdit}>Enregistrer</Button>
        <Button colorScheme='red' onClick={() => navigate(`/orders`)}>Annuler la modification</Button>
      </Stack>
    </EditDrawer>
  );
}
