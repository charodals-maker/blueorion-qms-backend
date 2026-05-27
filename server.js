### Step 2: Paste the Code
Copy the code below and paste it directly into the editor starting on *line 1*:

```javascript
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// Quick health check route to prove it works
app.get('/', (req, res) => {
    res.json({ status: "success", message: "QMS Backend is LIVE and clean!" });
});

app.listen(PORT, () => {
    console.log(Server running on port ${PORT});
});
