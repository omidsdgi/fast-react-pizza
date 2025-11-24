const API_URL = 'https://react-fast-pizza-api.jonas.io/api';

const pizzaImages = {
  '1': 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&h=200&fit=crop',
  '2': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop',
  '3': 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=200&h=200&fit=crop',
  '4': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop',
  '5': 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=200&h=200&fit=crop',
  '6': 'https://images.unsplash.com/photo-1598023696416-0193a0bcd302?w=200&h=200&fit=crop',
  '7': 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=200&h=200&fit=crop',
  '8': 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=200&h=200&fit=crop',
  '9': 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=200&h=200&fit=crop',
  '10': 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=200&h=200&fit=crop',
  '11':'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop&q=80',
  '12': 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&h=200&fit=crop',
  '13': 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=200&h=200&fit=crop',
  '14': 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=200&h=200&fit=crop',
  '15': 'https://images.unsplash.com/photo-1552539618-7eec9b4d1796?w=200&h=200&fit=crop',
  '16': 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=200&h=200&fit=crop',
  '17': 'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?w=200&h=200&fit=crop',
  '18': 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=200&h=200&fit=crop',
};

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error('Failed getting menu');

  const { data } = await res.json();

  return data.map((pizza)=>{
    const pizzaId= pizza.imageUrl.match(/pizza-(\d+)/)?.[1] || '1';
    console.log(`Pizza ID: ${pizza.id}, Name: ${pizza.name}, Extracted ID: ${pizzaId}`);
    return {
      ...pizza,
      imageUrl: pizzaImages[pizzaId] || pizzaImages['1']
    };
  })
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error('Failed creating your order');
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error('Failed updating your order');
  }
}
