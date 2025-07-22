## Axios Lab



### Setup Instructions

1. **Initialize a new Node project**

```bash
mkdir axios-lab
cd axios-lab
npm init -y
```

2. **Install axios**

```bash
npm install axios
```

3. **Create an `app.js` file**

```bash
touch app.js
```

---

### Part 1: Read API Docs

Go to the [REST Countries API Documentation](https://restcountries.com/) and read about how to get data for a specific country.

---

### Tasks

1. **Function: `getBahrain()`**

* Use axios to make a GET request to the REST Countries API.
* Fetch and return the data for Bahrain.
* BONUS: Print the name, capital, population, and region to the console.

---

2. **BONUS Function: `getCountry(country)`**

* Make this function dynamic. Accept a country name as an argument.
* Use it to return information about *any* valid country name (e.g., `getCountry("japan")`)
* Handle errors if the country doesn't exist.

---

### Part 2: Read Second API Docs

Assume we have a fictional API available at:

```
https://students-api-0l1u.onrender.com/students
```

---

3. **Function: `getAllStudents()`**

* Use `axios` to fetch all students from the API above.
* After you get the array from the API and store it in the variable use the JavaScript .filter() method to return an array of only students whose `city` is `"Manama"`.
* Print the filtered list.

---

### Sample Function Signatures

```js
const axios = require('axios');

async function getBahrain() {
  // Your code here
}

async function getCountry(country) {
  // Bonus: Your code here
}

async function getAllStudents() {
  // Your code here
}

getBahrain();
// getCountry("japan");
// getAllStudents();
```
