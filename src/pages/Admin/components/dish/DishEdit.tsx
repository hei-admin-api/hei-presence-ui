import { Box, Button, Divider, FormLabel, Input, Select, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EditDrawer as proptypes } from '../../../../types/proptypes/edit/drawer';
import { EditDrawer } from '../../../../common/components';
import { Dish } from '../../../../types/models/Dish';
import { DishCategory } from '../../../../types/models/DishCategory';
import { useData } from '../../../../utils/hooks/use-data';

export const DishEdit = ({ label, mode }: proptypes) => {
  const [categories, setCategories] = useState<DishCategory[]>([]);
  const { save, update, getOne, getList } = useData<Partial<Dish> | DishCategory>();
  const { id } = useParams();
  const navigate = useNavigate();
  const [dish, setDish] = useState<Partial<Dish>>({
    name: '',
    category: '',
    price: 0,
    quantity: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setDish(prev => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await getList('categories');
        if (mode === 'update' && id) {
          const getDish = await getOne('dishes', +id);
          setDish(getDish as Partial<Dish>)
        }
        setCategories(data as DishCategory[]);
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
          const response = await update('dishes', +id, dish);
          console.log(response);
          navigate(`/admin/dishes`);
        } else {
          save('dishes', dish);
        }

        alert('pushed')
      } catch (err) {
        console.log(err);
      }
    }

    execute();
  }

  return (
    <EditDrawer label={label} mode={mode}>
      <Box>
        <FormLabel htmlFor="name">Nom du plat</FormLabel>
        <Input
          placeholder='exemple: Gratin'
          name="name"
          value={dish.name}
          onChange={handleChange}
        />
      </Box>


      <Box>
        <FormLabel htmlFor='price'>Prix du plat</FormLabel>
        <Input
          placeholder='exemple: 20000'
          onChange={handleChange}
          name="price"
          value={dish.price}
        />
      </Box>



      <Box>
        <FormLabel htmlFor='category'>Selectionner la catégorie du plat</FormLabel>
        <Select id='owner' defaultValue='segun' onChange={handleChange} name="category" value={dish.category}>
          {categories.map((category) => (
            <option value={category.label}>{category.label}</option>
          ))}
        </Select>
      </Box>

      <Box>
        <FormLabel htmlFor='quantity'>Entrer la quantité initial</FormLabel>
        <Input
          placeholder='exemple: 100'
          onChange={handleChange}
          name="quantity"
          value={dish.quantity}
        />
      </Box>

      <Divider />

      <Stack spacing='24px' direction="row">
        <Button colorScheme="whatsapp" onClick={SaveEdit}>Enregistrer</Button>
        <Button colorScheme='red' onClick={() => navigate(`/admin/dishes`)}>Annuler la modification</Button>
      </Stack>
    </EditDrawer>
  );
}
