export async function saveToJson(data) {
  try {
    const response = await fetch('http://localhost:3001/api/save-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Ошибка сервера');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Ошибка сохранения:', error);
    throw new Error('Не удалось подключиться к серверу');
  }
}