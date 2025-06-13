const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Настройка CORS
app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, 'form-data.json');

// создаем файл
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
}

app.post('/api/save-form', (req, res) => {
  try {
    //путь к файлу
    const filePath = path.join(__dirname, 'form-data.json');
    
    let allData = [];
    
    // читаем существующие данные
    try {
      const fileExists = fs.existsSync(filePath);
      if (fileExists) {
        const rawData = fs.readFileSync(filePath, 'utf8');
        allData = JSON.parse(rawData);
        console.log('Прочитано записей:', allData.length);
      }
    } catch (readError) {
      console.log('Создаём новый файл');
    }
    
    // добавляем новые данные 
    const newEntry = {
      ...req.body,
      _id: Date.now(), // Уникальный ID
      _createdAt: new Date().toISOString()
    };
    allData.push(newEntry);
    
    // записываем
    fs.writeFileSync(filePath, JSON.stringify(allData, null, 2), { flag: 'w' });
    
    console.log('Всего записей после сохранения:', allData.length);
    res.json({ 
      success: true,
      totalEntries: allData.length,
      lastEntry: newEntry
    });
  } catch (error) {
    console.error('FULL ERROR:', error);
    res.status(500).json({ 
      error: error.message,
      stack: error.stack 
    });
  }
});

app.get('/api/get-form-data', (req, res) => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Ошибка чтения:', error);
    res.status(500).json({ error: 'Ошибка при чтении данных' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});