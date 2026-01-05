import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || 3000);

const app = express();

// views (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// static
app.use(express.static(path.join(__dirname, 'public')));

// pages
app.get('/', (req, res) => res.render('home'));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ in_work_only listening on http://localhost:${PORT}`);
});